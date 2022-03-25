var express = require("express");
var router = express.Router();
var connector = require("../connect");
router.get("/createtable", (req, res) => {
  connector.query(
    "CREATE TABLE authors (first_name varchar(50), last_name varchar(13), dob date, dod date)",
    function (err, results, fields) {
      res.json({ err, results, fields });
    }
  );
});
router.get("/", function (req, res) {
  const sql = `select * from authors`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.post("/", function (req, res) {
  const { first_name, last_name, dob, dod } = req.body;
  const sql = `INSERT INTO authors VALUES ("${first_name}","${last_name}", "${dob}", "${dod}")`;
  connector.query(sql, (err, results, fields) => {
    res.json({ err, results, fields });
  });
});
router.put("/update/:item", function (req, res) {
  const sql = `UPDATE authors SET first_name="${req.body.first_name}", last_name="${req.body.last_name}",dob="${req.body.dob}",dod="${req.body.dod}" WHERE first_name="${req.params.item}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete("/:first_name", function (req, res) {
  let first_name = req.params.first_name;
  const sql = `DELETE FROM authors WHERE first_name = "${first_name}" `;
  connector.query(sql, (err, results, fields) => {
    res.json({ err, results, fields });
  });
});

router.delete("/", function (req, res) {
  const sql = `DELETE FROM authors`;
  connector.query(sql, function (err, results, fields) {
    res.json({ results });
  });
});
module.exports = router;
