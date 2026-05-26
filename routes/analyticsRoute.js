import express from "express";

import {
  getTotalShipments,
    getDailyShipments,
    getWeeklyShipments
} from "../controller/analyticsController.js";

const router = express.Router();

router.get("/total-shipments", getTotalShipments);
router.get("/daily-shipments", getDailyShipments);
router.get("/weekly-shipments", getWeeklyShipments);

export default router;