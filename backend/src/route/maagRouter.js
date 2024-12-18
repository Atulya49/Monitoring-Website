import express from "express";
import { createMaagdev, createMaaguat } from "../controller/maag.controller.js";

const router = express.Router();

router.route("/maaguat").post(createMaaguat);
router.route("/maagdev").post(createMaagdev);

export default router;
