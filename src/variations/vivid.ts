import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark, makeMainColorsLight } from "../helper";

const vividColors: ThemeColors = {
  blue: "#28A9FF",
  green: "#42DD76",
  greenAlt: "#b7d175",
  orange: "#FF7135",
  pink: "#E66DFF",
  purple: "#A95EFF",
  red: "#D62C2C",
  salmon: "#FF478D",
  turquoize: "#14E5D4",
  yellow: "#FFB638",
};

const vividLevels: ThemeLevels = {
  danger: vividColors.red,
  info: vividColors.blue,
  success: vividColors.green,
  warning: vividColors.yellow,
};

export const vividPurple: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#171131",
    primary: "#A680FF",
  }),
};

export const vividBlack: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#141417",
    primary: "#AAAAAA",
  }),
};

// Old colors:
//  https://github.com/BeardedBear/bearded-theme/commit/e7df3f9
export const vividLight: Theme = {
  colors: {
    blue: "#0096ff", // old: "#28A9FF",
    green: "#00ca5d", // old: "#00d647",
    greenAlt: "#b7d175",
    orange: "#FF7135",
    pink: "#E66DFF",
    purple: "#A95EFF",
    red: "#D62C2C",
    salmon: "#FF478D",
    turquoize: "#00cddb", // old: "#00d6c4",
    yellow: "#ffaf00", // old: "#ffaa18",
  },
  levels: vividLevels,
  ui: makeMainColorsLight({
    base: "#f8f8f8",
    primary: "#9e9e9e",
  }),
};
