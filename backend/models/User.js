import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    min:3,
    required:true,
  }
},
{
  timestamps:true
})

const User = new mongoose.model("User", userSchema);

export default User;