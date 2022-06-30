const express = require("express");
const router = express.Router();
router.get(/^\/?(\?.+)?$/, (req, res) => {
  const options = req.baseUrl;
    const {result2} = require("../../mock/message.js");
    res.send(result2);
  });
router.post("/", (req, res) => {
  const {result1} = require("../../mock/message.js");
  res.send(result1);
});

module.exports = router;
