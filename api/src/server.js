const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Routes
const registerRoute = require('./routes/Register/register.js')
const loginRoute = require('./routes/Login/login.js')

const port = process.env.PORT 

const app = express()

app.use(express.json())
app.use(cors())

app.post('/register', registerRoute)
app.post('/login', loginRoute)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})