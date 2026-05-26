import AnalyticsModel from "../model/analyticsModel.js";

export const getTotalShipments = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchTotalShipments();
    res.json({ success: true, totalShipments: data.totalShipments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};