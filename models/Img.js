const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  type: String,
  img: Array
});

mongoose.model("showrooms", roomSchema);
