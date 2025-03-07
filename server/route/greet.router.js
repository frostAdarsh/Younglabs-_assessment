import express from "express";
import { greet } from "../controller/greet.controller.js";

const router = express.Router();

router.get("/greet",greet)

export default router;