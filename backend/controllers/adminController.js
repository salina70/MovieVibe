import User from "../models/User.js";
import Movie from "../models/Movie.js";
import Rating from "../models/Rating.js";

export const getAdminData = async (req, res) => {
  const users = await User.countDocuments({});
  const movies = await Movie.countDocuments({});
  const ratings = await Rating.countDocuments({});

  return res.json({
    status: "success",
    message: {
      users,
      movies,
      ratings,
      genres,
    },
  });
};

export const totalUser = async (req, res)=>{
try{
  const result = await User.find({});

  return res.status(200).json({
    status:"success",
    message:result
  })
} catch(error){
  console.log(error);
  
} 
  return res.json({
    status:"success",
    message:result
  })
}

export const totalRating = async (req, res) =>{
  const result = await Rating.find({});

  return res.json({
    status:"success",
    message:result
  })
}

export const totalActor = async () =>{
const result = await Actor.find({});
return res.json({
  status:"success",
  message:result,
})
}

