var jwt = require("jsonwebtoken");

// Middleware function to check for token
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_PRIVATE_KEY); // returns {username, role}
    req.user = verified;
    next();

  } catch (error) {
    res.status(401).send("Invalid Token!");
  }
};