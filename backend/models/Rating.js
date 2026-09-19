import mongoose from 'mongoose'

const ratingScehma = mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
   movie_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Movie"
  },
  description:{
    type:String,
    trim:true,
  },
  total_rating:{
type:Number,
required:true,

  }
})

const Rating = new mongoose.model("Rating", ratingScehma);

export default Rating;