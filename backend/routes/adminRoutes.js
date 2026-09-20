import express from 'express'
import { getAdminData, totalRating, totalUser } from '../controllers/adminController';

const router = express();

router.get("/alldata", getAdminData )
router.get("/totaluser", totalUser)
router.get("/totalrating",totalRating )



export default router;