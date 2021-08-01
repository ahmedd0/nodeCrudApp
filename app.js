const express = require("express");
const app = express();
app.use(express.json());

const usersRouter = require("./users.router");
app.get("/", (req, res) => {
  res.send("THIS IS HOME PAGE");
});
app.use(usersRouter);
app.listen(3000, () => {
  console.log("app is running");
});
