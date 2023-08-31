import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const defaultTheme = createTheme({
    palette: {
        primary: {
          main: "#85d0bc"
        },
        secondary: {
            main: grey[200]
        },
        warning: {
            main: "#f9cb99",
        },
        success: {
            main: "#89dcfb"
        },
        error: {
            main: "#ffa99f"
        },
        info: {
            main: "#f0efda"
        }
      },
});

export default defaultTheme;