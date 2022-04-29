const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = async (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required to authenticate");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(403).send("Invalid token");
  }

  next();
};

module.exports = verifyToken;
