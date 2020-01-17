const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./models/Img");
require("./strategy/passport");

const app = express();
mongoose.connect(keys.mongoURI2);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: ["aw12fazfa2fwef"]
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./routes/auth")(app);
require("./routes/room")(app);
require("./routes/mail")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
