const flags = require("../../flags.json");

class FlagService {
  getAllFlags(style, size) {
    let filteredFlags = [...flags];

    if (style) {
      filteredFlags = filteredFlags.filter((flag) => flag.style === style);
    }

    if (size) {
      filteredFlags = filteredFlags.filter(
        (flag) => flag.size === parseInt(size)
      );
    }

    return filteredFlags;
  }

  getFlagByCountryCode(countryCode, style, size) {
    let countryFlags = flags.filter(
      (flag) => flag.countryCode.toLowerCase() === countryCode.toLowerCase()
    );

    if (style) {
      countryFlags = countryFlags.filter((flag) => flag.style === style);
    }

    if (size) {
      countryFlags = countryFlags.filter(
        (flag) => flag.size === parseInt(size)
      );
    }

    return countryFlags.length ? countryFlags : null;
  }
}

module.exports = new FlagService();
