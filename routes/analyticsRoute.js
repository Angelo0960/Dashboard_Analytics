import express from "express";

import {
    getTotalShipments,
    getDailyShipments,
    getWeeklyShipments,
    getSuccessfulDeliveries,
    getDelayedDeliveries
} from "../controller/analyticsController.js";

const router = express.Router();

router.get("/total-shipments", getTotalShipments);
router.get("/daily-shipments", getDailyShipments);
router.get("/weekly-shipments", getWeeklyShipments);
router.get("/successful-deliveries", getSuccessfulDeliveries);
router.get("/delayed-deliveries", getDelayedDeliveries);

export default router;