const express = require("express");
const bodyParser = require("./node_modules/body-parser");
const mainRoutes = require("./routes/main");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const User = require("./user");

const app = express();

mongoose.connect("mongodb://localhost/closet-binder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('node_modules'));


app.use(mainRoutes);

app.listen(8000, () => {
  console.log("Node.js listening on port " + 8000);
});

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: ["helloworld"],
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, function (err, user) {
//     done(null, user);
//   });
// });

// passport.use(
//   "google",
//   new GoogleStrategy(
//     {
//       clientID:
//         "622454366394-i9al7rjq4ngvl8jnjq5nq9520ht7k92a.apps.googleusercontent.com",
//       clientSecret: "3JraGu7uz9lX5KDL69fnzfse",
//       callbackURL: "logged/current_user",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOne({ googleId: profile.id }).then((existingUser) => {
//         if (existingUser) {
//           // we already have a record with the given profile ID
//           done(null, existingUser);
//         } else {
//           // we don't have a user record with this ID, make a new record!
//           new User({
//             googleId: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//           })
//             .save()
//             .then((user) => done(null, user));
//         }
//       });
//     }
//   )
// );

// const googleAuth = passport.authenticate("google", {
//   scope: ["profile", "email"],
// });

// app.get("/login", googleAuth);

// app.get("/callback", googleAuth, (req, res) => {
//   res.send("You are logged in via Google!");
// });

// app.get("/logged/current_user", (req, res) => {
//   console.log(req.user);
//   res.send(req.user);
// });

// app.get("/logged/logout", (req, res) => {
//   req.logout();
//   res.send(req.user);
// });

// app.listen(4000);
