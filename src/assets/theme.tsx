import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f5f5f5', // Background - soft light gray
      light: '#ffffff', // Textboxes and cards - white
      dark: '#e0e0e0', // AppBar and elevated surfaces - slightly darker gray
      contrastText: '#444444', // Text - dark gray for good contrast
    },
    secondary: {
      main: '#FF6D03', // Accent orange
      light: '#FFB177', // Softer version for hover states
    },
    info: {
      main:"#BCBCBC"
    },
    text: {
      primary: '#333333', // Standard dark gray for text
    },
    divider: '#cccccc', // Light gray for separators
  },
  typography: {
    body1: {
      fontFamily: "Poppins, sans-serif",
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#121212', // Background - dark gray/black
      dark: '#1e1e1e', // Slightly lighter shade for app bar and elevated surfaces
      light: '#2a2a2a', // Textboxes and cards - medium gray
      contrastText: '#ffffff', // Text - white for good contrast
    },
    secondary: {
      main: '#FF6D03', // Accent orange
      light: '#FF8E42', // Softer version for hover states
    },
    info: {
      main:"#494949"
    },
    text: {
      primary: '#e0e0e0', // Standard light gray for text
    },
    divider: '#333333', // Dark gray for separators
  },
  typography: {
      body1: {
        fontFamily: "Poppins, sans-serif",
      }
  }
});
