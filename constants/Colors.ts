export const paletteegy = {
  tint: {
    light: "#2f95dc",
    dark: "#fff",
  },
  colors: {
    pastell: {
      primary: "#FF7F50",
      secondary: "#BA55D3",
    },
  },
  text: {
    pastell: {
      primary: "#E6E6FA",
      secondary: "#FFDEAD",
    },
    light: "#000",
    dark: "#fff",
  },
  theme: {
    background: {
      light: "#fff",
      dark: "#222",
    },
    icons: {
      tabIcons: {
        light: "#ccc",
        dark: "#aaabbb",
      },
    },
  },
};

export default {
  light: {
    text: paletteegy.text.light,
    background: paletteegy.theme.background.light,
    tint: paletteegy.tint.light,
    tabIconDefault: paletteegy.theme.icons.tabIcons.light,
    tabIconSelected: paletteegy.tint.dark,
  },
  dark: {
    text: paletteegy.text.dark,
    background: paletteegy.theme.background.dark,
    tint: paletteegy.tint.light,
    tabIconDefault: paletteegy.theme.icons.tabIcons.dark,
    tabIconSelected: paletteegy.tint.dark,
  },
};
