const passport = require("passport");

module.exports = app => {
  app.get("/api/current_user", (req, res) => res.send(req.user));

  app.post("/api/login", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send("error");
      }
      req.logIn(user, function(err) {
        if (err) {
          res.send("error");
        }
        res.send("success");
      });
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
