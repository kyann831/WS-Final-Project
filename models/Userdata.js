const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserdataSchema = new Schema({

   testscore: {
    type: String,
    required: false
    },
    core5: {
      type: String,
      required: false
    },
    otherexercise: {
      type: String,
      required: false
    },
    
  },
  {timestamps: true});
  
    module.exports = Userdata = mongoose.model("userdata", UserdataSchema);
    