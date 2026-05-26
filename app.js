import express from "express";
import dotenv from "dotenv";
import analyticsRoute from "./routes/analyticsRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ Protect all analytics endpoints
app.use("/api/analytics", analyticsRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Analytics Dashboard on port ${PORT}`));