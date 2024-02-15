require('dotenv').config();
const express = require("express");
const cors = require("cors");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
require('./helpers/passport.js')
// Routes
const authRouter = require('./routes/auth.js')

const port = process.env.PORT

const app = express()


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none", //allow cross-site requests from different origin
      maxAge: 1000 * 60 * 24 * 7 // one week
    }
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter)
app.get('/main', (req, res) => {
  res.send('Dobro pojalovati')
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
