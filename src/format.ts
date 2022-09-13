export const HEX: string[] = [];

{
  for (let i = 0; i < 256; ++i) {
    HEX.push((i + 0x100).toString(16).toUpperCase().slice(1));
  }
}

function format(count: number, random: (size: number) => Uint8Array) {
  const buf = random(count * 3);
  let str = "#";
  for (let i = 0; i < count; i++) {
    str += HEX[buf[i]] + HEX[buf[i + 1]] + HEX[buf[i + 2]];
    if (i !== count - 1) {
      str += "-#";
    }
  }
  return str;
}

export default format;
