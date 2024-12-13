require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./src/middleware/errorHandler");
const flagRoutes = require("./src/routes/flagRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Request logging
app.use(morgan("dev"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parser
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Country Flags API",
    version: "1.0.0",
    description:
      "An API service providing information about country flags with support for both flat and shiny flag styles",
    available_routes: {
      "GET /": "This information page",
      "GET /api/flags": "Get all country flags",
      "GET /api/flags/:countryCode": "Get flag by country code",
      "GET /api/flags/flat/all": "Get all flat-style flags",
      "GET /api/flags/shiny/all": "Get all shiny-style flags",
      "GET /api/flags/flat/:countryCode":
        "Get flat-style flag for a specific country",
      "GET /api/flags/shiny/:countryCode":
        "Get shiny-style flag for a specific country",
    },
    rate_limit: "100 requests per 15 minutes",
    documentation: "https://github.com/thatbeautifuldream/country-flags-api",
  });
});

// Routes
app.use("/api/flags", flagRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
