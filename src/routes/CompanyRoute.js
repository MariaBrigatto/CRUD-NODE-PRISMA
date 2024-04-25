import { Router } from "express";
import { getCompany, getCompanybyID } from "../controller/CompanyController.js";

const router = Router()

router.get('/search', getCompany, getCompanybyID )

router.post('/insert', )

router.put('/update', )

router.delete('/delete', )

export default router