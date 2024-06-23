const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const verifyToken = (req, res, next) => {

    try {
        const token = req.header('Authorization').split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Token Not Found or Valid' });

        const decoded = jwt.verify(token, JWT_SECRET);
        req.refUserId = decoded.userID;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token Not Found or Valid' });
    }
};

module.exports = verifyToken;