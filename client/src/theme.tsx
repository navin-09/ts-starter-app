import { createTheme } from "@mui/material/styles";
function theme() {
  return createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#11235A",
      },
      secondary: {
        main: "#F6ECA9",
      },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });
}

export default theme;
