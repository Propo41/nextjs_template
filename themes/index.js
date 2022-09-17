import { createTheme } from "@mui/material/styles";

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (max-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const SCALE_SIZE = 0.85;
const FONT_PRIMARY = "Josefin Sans, sans-serif";
const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#131313",
      black: "#000000",
      orange: "#ED785E",
      white: "#ffffff",
      ash: "#EEEEEE",
      purple: "#733CB9",
      cuteBlue: "#68C9FF",
    },
  },
  typography: {
    fontFamily: FONT_PRIMARY,
    fontWeightLight: FONT_WEIGHTS.light,
    fontWeightRegular: FONT_WEIGHTS.regular,
    fontWeightSemiBold: FONT_WEIGHTS.semiBold,
    fontWeightBold: FONT_WEIGHTS.bold,
    h1: {
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: pxToRem(35 * SCALE_SIZE),
      fontSize: 20,
      ...responsiveFontSizes({
        sm: 25,
        md: 30 * SCALE_SIZE,
        lg: 35 * SCALE_SIZE,
      }),
    },
    h2: {
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: pxToRem(35 * SCALE_SIZE),
      fontSize: 20,
      ...responsiveFontSizes({
        sm: 25,
        md: 30 * SCALE_SIZE,
        lg: 35 * SCALE_SIZE,
      }),
    },
    h3: {
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: pxToRem(35 * SCALE_SIZE),
      fontSize: 20,
      ...responsiveFontSizes({
        sm: 25,
        md: 30 * SCALE_SIZE,
        lg: 35 * SCALE_SIZE,
      }),
    },
    h4: {
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: pxToRem(35 * SCALE_SIZE),
      fontSize: 20,
      ...responsiveFontSizes({
        sm: 25,
        md: 30 * SCALE_SIZE,
        lg: 35 * SCALE_SIZE,
      }),
    },
  },
});
