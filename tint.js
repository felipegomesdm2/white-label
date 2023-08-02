import chroma from "chroma-js";

export const tint = (color, utility, amount) => {
  let lch;

  switch (utility) {
    case "brighten":
      lch = chroma(color).brighten(amount).lch();

      break;
    case "darken":
      lch = chroma(color).darken(amount).lch();

      break;
  }

  return `lch(${lch[0]}% ${lch[1]} ${lch[2]})`;
};
