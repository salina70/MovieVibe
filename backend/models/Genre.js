import mongoose from 'mongoose'

const genreSchema = mongoose.Schema({
  name:{
    type:[String],
    required:true,
    unique:true,
    trim:true,
  },
  
},
{
  timestamps: true
})

const Genre = new mongoose.model("Genre", genreSchema);

export default Genre;
