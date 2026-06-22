import express from "express";
import { contacUS } from "../controllers/public.controller.js";

const router = express.Router();

router.post("/contact-us" , contacUS);

export default router;
