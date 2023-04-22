import { fontFace } from "@vanilla-extract/css";

const aqua = fontFace({
  src: `
        local("Aqua Grotesque, Regular"),
        url("/fonts/aqua/aqua.woff2") format('woff2'),
        url("/fonts/aqua/aqua.woff") format('woff'),
        url("/fonts/aqua/aqua.ttf") format('truetype'),
    `,
  fontDisplay: "optional",
});

const quantum = fontFace({
  src: `
        local("Quantum, Regular"),
        url("/fonts/quantum/Quantumregular.woff2") format('woff2'),
        url("/fonts/quantum/Quantumregular.woff") format('woff'),
        url("/fonts/quantum/Quantumregular.ttf") format('truetype'),
    `,
  fontDisplay: "optional",
});

export const Fonts = {
  aqua,
  quantum,
};
