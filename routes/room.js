const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const Room = mongoose.model("showrooms");

module.exports = app => {
  app.get("/api/products", requireLogin, async (req, res) => {
    const room = await Room.findOne({ type: req.user._doc.type });

    res.send(room);
  });
};
