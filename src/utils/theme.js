import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(231, 203, 68, 1)",
      main: "rgba(201, 172, 24, 1)",
      dark: "rgba(175, 149, 8, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(67, 214, 138, 1)",
      main: "rgba(39, 172, 103, 1)",
      dark: "rgba(15, 134, 73, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;
