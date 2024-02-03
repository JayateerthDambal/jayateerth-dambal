import './App.css';
// import styled from "styled-components";
import createModeTheme from "./theme";
import { ColorModeProvider, useColorMode } from './contexts/ColorModeContext';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import Router from './routes';

function AppContent() {
  const { mode } = useColorMode();
  const theme = createModeTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

function App() {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
}

export default App;
