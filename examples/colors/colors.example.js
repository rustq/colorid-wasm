const colorid = require("../../lib/cjs/colorid");
const fs = require("fs");

const svg = fs.readFileSync("./4color-theorem.svg", "utf8");

function generate() {
  const id = colorid();
  const colors = id.split("-");

  const origins = ["#f0e442", "#d55e00", "#009e73", "#0072b2"];

  let result = svg;
  for (let i = 0; i < origins.length; i++) {
    const origin = origins[i];
    const target = colors[i];
    result = result.replaceAll(origin, target);
  }

  fs.writeFileSync("./images/" + id + ".svg", result);
  console.log("√", id);
}

for (let i = 0; i < 10; i++) {
  generate();
}
