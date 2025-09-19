import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/images/Logo.png";
import themeStore from "../services/themeStore";


export default function ButtonAppBar() {
  const { isDarkMode, setIsDarkMode } = themeStore();

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.dark !important", height: "70px" }}
    >
      <Toolbar sx={{ mx: "8vw" }}>
        <Box sx={{ flexGrow: 1 }}>
          <img src={Logo}></img>
        </Box>
        <IconButton
          onClick={handleChange}
          sx={{
            display: "flex",
            gap: "0.8vw",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          {!isDarkMode ? (
            <DarkModeOutlinedIcon fontSize="inherit" color="secondary" />
          ) : (
            <LightModeOutlinedIcon fontSize="inherit" color="secondary" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
