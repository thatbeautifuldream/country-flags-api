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

  getFlatFlag = async (countryCode) => {
    const normalizedCountryCode = countryCode.toUpperCase();
    const flagUrl = `https://flagcdn.com/${normalizedCountryCode.toLowerCase()}.svg`;

    return {
      countryCode: normalizedCountryCode,
      flagUrl,
      style: "flat",
    };
  };

  getShinyFlag = async (countryCode) => {
    const normalizedCountryCode = countryCode.toUpperCase();
    const flagUrl = `https://flagcdn.com/w2560/${normalizedCountryCode.toLowerCase()}.png`;

    return {
      countryCode: normalizedCountryCode,
      flagUrl,
      style: "shiny",
    };
  };

  getAllFlatFlags = async () => {
    const countryCodes = flags.map((flag) => flag.countryCode);
    const uniqueCodes = [...new Set(countryCodes)];

    return uniqueCodes.map((countryCode) => ({
      countryCode,
      flagUrl: `https://flagcdn.com/${countryCode.toLowerCase()}.svg`,
      style: "flat",
    }));
  };

  getAllShinyFlags = async () => {
    const countryCodes = flags.map((flag) => flag.countryCode);
    const uniqueCodes = [...new Set(countryCodes)];

    return uniqueCodes.map((countryCode) => ({
      countryCode,
      flagUrl: `https://flagcdn.com/w2560/${countryCode.toLowerCase()}.png`,
      style: "shiny",
    }));
  };
}

module.exports = new FlagService();
