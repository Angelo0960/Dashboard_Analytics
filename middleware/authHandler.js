// middleware/authHandler.js
import { verifyToken } from '../services/authServices.js';

const checkToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const user = await verifyToken(token);
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: err.message });
    }
};

export default checkToken;