import express from 'express'
import { getMovie, getMovieById } from '../controllers/movieController.js';

const router = express.Router();

router.get("/", getMovie )
router.get("/:id", getMovieById);


export default router;