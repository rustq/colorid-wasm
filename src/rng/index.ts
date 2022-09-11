import { randomFillSync } from "crypto";
import { POOL } from "./pool";

let POOL_OFFSET = POOL.length;

function rng(size) {
  if (POOL_OFFSET > POOL.length - size) {
    randomFillSync(POOL);

    POOL_OFFSET = 0;
  }

  return POOL.slice(POOL_OFFSET, (POOL_OFFSET += size));
}

export default rng;
