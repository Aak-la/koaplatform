const express = require("express");
const router = express.Router();
router.get("/comment", (req, res) => {
    const { result4 } = require("../../mock/blog");
    res.send(result4);
    console.log(result4)
  
  });
  router.get(/\/?(\?.+)?$/, (req, res) => {
    const options = req.baseUrl;
    const { result5 } = require("../../mock/blog");
    res.send(result5);
  });
  module.exports = router;