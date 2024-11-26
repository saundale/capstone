const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    type: {
      type:String,
      required:[true,"There must be type of service"],
    },
    code: {
      type:String,
      required:[true,"There must be code of service"],
      unique:[true,"code must be unique"]
    },
    description: {
      type:String,
      required:[true,"There must be description of service"],
    },
    imgUrl: {
      type:String,
      required:[true,"There must be url of service"],
    },
    detail: [String],
  });
  
module.exports = mongoose.model("services", serviceSchema);