import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt, { hash } from 'bcryptjs'
import User from "../models/User.js";


export const registerUser = async (req, res)=>{
 const {name, email, password} = req.body;
 console.log
 if(!name || !email || !password){
 return res.send({
    status:"Failure",
    message:"name, email, and password required"
  })
 }
 const existedUser =await  User.findOne({email});

 if(existedUser){
 return res.send({
    status:'failure',
    message:'user already exists'
  })
 }
 const hashed = await bcrypt.hash(password, 10);

const token = jwt.sign(
  {id:User._id},
  process.env.JWT_SECRET,
  {expiresIn:"7d"}
);


const user = await User.create({
name,
email,
  password:hashed
})

return res.status(200).send({
  status:"success",
  user:req.body
 })
}


export const loginUser = async (req, res) =>{
  const {email, password} = req.body;
  if(!email || !password){
   return res.send({
      status:"failure",
      message:"email and password both required"
    })
  }
  const existedUser = await User.findOne({email});

  if(!existedUser){
    return res.send({
      status:"failure",
      "message":"user not existed",
    })
  }
  
  const isMatch = await bcrypt.compare(
      password,
      existedUser.password
    );

  if(!isMatch){
   return res.status(401).send({
      status:"failure",
      "message":"password doesnot match"
    })
  }

  const token = jwt.sign(
    {
    id:existedUser._id,
    email:existedUser.email
  },
  process.env.JWT_SECRET,
  {expiresIn:"7d"}
);

return res.status(200).send({
  status:"success",
  "message":"user logged in",
  "data":{
    email,
    token
  }
})

}