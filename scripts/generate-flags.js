const fs = require("fs");

const countryData = [
  { countryName: "Andorra", countryCode: "AD" },
  { countryName: "United Arab Emirates", countryCode: "AE" },
  { countryName: "Afghanistan", countryCode: "AF" },
  { countryName: "Antigua and Barbuda", countryCode: "AG" },
  { countryName: "Anguilla", countryCode: "AI" },
  { countryName: "Artsakh / Highland Karabakh", countryCode: "AH" },
  { countryName: "Abkhazia", countryCode: "AK" },
  { countryName: "Albania", countryCode: "AL" },
  { countryName: "Armenia", countryCode: "AM" },
  { countryName: "Netherlands Antilles", countryCode: "AN" },
  { countryName: "Angola", countryCode: "AO" },
  { countryName: "Antarctica", countryCode: "AQ" },
  { countryName: "Argentina", countryCode: "AR" },
  { countryName: "American Samoa", countryCode: "AS" },
  { countryName: "Austria", countryCode: "AT" },
  { countryName: "Australia", countryCode: "AU" },
  { countryName: "Aruba", countryCode: "AW" },
  { countryName: "Åland Islands", countryCode: "AX" },
  { countryName: "Azerbaijan", countryCode: "AZ" },
  { countryName: "Bosnia and Herzegovina", countryCode: "BA" },
  { countryName: "Barbados", countryCode: "BB" },
  { countryName: "Bangladesh", countryCode: "BD" },
  { countryName: "Belgium", countryCode: "BE" },
  { countryName: "Burkina Faso", countryCode: "BF" },
  { countryName: "Bulgaria", countryCode: "BG" },
  { countryName: "Bahrain", countryCode: "BH" },
  { countryName: "Burundi", countryCode: "BI" },
  { countryName: "Benin", countryCode: "BJ" },
  { countryName: "Saint Barthélemy", countryCode: "BL" },
  { countryName: "Bermuda", countryCode: "BM" },
  { countryName: "Brunei Darussalam", countryCode: "BN" },
  { countryName: "Bolivia", countryCode: "BO" },
  { countryName: "Bonaire, Sint Eustatius and Saba", countryCode: "BQ" },
  { countryName: "Brazil", countryCode: "BR" },
  { countryName: "Bahamas", countryCode: "BS" },
  { countryName: "Bhutan", countryCode: "BT" },
  { countryName: "Bouvet Island", countryCode: "BV" },
  { countryName: "Botswana", countryCode: "BW" },
  { countryName: "Belarus", countryCode: "BY" },
  { countryName: "Belize", countryCode: "BZ" },
  { countryName: "Canada", countryCode: "CA" },
  { countryName: "Cocos (Keeling) Islands", countryCode: "CC" },
  { countryName: "Congo, The Democratic Republic Of The", countryCode: "CD" },
  { countryName: "Central African Republic", countryCode: "CF" },
  { countryName: "Congo", countryCode: "CG" },
  { countryName: "Switzerland", countryCode: "CH" },
  { countryName: "Côte D'Ivoire", countryCode: "CI" },
  { countryName: "Cook Islands", countryCode: "CK" },
  { countryName: "Chile", countryCode: "CL" },
  { countryName: "Cameroon", countryCode: "CM" },
  { countryName: "China", countryCode: "CN" },
  { countryName: "Colombia", countryCode: "CO" },
  { countryName: "Costa Rica", countryCode: "CR" },
  { countryName: "Cuba", countryCode: "CU" },
  { countryName: "Cape Verde", countryCode: "CV" },
  { countryName: "Curaçao", countryCode: "CW" },
  { countryName: "Christmas Island", countryCode: "CX" },
  { countryName: "Cyprus", countryCode: "CY" },
  { countryName: "Czech Republic", countryCode: "CZ" },
  { countryName: "Germany", countryCode: "DE" },
  { countryName: "Djibouti", countryCode: "DJ" },
  { countryName: "Denmark", countryCode: "DK" },
  { countryName: "Dominica", countryCode: "DM" },
  { countryName: "Dominican Republic", countryCode: "DO" },
  { countryName: "Algeria", countryCode: "DZ" },
  { countryName: "Ecuador", countryCode: "EC" },
  { countryName: "Estonia", countryCode: "EE" },
  { countryName: "Egypt", countryCode: "EG" },
  { countryName: "Western Sahara", countryCode: "EH" },
  { countryName: "Eritrea", countryCode: "ER" },
  { countryName: "Spain", countryCode: "ES" },
  { countryName: "Ethiopia", countryCode: "ET" },
  { countryName: "European Union", countryCode: "EU" },
  { countryName: "Finland", countryCode: "FI" },
  { countryName: "Fiji", countryCode: "FJ" },
  { countryName: "Falkland Islands (Malvinas)", countryCode: "FK" },
  { countryName: "Micronesia, Federated States Of", countryCode: "FM" },
  { countryName: "Faroe Islands", countryCode: "FO" },
  { countryName: "France", countryCode: "FR" },
  { countryName: "Gabon", countryCode: "GA" },
  { countryName: "United Kingdom", countryCode: "GB" },
  { countryName: "Grenada", countryCode: "GD" },
  { countryName: "Georgia", countryCode: "GE" },
  { countryName: "French Guiana", countryCode: "GF" },
  { countryName: "Guernsey", countryCode: "GG" },
  { countryName: "Ghana", countryCode: "GH" },
  { countryName: "Gibraltar", countryCode: "GI" },
  { countryName: "Greenland", countryCode: "GL" },
  { countryName: "Gambia", countryCode: "GM" },
  { countryName: "Guinea", countryCode: "GN" },
  { countryName: "Guadeloupe", countryCode: "GP" },
  { countryName: "Equatorial Guinea", countryCode: "GQ" },
  { countryName: "Greece", countryCode: "GR" },
  {
    countryName: "South Georgia and the South Sandwich Islands",
    countryCode: "GS",
  },
  { countryName: "Guatemala", countryCode: "GT" },
  { countryName: "Guam", countryCode: "GU" },
  { countryName: "Guinea-Bissau", countryCode: "GW" },
  { countryName: "Guyana", countryCode: "GY" },
  { countryName: "Hong Kong", countryCode: "HK" },
  { countryName: "Heard and McDonald Islands", countryCode: "HM" },
  { countryName: "Honduras", countryCode: "HN" },
  { countryName: "Croatia", countryCode: "HR" },
  { countryName: "Haiti", countryCode: "HT" },
  { countryName: "Hungary", countryCode: "HU" },
  { countryName: "Indonesia", countryCode: "ID" },
  { countryName: "Ireland", countryCode: "IE" },
  { countryName: "Israel", countryCode: "IL" },
  { countryName: "Isle of Man", countryCode: "IM" },
  { countryName: "India", countryCode: "IN" },
  { countryName: "British Indian Ocean Territory", countryCode: "IO" },
  { countryName: "Iraq", countryCode: "IQ" },
  { countryName: "Iran, Islamic Republic Of", countryCode: "IR" },
  { countryName: "Iceland", countryCode: "IS" },
  { countryName: "Italy", countryCode: "IT" },
  { countryName: "Jersey", countryCode: "JE" },
  { countryName: "Jamaica", countryCode: "JM" },
  { countryName: "Jordan", countryCode: "JO" },
  { countryName: "Japan", countryCode: "JP" },
  { countryName: "Kenya", countryCode: "KE" },
  { countryName: "Kyrgyzstan", countryCode: "KG" },
  { countryName: "Cambodia", countryCode: "KH" },
  { countryName: "Kiribati", countryCode: "KI" },
  { countryName: "Comoros", countryCode: "KM" },
  { countryName: "Saint Kitts And Nevis", countryCode: "KN" },
  { countryName: "Korea, Democratic People's Republic Of", countryCode: "KP" },
  { countryName: "Korea, Republic of", countryCode: "KR" },
  { countryName: "Kuwait", countryCode: "KW" },
  { countryName: "Cayman Islands", countryCode: "KY" },
  { countryName: "Kazakhstan", countryCode: "KZ" },
  { countryName: "Lao People's Democratic Republic", countryCode: "LA" },
  { countryName: "Lebanon", countryCode: "LB" },
  { countryName: "Saint Lucia", countryCode: "LC" },
  { countryName: "Liechtenstein", countryCode: "LI" },
  { countryName: "Sri Lanka", countryCode: "LK" },
  { countryName: "Liberia", countryCode: "LR" },
  { countryName: "Lesotho", countryCode: "LS" },
  { countryName: "Lithuania", countryCode: "LT" },
  { countryName: "Luxembourg", countryCode: "LU" },
  { countryName: "Latvia", countryCode: "LV" },
  { countryName: "Libya", countryCode: "LY" },
  { countryName: "Morocco", countryCode: "MA" },
  { countryName: "Monaco", countryCode: "MC" },
  { countryName: "Moldova, Republic of", countryCode: "MD" },
  { countryName: "Montenegro", countryCode: "ME" },
  { countryName: "Saint Martin", countryCode: "MF" },
  { countryName: "Madagascar", countryCode: "MG" },
  { countryName: "Marshall Islands", countryCode: "MH" },
  {
    countryName: "Macedonia, the Former Yugoslav Republic Of",
    countryCode: "MK",
  },
  { countryName: "Mali", countryCode: "ML" },
  { countryName: "Myanmar", countryCode: "MM" },
  { countryName: "Mongolia", countryCode: "MN" },
  { countryName: "Macao", countryCode: "MO" },
  { countryName: "Northern Mariana Islands", countryCode: "MP" },
  { countryName: "Martinique", countryCode: "MQ" },
  { countryName: "Mauritania", countryCode: "MR" },
  { countryName: "Montserrat", countryCode: "MS" },
  { countryName: "Malta", countryCode: "MT" },
  { countryName: "Mauritius", countryCode: "MU" },
  { countryName: "Maldives", countryCode: "MV" },
  { countryName: "Malawi", countryCode: "MW" },
  { countryName: "Mexico", countryCode: "MX" },
  { countryName: "Malaysia", countryCode: "MY" },
  { countryName: "Mozambique", countryCode: "MZ" },
  { countryName: "Namibia", countryCode: "NA" },
  { countryName: "New Caledonia", countryCode: "NC" },
  { countryName: "Niger", countryCode: "NE" },
  { countryName: "Norfolk Island", countryCode: "NF" },
  { countryName: "Nigeria", countryCode: "NG" },
  { countryName: "Nicaragua", countryCode: "NI" },
  { countryName: "Netherlands", countryCode: "NL" },
  { countryName: "Norway", countryCode: "NO" },
  { countryName: "Nepal", countryCode: "NP" },
  { countryName: "Nauru", countryCode: "NR" },
  { countryName: "Niue", countryCode: "NU" },
  { countryName: "Northern Cyprus", countryCode: "NY" },
  { countryName: "New Zealand", countryCode: "NZ" },
  { countryName: "Oman", countryCode: "OM" },
  { countryName: "Panama", countryCode: "PA" },
  { countryName: "Peru", countryCode: "PE" },
  { countryName: "French Polynesia", countryCode: "PF" },
  { countryName: "Papua New Guinea", countryCode: "PG" },
  { countryName: "Philippines", countryCode: "PH" },
  { countryName: "Pakistan", countryCode: "PK" },
  { countryName: "Poland", countryCode: "PL" },
  { countryName: "Saint Pierre And Miquelon", countryCode: "PM" },
  { countryName: "Pitcairn", countryCode: "PN" },
  { countryName: "Puerto Rico", countryCode: "PR" },
  { countryName: "Palestine, State of", countryCode: "PS" },
  { countryName: "Portugal", countryCode: "PT" },
  { countryName: "Palau", countryCode: "PW" },
  { countryName: "Paraguay", countryCode: "PY" },
  { countryName: "Qatar", countryCode: "QA" },
  { countryName: "Réunion", countryCode: "RE" },
  { countryName: "Romania", countryCode: "RO" },
  { countryName: "Serbia", countryCode: "RS" },
  { countryName: "Russian Federation", countryCode: "RU" },
  { countryName: "Rwanda", countryCode: "RW" },
  { countryName: "Saudi Arabia", countryCode: "SA" },
  { countryName: "Solomon Islands", countryCode: "SB" },
  { countryName: "Seychelles", countryCode: "SC" },
  { countryName: "Sudan", countryCode: "SD" },
  { countryName: "Sweden", countryCode: "SE" },
  { countryName: "Singapore", countryCode: "SG" },
  { countryName: "Saint Helena", countryCode: "SH" },
  { countryName: "Slovenia", countryCode: "SI" },
  { countryName: "Svalbard And Jan Mayen", countryCode: "SJ" },
  { countryName: "Slovakia", countryCode: "SK" },
  { countryName: "Sierra Leone", countryCode: "SL" },
  { countryName: "San Marino", countryCode: "SM" },
  { countryName: "Senegal", countryCode: "SN" },
  { countryName: "Somalia", countryCode: "SO" },
  { countryName: "Suriname", countryCode: "SR" },
  { countryName: "South Sudan", countryCode: "SS" },
  { countryName: "Sao Tome and Principe", countryCode: "ST" },
  { countryName: "El Salvador", countryCode: "SV" },
  { countryName: "Sint Maarten", countryCode: "SX" },
  { countryName: "Syrian Arab Republic", countryCode: "SY" },
  { countryName: "Swaziland", countryCode: "SZ" },
  { countryName: "Turks and Caicos Islands", countryCode: "TC" },
  { countryName: "Chad", countryCode: "TD" },
  { countryName: "French Southern Territories", countryCode: "TF" },
  { countryName: "Togo", countryCode: "TG" },
  { countryName: "Thailand", countryCode: "TH" },
  { countryName: "Tajikistan", countryCode: "TJ" },
  { countryName: "Tokelau", countryCode: "TK" },
  { countryName: "Timor-Leste", countryCode: "TL" },
  { countryName: "Turkmenistan", countryCode: "TM" },
  { countryName: "Tunisia", countryCode: "TN" },
  { countryName: "Tonga", countryCode: "TO" },
  { countryName: "Turkey", countryCode: "TR" },
  { countryName: "Trinidad and Tobago", countryCode: "TT" },
  { countryName: "Tuvalu", countryCode: "TV" },
  { countryName: "Taiwan, Republic Of China", countryCode: "TW" },
  { countryName: "Tanzania, United Republic of", countryCode: "TZ" },
  { countryName: "Ukraine", countryCode: "UA" },
  { countryName: "Uganda", countryCode: "UG" },
  { countryName: "United States Minor Outlying Islands", countryCode: "UM" },
  { countryName: "United States", countryCode: "US" },
  { countryName: "Uruguay", countryCode: "UY" },
  { countryName: "Uzbekistan", countryCode: "UZ" },
  { countryName: "Holy See (Vatican City State)", countryCode: "VA" },
  { countryName: "Saint Vincent And The Grenadines", countryCode: "VC" },
  { countryName: "Venezuela, Bolivarian Republic of", countryCode: "VE" },
  { countryName: "Virgin Islands, British", countryCode: "VG" },
  { countryName: "Virgin Islands, U.S.", countryCode: "VI" },
  { countryName: "Vietnam", countryCode: "VN" },
  { countryName: "Vanuatu", countryCode: "VU" },
  { countryName: "Wallis and Futuna", countryCode: "WF" },
  { countryName: "Samoa", countryCode: "WS" },
  { countryName: "Kosovo", countryCode: "XK" },
  { countryName: "Yemen", countryCode: "YE" },
  { countryName: "Mayotte", countryCode: "YT" },
  { countryName: "South Africa", countryCode: "ZA" },
  { countryName: "Zambia", countryCode: "ZM" },
  { countryName: "Zimbabwe", countryCode: "ZW" },
];

const styles = ["flat", "shiny"];
const sizes = [16, 24, 32, 48, 64];

const flagUrls = [];

// Generate URLs for all sizes
countryData.forEach(({ countryName, countryCode }) => {
  styles.forEach((style) => {
    sizes.forEach((size) => {
      flagUrls.push({
        countryName,
        countryCode,
        style,
        size,
        url: `https://flagsapi.com/${countryCode}/${style}/${size}.png`,
      });
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
