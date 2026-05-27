import express from "express";

import {
    getTotalShipments,
    getDailyShipments,
    getWeeklyShipments,
    getSuccessfulDeliveries,
} from "../controller/analyticsController.js";

const router = express.Router();

router.get("/total-shipments", getTotalShipments);
router.get("/daily-shipments", getDailyShipments);
router.get("/weekly-shipments", getWeeklyShipments);
router.get("/successful-deliveries", getSuccessfulDeliveries);

export default router;