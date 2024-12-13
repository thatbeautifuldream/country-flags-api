const express = require("express");
const router = express.Router();
const flagController = require("../controllers/flagController");

// GET /api/flags
router.get("/", flagController.getAllFlags);

// GET /api/flags/:countryCode
router.get("/:countryCode", flagController.getFlagByCountryCode);

// Add new routes for all flat and all shiny flags
router.get("/flat/all", flagController.getAllFlatFlags);
router.get("/shiny/all", flagController.getAllShinyFlags);

// Keep existing specific country routes after
router.get("/flat/:countryCode", flagController.getFlatFlag);
router.get("/shiny/:countryCode", flagController.getShinyFlag);

module.exports = router;
