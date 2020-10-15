import logo from "src/assets/mortarboard.svg";

export const colors = {
  greyLight: "grey",
  dark: "black",
  light: "white",
  primary: "navy",
  error: "red",
} as const;

export const spacing = {
  small: "1rem",
  medium: "1.5rem",
  large: "3rem",
} as const;

export const font = {
  small: "13px",
  medium: "18px",
  large: "48px",
  bold: 700,
} as const;

export const breakpoints = {
  mobile: "500px",
  desktop: "768px",
};

export const theme = {
  colors,
  spacing,
  font,
  breakpoints,
  borderRadius: "5px",
  shadow: "0px 4px 5px -1px rgba(0,0,0,0.75)",
  logoSrc: logo,
} as const;

export type Theme = typeof theme;
