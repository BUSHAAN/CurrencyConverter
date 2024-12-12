import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { darkTheme, lightTheme } from "./assets/theme";
import Home from "./pages/Home";
import themeStore from "./services/themeStore";

function App() {
  const { isDarkMode } = themeStore();
  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
