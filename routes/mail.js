const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");

const oauth2Client = new OAuth2(
  keys.ClientID,
  keys.ClientSecret,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: keys.RefreshToken
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "your@gmail.com",
    clientId: keys.ClientID,
    clientSecret: keys.ClientSecret,
    refreshToken: keys.RefreshToken,
    accessToken: accessToken
  }
});

module.exports = app => {
  app.post("/api/contact", (req, res) => {
    const { name, email, business, notes } = req.body;
    const mailOptions = {
      from: "your@gmail.com",
      to: "destination@gmail.com",
      subject: "Contact",
      generateTextFromHTML: true,
      html: `<div>name:${name}<br/>email:${email}<br/>business:${business}<br/>notes:${notes}</div>`
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? res.send("error") : res.send("success");
      smtpTransport.close();
    });
  });

  app.post("/api/quote", requireLogin, (req, res) => {
    const { items, email, notes } = req.body;
    const mailOptions = {
      from: "your@gmail.com",
      to: "destination@gmail.com",
      subject: "Quote",
      generateTextFromHTML: true,
      html: `<div>items:${items}<br/>email:${email}<br/>notes:${notes}</div>`
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? res.send("error") : res.send("success");
      smtpTransport.close();
    });
  });
};
