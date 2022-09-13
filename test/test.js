const assert = require("assert");
const colorid = require("../lib/cjs/colorid");

assert.equal(colorid().length, 31);
assert.equal(colorid(4).length, 31);
assert.equal(colorid(3).length, 23);
assert.equal(colorid(5).length, 39);

console.log("√");
