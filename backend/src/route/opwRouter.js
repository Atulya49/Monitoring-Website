import express from "express";
import { createOpwprod, createOpwtest } from "../controller/opw.controller.js";

const router = express.Router();

router.route("/opwprod").post(createOpwprod);
router.route("/opwtest").post(createOpwtest);

export default router;
