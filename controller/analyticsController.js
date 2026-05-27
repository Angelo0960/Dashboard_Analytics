import AnalyticsModel from "../model/analyticsModel.js";

export const getTotalShipments = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchTotalShipments();
    res.json({ success: true, totalShipments: data.totalShipments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getDailyShipments = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchDailyShipments();
    res.json({ success: true, dailyShipments: data.dailyShipments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getWeeklyShipments = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchWeeklyShipments();
    res.json({ success: true, weeklyShipments: data.weeklyShipments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSuccessfulDeliveries = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchSuccessfulDeliveries();
    res.json({ success: true, successfulDeliveries: data.successfulDeliveries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getDelayedDeliveries = async (req, res) => {
  try {
    const data = await AnalyticsModel.fetchDelayedDeliveries();
    res.json({ success: true, delayedDeliveries: data.delayedDeliveries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};