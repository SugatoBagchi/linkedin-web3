const jsonwebtoken = require("jsonwebtoken");

function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({
      status: "error",
      message: "Unauthorized",
    });
  }
  let token;

  try {
    token = req.headers.authorization.split(" ")[1];
  } catch (error) {
    return res.status(401).send({
      status: "error",
      message: "Unauthorized",
    });
  }

  let decoded;
  try {
    decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).send({
      status: "error",
      message: "Unauthorized",
    });
  }
  req.user = decoded;
  next();
}

module.exports = authenticate;
