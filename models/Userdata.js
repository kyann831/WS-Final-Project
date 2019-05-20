const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserdataSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
   testscore: {
    type: String,
    required: false
    },
    corefive: {
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
    