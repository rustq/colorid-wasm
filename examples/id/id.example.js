const colorid = require("../../lib/cjs/colorid.js");

for (let i = 0; i < 10000; i++) {
  console.log(colorid());
}
