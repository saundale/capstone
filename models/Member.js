const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    mobile:{
      type:Number,
      required:[true,"There must be mobile number for member"],
      unique:[true,"mobile number must be unique"]
    },
    email:  {
      type:String,
      required:[true,"There must be email for the member"],
      unique:[true,"email must be unique"]
    },
    occupation:  {
      type:String,
      required:[true,"Occupation must be provided"],
    },
    createpassword:  {
      type:String,
      required:[true,"Password is required"],
      minlength:[8,"password must be of 8 characters"]
    },
  });

module.exports = mongoose.model("members", memberSchema);