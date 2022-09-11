import format from "./format";
import rng from "./rng";

function colorid(count: number = 4) {
  return format(count, rng);
}

export default colorid;
