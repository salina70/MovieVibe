import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    genre: {
      type: [String],
      required: true,
    },

    language: {
      type: String,
      required: true,
      trim: true,
    },

    cast: {
      type: [String],
      required: true,
    },
    poster: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;