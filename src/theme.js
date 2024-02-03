import { createTheme } from "@mui/material/styles";

const darkPalette = {
    mode: 'dark',
    background: {
        default: "#191919",
        // paper: "#2D4356",
    },
    primary: {
        main: "#E95793",
    },
    text: {
        primary: "#F2F3F4",
        secondary: "#b1b2b3",
    },
};

const lightPalette = {
    mode: 'light',
    background: {
        default: "#FFFFFF",
        paper: "#f0f0f0",
    },
    primary: {
        main: "#E95793",
    },
    text: {
        primary: "#111111",
        secondary: "#48494a",
    },
};

const createModeTheme = (mode) => createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
});

export default createModeTheme;
