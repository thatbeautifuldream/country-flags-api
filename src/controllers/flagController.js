const flagService = require("../services/flagService");

class FlagController {
  async getAllFlags(req, res, next) {
    try {
      const { style, size } = req.query;
      const flags = await flagService.getAllFlags(style, size);
      res.json(flags);
    } catch (error) {
      next(error);
    }
  }

  async getFlagByCountryCode(req, res, next) {
    try {
      const { countryCode } = req.params;
      const { style, size } = req.query;
      const flag = await flagService.getFlagByCountryCode(
        countryCode,
        style,
        size
      );

      if (!flag) {
        return res.status(404).json({ error: "Country not found" });
      }

      res.json(flag);
    } catch (error) {
      next(error);
    }
  }

  getFlatFlag = async (req, res, next) => {
    try {
      const { countryCode } = req.params;
      const flag = await flagService.getFlatFlag(countryCode);
      res.json(flag);
    } catch (error) {
      next(error);
    }
  };

  getShinyFlag = async (req, res, next) => {
    try {
      const { countryCode } = req.params;
      const flag = await flagService.getShinyFlag(countryCode);
      res.json(flag);
    } catch (error) {
      next(error);
    }
  };

  getAllFlatFlags = async (req, res, next) => {
    try {
      const flags = await flagService.getAllFlatFlags();
      res.json(flags);
    } catch (error) {
      next(error);
    }
  };

  getAllShinyFlags = async (req, res, next) => {
    try {
      const flags = await flagService.getAllShinyFlags();
      res.json(flags);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new FlagController();
