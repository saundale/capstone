const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  mobile: {
    type:Number,
    required:[true,"There must be mobile number for request"],
  },
  email: {
    type:String,
    required:[true,"There must be email for the request"],
  },
  amount:{
    type:Number,
    required:[true,"There must be amount for request"],
  },
  type: {
    type:String,
    required:[true,"There must be type for the request"],
  },
  msg: String,
  code: {
    type:String,
    required:[true,"There must be code for the request"],
  },
});


module.exports = mongoose.model("requests", requestSchema);
