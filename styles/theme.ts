import { theme, DefaultTheme } from "@chakra-ui/core";

// const CustomTheme: DefaultTheme = {
//   ...theme, //Estou copiando o tema padrão do chakra UI, que está dentro de theme
//     fonts: {
//     body: "Roboto, system-ui, sans-serif",
//     heading: "Roboto, system-ui, sans-serif",
//     mono: "Menlo, monospace",
//   },
//   fontWeights: {
//     ...theme.fontWeights,
//     normal: 400,
//     medium: 600,
//     bold: 700,
//   },
//   radii: {
//     ...theme.radii,
//     sm: "5px",
//     md: "8px",
//   },
//   fontSizes: {
//     ...theme.fontSizes,
//     "6xl": "54px",
//   },
//   colors: {
//     ...theme.colors
//   },

// };

const CustomTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#000",
    secondary: "#15181C",
    search: "#202327",
    white: "#D9D9D9",
    gray: "#7A7A7A",
    outline: "#2F3336",
    retweet: "#00C06B",
    like: "#E8265E",
    twitter: "#33A1F2",
    "twitter-dark-hover": "#011017",
    "twitter-light-hover": "#2C8ED6",
  },
  fontSizes: {
    ...theme.fontSizes,
    small: "14px",
    medium: "15px",
  },
};

export default CustomTheme;

// --primary: #000;
// --secondary: #15181C;
// --search: #202327;
// --white: #D9D9D9;
// --gray: #7A7A7A;
// --outline: #2F3336;
// --retweet: #00C06B;
// --like: #E8265E;
// --twitter: #33A1F2;
// --twitter-dark-hover: #011017;
// --twitter-light-hover: #2C8ED6;
