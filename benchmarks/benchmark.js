const benchmark = require("benchmark");
const crypto = require("crypto");

const { v4 } = require("uuid");
const { nanoid } = require("nanoid");
const colorid = require("../lib/cjs/colorid");

let suite = new benchmark.Suite();

function formatNumber(number) {
  return String(number)
    .replace(/\d{3}$/, ",$&")
    .replace(/^(\d|\d\d)(\d{3},)/, "$1,$2");
}

suite
  .add("crypto.randomUUID", () => {
    crypto.randomUUID();
  })
  .add("colorid", () => {
    colorid();
  })
  .add("nanoid", () => {
    nanoid();
  })
  .add("uuid v4", () => {
    v4();
  })
  .on("cycle", (event) => {
    let name = event.target.name.padEnd(20);
    let hz = formatNumber(event.target.hz.toFixed(0)).padStart(10);
    process.stdout.write(`${name}${hz} ops/sec\n`);
  })
  .run();
