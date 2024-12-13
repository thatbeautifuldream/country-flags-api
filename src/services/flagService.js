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
    const countryData = flags.find(
      (flag) => flag.countryCode === normalizedCountryCode
    );
    const flagUrl = `https://flagcdn.com/${normalizedCountryCode.toLowerCase()}.svg`;

    return {
      countryCode: normalizedCountryCode,
      countryName: countryData ? countryData.countryName : "Unknown",
      flagUrl,
      style: "flat",
    };
  };

  getShinyFlag = async (countryCode) => {
    const normalizedCountryCode = countryCode.toUpperCase();
    const countryData = flags.find(
      (flag) => flag.countryCode === normalizedCountryCode
    );
    const flagUrl = `https://flagcdn.com/w2560/${normalizedCountryCode.toLowerCase()}.png`;

    return {
      countryCode: normalizedCountryCode,
      countryName: countryData ? countryData.countryName : "Unknown",
      flagUrl,
      style: "shiny",
    };
  };

  getAllFlatFlags = async () => {
    const uniqueFlags = flags.reduce((acc, flag) => {
      if (!acc[flag.countryCode]) {
        acc[flag.countryCode] = flag;
      }
      return acc;
    }, {});

    return Object.values(uniqueFlags).map((flag) => ({
      countryCode: flag.countryCode,
      countryName: flag.countryName,
      flagUrl: `https://flagcdn.com/${flag.countryCode.toLowerCase()}.svg`,
      style: "flat",
    }));
  };

  getAllShinyFlags = async () => {
    const uniqueFlags = flags.reduce((acc, flag) => {
      if (!acc[flag.countryCode]) {
        acc[flag.countryCode] = flag;
      }
      return acc;
    }, {});

    return Object.values(uniqueFlags).map((flag) => ({
      countryCode: flag.countryCode,
      countryName: flag.countryName,
      flagUrl: `https://flagcdn.com/w2560/${flag.countryCode.toLowerCase()}.png`,
      style: "shiny",
    }));
  };
}

module.exports = new FlagService();
