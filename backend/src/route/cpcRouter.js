import express from "express"
import { createCpcprod, createCpctest } from "../controller/cpc.controller.js";

const router = express.Router();

router.route('/cpcprod').post(createCpcprod);
router.route('/cpctest').post(createCpctest);

export default router;