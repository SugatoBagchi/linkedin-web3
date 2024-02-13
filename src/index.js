const { createClient } = require("@supabase/supabase-js");
const { PrismaClient } = require("@prisma/client");
const compression = require("compression");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const userRouter = require("./routes/user/userRouter");

dotenv.config();

const app = express();

app.use(cors());
app.use(compression());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);

// app.post("/add-test-data", async (req, res) => {
//   console.log(req.body);
//   const { name } = req.body;
//   const result = await prisma.testTable.create({
//     data: { name },
//   });
//   res.json(result);
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


