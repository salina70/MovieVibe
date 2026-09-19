import mongoose from "mongoose";
import { NaniError } from "nani";
import Movie from "../models/Movie.js";

export const getMovie = async(req, res) =>{
  let data = await Movie.find();
  res.send({
    status:"success",
    movies:data,
  })
}

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      movie:movie,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};