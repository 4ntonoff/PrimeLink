const jwt = require('jsonwebtoken');
const { PrismaClient } = require("@prisma/client");
const {SECRET_KEY_JWT} = process.env 
const prisma = new PrismaClient();

const verifyCode = async (req, res) => {
    try {
        const code = req.body.code;

        const user = await prisma.user.findUnique({
            where: {
                code: code
            }
        });

        const codeExpiration = user && user.codeExpirationTime > new Date();

        if (codeExpiration) {
            const token = jwt.sign({ userId: user.id }, SECRET_KEY_JWT, { expiresIn: '30d' });
            res.status(200).json({ token, message: 'Code verified successfully!' });

            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    verified: true,
                    code: null,
                    codeExpirationTime: null
                }
            });
        } else {
            res.status(404).json({ message: 'Wrong code or code expired, try again.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = verifyCode;
