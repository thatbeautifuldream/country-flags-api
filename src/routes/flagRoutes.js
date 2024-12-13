const express = require("express");
const router = express.Router();
const flagController = require("../controllers/flagController");

// GET /api/flags
router.get("/", flagController.getAllFlags);

// GET /api/flags/:countryCode
router.get("/:countryCode", flagController.getFlagByCountryCode);

module.exports = router;
