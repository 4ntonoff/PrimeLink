const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { TWILIO_NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, SECRET_KEY_JWT } = process.env
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

const prisma = new PrismaClient();

const sendOTP = async (req, res, next) => {
    const phoneNumber = req.body.phone

    try {
        const user = await prisma.user.findUnique({
            where: {
                phone: phoneNumber
            }
        })

        if (user) {

            const otpExpiresAt = new Date()
            otpExpiresAt.setMinutes(otpExpiresAt.getMinutes() + 15)

            const verificationCode = Math.floor(100000 + Math.random() * 900000)

            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    otp: verificationCode.toString(),
                    otpExpiration: otpExpiresAt
                }

            })

            client.messages
                .create({
                    body: `Your verification code is ${verificationCode}`,
                    from: TWILIO_NUMBER,
                    to: phoneNumber
                })
                .catch((err) => {
                    console.error(err)
                    res.status(500).send('Error sending verification code. try later')
                })
        } else {
            res.status(404).send('Please provide a correct number')
        }
    } catch (error) {
        res.status(500).send('Something went wrong')
    }
}

const verifyOTP = async (req, res, next) => {
    const phoneNumber = req.body.phone;
    const otp = req.body.otp;

    try {
        const user = await prisma.user.findUnique({
            where: {
                phone: phoneNumber,
            },
        });

        const verifyOtp = user.otp === otp;

        if (user && verifyOtp && user.otpExpiration) {
            const currentTime = new Date();

            if (currentTime > user.otpExpiration) {
                await prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        otp: null,
                        otpExpiration: null,
                    },
                });

                return res.status(400).json({
                    message: 'OTP has expired. Please request a new one.',
                });
            }

            // Issue a JWT token
            const token = jwt.sign(
                {
                    _id: user.id,

                },
                SECRET_KEY_JWT,
                {
                    expiresIn: '30d',
                }
            );

            const { passwordHash, ...userData } = user

            return res.json({
                userData,
                token,
            });
        }

        res.status(401).json({
            message: 'Invalid OTP',
        });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
};

module.exports = { sendOTP, verifyOTP }