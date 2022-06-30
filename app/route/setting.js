const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const date = require("../../mock/setting.js");
  res.send(date);
});
module.exports = router;
