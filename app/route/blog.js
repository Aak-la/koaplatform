const express = require("express");
const router = express.Router();
router.get("/type", (req, res) => {
  const { result1 } = require("../../mock/blog");
  res.send(result1);
});

router.get(/(\?.+)?$/, (req, res) => {
  const options = req.baseUrl;
  const { result2 } = require("../../mock/blog");
  res.send(result2);
});
router.get(/[^/]+$/, (req, res) => {
  const options = req.baseUrl;
  const { result3 } = require("../../mock/blog");
  res.send(result3);
});
module.exports = router;
