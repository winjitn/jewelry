const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const existing = await User.findOne({
      username: username,
      password: password
    });
    if (existing) {
      console.log("success LOGIN");
      return done(null, existing);
    }
    console.log("FAILED");
    return done(null, false);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
