const authRouter = require("express").Router();

const generateJwt = require("../../utils/auth/generateJwt");

authRouter.post("/register", (req, res) => {
  let { firstName, lastName, email } = req.body;
  let token = generateJwt(email);
  res.json({ token });
});

authRouter.post("/login", (req, res) => {
  let { email } = req.body;
  let token = generateJwt(email);
  res.json({ token });
});

module.exports = authRouter;