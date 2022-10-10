const express = require("express")
const router = new express.Router
const { protect } = require("../middlewares/authMiddleware")

module.exports = router