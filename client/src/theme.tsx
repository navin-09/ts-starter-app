import { createTheme } from "@mui/material/styles";
function theme() {
  return createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4F6F52",
      },
      secondary: {
        main: "#86A789",
      },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });
}

export default theme;
