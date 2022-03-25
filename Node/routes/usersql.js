var express = require("express");
var router = express.Router();
const connector = require("../connect");
router.get("/createtable", function (req, res) {
  const sql =
    "CREATE TABLE userstable (id int AUTO_INCREMENT PRIMARY KEY,email varchar(100),password varchar(100),userinfo text,dob date)";
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.post("/", function (req, res) {
  const { email, password, userinfo, dob } = req.body;
  var sql = `INSERT INTO userstable (email, password, userinfo, dob) VALUES ("${email}", "${password}", "${userinfo}", "${dob}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.get("/", function (req, res) {
  const sql = `SELECT * FROM userstable`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete("/:id", function (req, res) {
  const sql = `DELETE  FROM userstable WHERE id = ${parseInt(req.params.id)}`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete("/", function (req, res) {
  const sql = `DELETE FROM userstable`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.put("/update/:id", function (req, res) {
  const { email, password, userinfo, dob } = req.body;
  var sql = `UPDATE userstable SET email="${email}", password="${password}", userinfo="${userinfo}", dob="${dob}" where id=${parseInt(
    req.params.id
  )}`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
/*const getUsers = (req, res) => {
  var sql = 'select * from users';
  connector.query(sql, function (err, results) {
    res.json({ err, results });
  });
};
const postUsers = (req, res) => {
  const { email, password, userinfo, dob } = req.body;
  var sql = `insert into users (email, password, userinfo, dob) values ("${email}", "${password}", "${userinfo}", "${dob}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
const deleteUsers = (req, res) => {
  let sql;
  if (req.params.id === 'deleteAll') {
    sql = 'truncate table users';
  } else {
    sql = `delete from users where id=${Number(req.params.id)}`;
  }
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
const updateUsers = (req, res) => {
  const { email, password, userinfo, dob } = req.body;
  var sql = `update users set email="${email}", password="${password}", userinfo="${userinfo}", dob="${dob}" where id=${Number(
    req.params.id
  )}`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  updateUsers,
  createUsersTable,
};*/
module.exports = router;
