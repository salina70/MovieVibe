import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "../models/Movie.js";

dotenv.config();

const movies = [
  {
    title: "Inception",
    description:
      "A skilled thief enters people's dreams to steal secrets and attempts an impossible mission.",
    genre: ["Sci-Fi", "Thriller", "Action"],
    language: "English",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42MpsAgrw1dBlvBlxBml22hYBfQ541eeI6GL4f3IJUmXEA4TKs1ZNw0sGD2cQs6PgGjdDKA&s=10",
    rating: 8.8,
  },

  {
    title: "Interstellar",
    description:
      "A group of astronauts travels through a wormhole in search of a new home for humanity.",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    language: "English",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGW7C6dkLMzUE-wYDb0t-Ze6UkSQlRzbkHdFbeuqJDeXCglJqSHLx52z2--O6a-gipTe5aIg&s=10",
    rating: 8.7,
  },

  {
    title: "The Dark Knight",
    description:
      "Batman faces a criminal mastermind known as the Joker who creates chaos in Gotham City.",
    genre: ["Action", "Crime", "Drama"],
    language: "English",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA&s=10",
    rating: 9.0,
  },

  {
    title: "Parasite",
    description:
      "A struggling family gradually becomes involved with a wealthy household in an unexpected way.",
    genre: ["Drama", "Thriller"],
    language: "Korean",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Choi Woo-shik"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRGm5Vxt-AKoe72ASaC0F1w58TkuIQTuYrjrzhHkAcZYXXUS9WQdAuaikkuRMX50MWN01lw&s=10",
    rating: 8.5,
  },

  {
    title: "3 Idiots",
    description:
      "Three engineering students navigate friendship, academic pressure, and their dreams.",
    genre: ["Comedy", "Drama"],
    language: "Hindi",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPVBFq8FAe-R3jLEa7Nu7CXEuaAvbUwbWQF4ntx62WNJ7039ECcjH6oY&s=10",
    rating: 8.4,
  },

  {
    title: "Dangal",
    description:
      "A former wrestler trains his daughters to become successful wrestlers despite social challenges.",
    genre: ["Drama", "Sport"],
    language: "Hindi",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAj3X3l8pHj2TRRj7XL_6dz-pzxXeM6fZfKxhESWAKXnDJUMv7rA8BwMIbJSsfSHpHWrh&s=10",
    rating: 8.3,
  },

  {
    title: "The Matrix",
    description:
      "A computer programmer discovers that reality is actually a simulated world controlled by machines.",
    genre: ["Sci-Fi", "Action"],
    language: "English",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy&s=10",
    rating: 8.7,
  },

  {
    title: "Avengers: Endgame",
    description:
      "The Avengers attempt to reverse the devastating consequences of Thanos' actions.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TCJTTIhB-3tfWeSdCXwYedp_7WC9SNNV_294aXPRCA&s",
    rating: 8.4,
  },

  {
    title: "Titanic",
    description:
      "A young couple from different social classes falls in love aboard the ill-fated Titanic.",
    genre: ["Romance", "Drama"],
    language: "English",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA&s=10",
    rating: 7.9,
  },

  {
    title: "Joker",
    description:
      "A troubled man faces rejection and isolation while gradually transforming into the Joker.",
    genre: ["Crime", "Drama", "Thriller"],
    language: "English",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ&s=10",
    rating: 8.4,
  },

  {
    title: "La La Land",
    description:
      "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    genre: ["Romance", "Drama", "Musical"],
    language: "English",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lCb_n9zpiK_Mte6VOrK3WPaDcWGdtUeqSzudKld4xexIlIXl3HnW_jhTHD1PsS-30FgkzQ&s=10",
    rating: 8.0,
  },

  {
    title: "Whiplash",
    description:
      "A young drummer enters an intense relationship with a demanding music instructor.",
    genre: ["Drama", "Music"],
    language: "English",
    cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO653490nQLB0El4X-wiKuG1AwhGb-Mjv3cMi95ItYi2jOdIQPv9QsOUE&s=10",
    rating: 8.5,
  },

  {
    title: "Spirited Away",
    description:
      "A young girl enters a mysterious spirit world and must find a way to save her parents.",
    genre: ["Animation", "Fantasy", "Adventure"],
    language: "Japanese",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BOXxai36m4TLf6kXGg9eCzc6JDDbyr6cO6GwsPvgl-BWGCaIw0X3LbP6Vy18dXX9gAvM&s=10",
    rating: 8.6,
  },

  {
    title: "Your Name",
    description:
      "Two teenagers mysteriously begin switching bodies and develop a deep connection.",
    genre: ["Animation", "Romance", "Fantasy"],
    language: "Japanese",
    cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Masami Nagasawa"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uGf6hrJrdacDNQjKQNa1hU2EBAnDgWcvafdM7mnNNN3mPM3rfODurZlx7qDKEgvRQkKf&s=10",
    rating: 8.4,
  },

  {
    title: "The Shawshank Redemption",
    description:
      "A banker sentenced to prison forms an unlikely friendship and secretly plans his escape.",
    genre: ["Drama"],
    language: "English",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw&s=10",
    rating: 9.3,
  },

  {
    title: "Forrest Gump",
    description:
      "A kind-hearted man experiences several major events in American history while following his own journey.",
    genre: ["Drama", "Romance"],
    language: "English",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ&s=10",
    rating: 8.8,
  },

  {
    title: "PK",
    description:
      "An innocent alien stranded on Earth questions human beliefs and social customs.",
    genre: ["Comedy", "Drama", "Fantasy"],
    language: "Hindi",
    cast: ["Aamir Khan", "Anushka Sharma", "Sushant Singh Rajput"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-IAthtWDB_1QSPI1zu3ItMaJKKw9w4zxMRmdAGMcMRDRkHQeZ3HOGkT6Rrt5oXtV4Cgz&s=10",
    rating: 8.1,
  },

  {
    title: "Kabir Singh",
    description:
      "A brilliant but troubled surgeon struggles with anger, addiction, and a broken relationship.",
    genre: ["Romance", "Drama"],
    language: "Hindi",
    cast: ["Shahid Kapoor", "Kiara Advani", "Arjan Bajwa"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8cZYG3SnJ42MExaYmrW5zPYxvkDuk9HdxDoLtL0JO760O1KQ5K9fU6jDQhOjPObgnd7lWg&s=10",
    rating: 7.0,
  },

  {
    title: "The Social Network",
    description:
      "The story of the creation of Facebook and the conflicts surrounding its rise.",
    genre: ["Drama", "Biography"],
    language: "English",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq82iUSOa4G9LHmnj-2HUTz-F0uKrL3LSxNrpA3XocxxqK6MuOY2p0xECX&s=10",
    rating: 7.8,
  },

  {
    title: "Everything Everywhere All at Once",
    description:
      "A woman discovers multiple versions of herself across different universes and must save them from destruction.",
    genre: ["Action", "Comedy", "Sci-Fi"],
    language: "English",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6n0N5NVFJhglILQYRF9hswb8iQ4lOw3cF2Qy7pH9aRPLZEnGW9cUbWYhyqTko_VJL7D8zQ&s=10",
    rating: 7.8,
  },
];

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Movie.deleteMany({});
    console.log("Old movies deleted");

    await Movie.insertMany(movies);
    console.log(`${movies.length} movies inserted successfully`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedMovies();