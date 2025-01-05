import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default function CustomThemeProvider({ children }) {
  // const [defaultTheme, setDefaultTheme] = useState(
  //   window.matchMedia("(prefers-color-scheme:dark)").matches && "dark"
  // );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
