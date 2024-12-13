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
}

module.exports = new FlagController();
