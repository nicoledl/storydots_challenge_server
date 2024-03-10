const jwt = require("jsonwebtoken");
require('dotenv').config();

const generateToken = ( userData ) => {
    try {
        const token = jwt.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        return token;
    } catch (error) {
        console.error("Error generating token:", error.message);
        return null;
    }
}

//middleware
const verifyToken = (req, res, next) => {
    try {
        const {token} = req.headers;
        const valueToken = JSON.parse(token).token;
        
        if (!token) {
            return res.status(401).json({ error: " provided" });
        }

        jwt.verify(valueToken, process.env.JWT_SECRET_KEY);

        next();
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return res.status(401).json({ error: "Invalid token" });
    }
};


module.exports = { generateToken, verifyToken };