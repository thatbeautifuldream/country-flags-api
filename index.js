const fs = require("fs");

const countryData = [
  { countryName: "Andorra", countryCode: "AD" },
  { countryName: "United Arab Emirates", countryCode: "AE" },
  { countryName: "Afghanistan", countryCode: "AF" },
  { countryName: "Antigua and Barbuda", countryCode: "AG" },
  { countryName: "Albania", countryCode: "AL" },
  { countryName: "Armenia", countryCode: "AM" },
  { countryName: "Angola", countryCode: "AO" },
  { countryName: "Argentina", countryCode: "AR" },
  { countryName: "Austria", countryCode: "AT" },
  { countryName: "Australia", countryCode: "AU" },
  { countryName: "Azerbaijan", countryCode: "AZ" },
  { countryName: "Bosnia and Herzegovina", countryCode: "BA" },
  { countryName: "Belgium", countryCode: "BE" },
  { countryName: "Bulgaria", countryCode: "BG" },
  { countryName: "Bahrain", countryCode: "BH" },
  { countryName: "Brazil", countryCode: "BR" },
  { countryName: "Canada", countryCode: "CA" },
  { countryName: "Switzerland", countryCode: "CH" },
  { countryName: "China", countryCode: "CN" },
  { countryName: "Germany", countryCode: "DE" },
  { countryName: "Denmark", countryCode: "DK" },
  { countryName: "Egypt", countryCode: "EG" },
  { countryName: "Spain", countryCode: "ES" },
  { countryName: "Finland", countryCode: "FI" },
  { countryName: "France", countryCode: "FR" },
  { countryName: "United Kingdom", countryCode: "GB" },
  { countryName: "Greece", countryCode: "GR" },
  { countryName: "Hong Kong", countryCode: "HK" },
  { countryName: "Indonesia", countryCode: "ID" },
  { countryName: "Ireland", countryCode: "IE" },
  { countryName: "Israel", countryCode: "IL" },
  { countryName: "India", countryCode: "IN" },
  { countryName: "Italy", countryCode: "IT" },
  { countryName: "Japan", countryCode: "JP" },
  { countryName: "South Korea", countryCode: "KR" },
  { countryName: "Mexico", countryCode: "MX" },
  { countryName: "Malaysia", countryCode: "MY" },
  { countryName: "Netherlands", countryCode: "NL" },
  { countryName: "Norway", countryCode: "NO" },
  { countryName: "New Zealand", countryCode: "NZ" },
  { countryName: "Philippines", countryCode: "PH" },
  { countryName: "Pakistan", countryCode: "PK" },
  { countryName: "Poland", countryCode: "PL" },
  { countryName: "Russian Federation", countryCode: "RU" },
  { countryName: "Saudi Arabia", countryCode: "SA" },
  { countryName: "Sweden", countryCode: "SE" },
  { countryName: "Singapore", countryCode: "SG" },
  { countryName: "Thailand", countryCode: "TH" },
  { countryName: "Turkey", countryCode: "TR" },
  { countryName: "United States", countryCode: "US" },
  { countryName: "Vietnam", countryCode: "VN" },
];

const styles = ["flat", "shiny"];
const size = 64;

const flagUrls = [];

// Generate URLs for size 64 only
countryData.forEach(({ countryName, countryCode }) => {
  styles.forEach((style) => {
    flagUrls.push({
      countryName,
      countryCode,
      style,
      size,
      url: `https://flagsapi.com/${countryCode}/${style}/${size}.png`,
    });
  });
});

// Delete existing flags.json if it exists
if (fs.existsSync("flags.json")) {
  fs.unlinkSync("flags.json");
  console.log("Existing flags.json deleted");
}

// Create new flags.json file
fs.writeFileSync("flags.json", JSON.stringify(flagUrls, null, 2), "utf8");

console.log(`Generated ${flagUrls.length} flag URLs and saved to flags.json`);
