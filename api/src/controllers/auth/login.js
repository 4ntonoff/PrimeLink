const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const secret = process.env.SECRET_KEY_JWT;

const prisma = new PrismaClient();

const loginController = async (req, res) => {
    try {
        let user;

        // Check if either email or username is provided
        if (req.body.email) {
            user = await prisma.user.findUnique({
                where: {
                    email: req.body.email,
                },
            });
        } else if (req.body.username) {
            // If name is provided, check by name
            user = await prisma.user.findUnique({
                where: {
                    name: req.body.username,
                },
            });
        } else {
            return res.status(400).json({
                message: "Email or username required",
            });
        }

        if (!user) {
            return res.status(400).json({
                message: `${req.body.email ? "Email" : "Username"} not found`,
            });
        }

        const isValidPass = await bcrypt.compare(
            req.body.password,
            user.passwordHash,
        );

        if (!isValidPass) {
            return res.status(400).json({
                message: "Invalid email, phone, or password",
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

module.exports = loginController;
