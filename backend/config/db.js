import mongoose from 'mongoose';
import { NaniError } from 'nani';


const ConnectDB = async () =>{
try{
let connect = await mongoose.connect(process.env.MONGO_URI);
console.log("DB connected")
}catch(error)
{
  throw new NaniError({
    shortMessage:"error occured",
    cause:error
  })
}}

export default ConnectDB;