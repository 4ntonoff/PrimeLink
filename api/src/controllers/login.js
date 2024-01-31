const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const secret = process.env.SECRET_KEY_JWT;

const prisma = new PrismaClient();

const loginController = async (req, res) => {
    try {
        let user;
        let identifier;

        // Check if either email or phone is provided
        if (req.body.email) {
            user = await prisma.user.findUnique({
                where: {
                    email: req.body.email,
                },
            });
            identifier = "Email";
        } else if (req.body.phone) {
            user = await prisma.user.findUnique({
                where: {
                    phone: req.body.phone,
                },
            });
            identifier = "Phone";
        } else {
            return res.status(400).json({
                message: "Email or phone number required",
            });
        }

        if (!user) {
            return res.status(400).json({
                message: `${identifier} not found`,
            });
        }

        const isValidPass = await bcrypt.compare(
            req.body.password,
            user.passwordHash,
        );

        if (!isValidPass) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                _id: user.id,
            },
            secret,
            {
                expiresIn: "30d",
            },
        );

        const { passwordHash, ...userData } = user;

        res.json({
            ...userData,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};


module.exports = loginController