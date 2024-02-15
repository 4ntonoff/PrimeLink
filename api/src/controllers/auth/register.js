const { PrismaClient } = require("@prisma/client");
const { sendEmail } = require("../../services/mailServices.js");
const { generateFromEmail } = require("unique-username-generator");
const generateCode = require("../../helpers/generate-code.js");

const prisma = new PrismaClient();

const registerController = async (req, res) => {
    try {
        const email = req.body.email;

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 123);

        const verificationTime = user ? new Date() < user.codeExpirationTime : null;

        const Vcode = generateCode();

        if (user && verificationTime) {
            res.status(404).json({ message: 'Try again in 3 minutes!' });
        } else if (user && !verificationTime) {
            sendEmail(email, Vcode);

            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    code: Vcode.toString(),
                    codeExpirationTime: expiresAt,
                },
            });

            console.log('New code set');

            res.status(200).json({ message: 'Email sent for code verification.' });
        } else if (!user) {
            sendEmail(email, Vcode);

            await prisma.user.create({
                data: {
                    email: req.body.email,
                    provider: 'local',
                    name: generateFromEmail(email, 3),
                    code: Vcode.toString(),
                    codeExpirationTime: expiresAt,
                    avatarUrl: req.body.avatarUrl,
                },
            });

            console.log('Email sent and user registered');

            res.status(200).json({ message: 'Email sent for code verification.' });
        }
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};

module.exports = registerController;
