import jwt from 'jsonwebtoken'
import User from '../models/user.js';


const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decodeData.id);
        next()
    }
    catch (error) {
        res.status(401).send({ error: "Something is Wrong " })
    }
}


const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.isAdmin)) {
        return next(
        res.status(403).send({ error: "Role: ${req.user.isAdmin} is not allowed to access this resource  " })
        );
      }
  
      next();
    };
  };



export { authMiddleware ,authorizeRoles }