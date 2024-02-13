const userRouter = require("express").Router();

userRouter.post("/register", (req, res) => {
  let { firstName, lastName, email } = req.body;
});

userRouter.post("/login", (req, res) => {
  let { email } = req.body;
});

module.exports = userRouter;
