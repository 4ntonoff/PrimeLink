const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const secret = process.env.SECRET_KEY_JWT;

const prisma = new PrismaClient();

const registerController = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                ...(req.body.email && { email: req.body.email }),
                ...(req.body.phone && { phone: req.body.phone }),
                passwordHash: hashedPass,
                avatarUrl: req.body.avatarUrl,
            },
        });

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

        if (error.code === 'P2002' && error.meta?.target.includes('email')) {
            // Unique constraint violation for email
            return res.status(400).json({
                message: 'Email already in use',
            });
        }

        // Handle other error cases
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};

module.exports = registerController