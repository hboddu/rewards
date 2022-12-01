import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import Header from './components/header/Header';
import RewardsTableContainer from './components/rewardsTable/RewardsTableContainer';
import './App.css';

function App() {


  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <RewardsTableContainer />
    </ThemeProvider>
  );
}

export default App;
