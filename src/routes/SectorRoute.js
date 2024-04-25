import { Router } from "express";
import { getSector } from "../controller/SectorController.js";

const router = Router()

router.get('/search', getSector)

router.post('/insert', )

export default router