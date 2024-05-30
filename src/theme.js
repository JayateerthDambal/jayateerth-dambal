import { createTheme } from "@mui/material/styles";

const commonStyles = {
    secondary: {
        main: "#5c5b5b",
    },
};

const darkPalette = {
    mode: 'dark',
    background: {
        default: "#191919",
    },
    primary: {
        main: "#5BBCFF",
    },
    text: {
        primary: "#F2F3F4",
        secondary: "#b1b2b3",
        span: "#5BBCFF"
    },
    ...commonStyles,
};

const lightPalette = {
    mode: 'light',
    background: {
        default: "#FFFFFF",
        paper: "#f0f0f0",
    },
    primary: {
        main: "#5BBCFF",
    },
    text: {
        primary: "#111111",
        secondary: "#48494a",
        span: "#5BBCFF"
    },
    ...commonStyles,
};

const createModeTheme = (mode) => createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
});

export default createModeTheme;
