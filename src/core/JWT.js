const { config } = require("../../config");
const { statusCode } = require("../constant/index");
const jwt = require("jsonwebtoken");
const authentication = {};

authentication.generateToken = async (userDetails) => {
  return await jwt.sign({ user: userDetails }, config.TOKEN_SECRET);
};

authentication.verify = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json({ error: "Token not found" });
  }
  try {
    const data = await jwt.verify(token, config.TOKEN_SECRET);
    req.user = data.user;
    return next();
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR);
  }
};
module.exports = authentication;
