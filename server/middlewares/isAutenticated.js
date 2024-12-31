import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res , next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "You need to Login",
        success: false,
      });
    }
    // Verify the token using JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
       }
       
       req.id = decoded.userId;
           next();

       
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default isAuthenticated;