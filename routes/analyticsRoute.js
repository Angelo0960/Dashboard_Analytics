import express from "express";

import {
  getTotalShipments,
} from "../controller/analyticsController.js";

const router = express.Router();

router.get("/total-shipments", getTotalShipments);

export default router;