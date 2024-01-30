const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const authRouter = require('./controllers/auth.js')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
