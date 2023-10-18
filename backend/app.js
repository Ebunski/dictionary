const express = require("express");
const app = express();
const passport = require("passport");
const bodyParser = require('body-parser');
const User = require("./models/User.model");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const JSON_SECRET = process.env.JSON_SECRET;
require("dotenv").config();

require("./helpers/init_mongodb");

// require("./auth/passport")(passport);
// Express session
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24, // One day
//     },
//   })
// );
app.use(express.json());
app.use(cors())
app.use(passport.initialize());
// app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello World. Backend is connected.");
});
app.post('/test', (req,res) => {
  console.log(req.body)
  res.json(req.body)
})
app.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return console.log(err);
    if (!req.body.email)
      return res.send({
        message: "You have not inputed your email address.",
      });
    if (!req.body.password)
      return res.send({ message: "Please enter your password." });
    if (!user) {
      return res.send({ message: "Invalid email or password." });
    }
    req.logIn(user, (err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log("This is supposed to be user", user);
      const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
      const token = jwt.sign(
        { userId: user.id, exp: expirationTime },
        secretKey
      );
      console.log("Successful login");
      res.cookie("token", token, { httpOnly: true });
      res.json({
        message: "Successful Login",
        //   user: CryptoJS.AES.encrypt(
        //     JSON.stringify(user._doc),
        //     process.env.BEMINE_ENCRYPTER_KEY
        //   ).toString(),
      });
    })(req, res, next);
  });
});
app.post("/register", (req, res) => {
  console.log(req.body)
  res.json (req.body)
  // const { username, email, password } = req.body;
  // if (!email) return res.send({ message: "Please enter your email address." });
  // if (
  //   null ==
  //   email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   )
  // )
  //   return res.send({ message: "Please enter a valid email address." });
  // if (!password) return res.send({ message: "Please enter your password." });
  // if (!username) return res.send({ message: "Please enter your username." });
  // User.findOne({ email }).then((user) => {
  //   if (user) return res.json({ message: "User already exists." });
  //   else {
  //     const newUser = new User(req.body);
  //     bcrypt.genSalt(10, (err, salt) => {
  //       bcrypt.hash(newUser.password, salt, (err, hash) => {
  //         if (err) console.log(err);
  //         newUser.password = hash;
  //         newUser.save().catch((err) => console.log(err));
  //         console.log(newUser)
  //         res.json({ message: "Sign up successful." });
  //       });
  //     });
  //   }
  // });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => (err ? console.log(err) : console.log("Plus Ultra")));
