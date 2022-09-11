const assert = require("assert");
const colorid = require("../lib/cjs/colorid");

assert.equal(colorid().length, 27);
assert.equal(colorid(4).length, 27);
assert.equal(colorid(3).length, 20);
assert.equal(colorid(5).length, 34);

console.log("√");
