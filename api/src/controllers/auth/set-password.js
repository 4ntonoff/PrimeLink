const { PrismaClient } = require("@prisma/client");
require('dotenv').config()
const {SECRET_KEY_JWT} = process.env
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

const setPassword = async (req, res) => {
    try {
        const pass = req.body.password
        const username = req.body.username
        const userId = req.userId;  // Use req.userId from checkAuth middleware

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (user) {
            const token = jwt.sign({ userId: user.id }, SECRET_KEY_JWT, { expiresIn: '30d' });

            const hashedPass = await bcrypt.hash(pass, 10);

            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    name: username,
                    passwordHash: hashedPass
                }
            });

            res.status(200).send({token})
            
        } else {
            res.status(404).send('Try again');
        }
    } catch (error) {
        console.error(error);

        res.status(401).json({ error: 'Invalid password or expired token' });
    }
}

module.exports = setPassword;
