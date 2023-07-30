import { getCreyente } from "../controllers/micro.controllers.js";
import { Router } from "express";

const router =  Router();

router.get("/", getCreyente)

export default router;