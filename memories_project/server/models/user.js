import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type:String, requred:true},
  email: {type:String, required: true},
  password: {type: String, required: true},
  id: {type: String}
});

export default mongoose.model("User", userSchema);