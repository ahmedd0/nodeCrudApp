const mysql2 = require("mysql2");
const router = require("express").Router();
const query = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",
});

// ADD USER TO DATA BASE
router.post("/addUser", (req, res) => {
  query.execute(
    `insert into users (id,username,age,password,email) values ('${req.body.id}','${req.body.username}','${req.body.age}','${req.body.password}','${req.body.email}')`
  );
  res.json({ message: "DONE" });
});

// GET ALL USERS DATA (Retrieve)
router.get("/getAllUsers", (req, res) => {
  query.execute(`SELECT * FROM users`, (err, users) => {
    res.json(users);
  });
});
// UPDATE USER DATA (UserName and Age)
router.post("/updateUser", (req, res) => {
  query.execute(
    `update users set  username ='${req.body.username}', age= '${req.body.age}' where id = '${req.body.id}'`
  );
  res.json({ message: "DONE" });
});
// DELETE USER
router.post("/deleteUser", (req, res) => {
  query.execute(`delete from users where id = '${req.body.id}'`);
  res.json({ message: "DONE" });
});
// SEARCH FOR USER
router.post("/search", (req, res) => {
  console.log(req.body.id ? req.body.id:req.body.username);
  query.execute(
    `SELECT * FROM users where id = '${req.body.id}' OR username = '${req.body.username}'`,
    (err, data) => {
      res.json(data);
    }
  );
});
module.exports = router;
