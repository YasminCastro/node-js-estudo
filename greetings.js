const getFlagValue = require("./flags");

console.log(`oi ${getFlagValue("--name")}. ${getFlagValue("--greeting")}`);

//node greetings.js --name "Yas Castro" --greeting "tudo bem?"
