module.exports = (req, res, next) => {
  if (!req.user) {
    return res.send({ error: "you must log in" });
  }

  next();
};
