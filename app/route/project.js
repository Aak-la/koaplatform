const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const date = require("../../mock/project.js");
  res.send(date);
});
module.exports = router;
