import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/images/Logo.png";
import themeStore from "../services/themeStore";

export default function ButtonAppBar() {
  const { isDarkMode, setIsDarkMode } = themeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (

      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.dark !important", height: "70px" }}
      >
        <Toolbar sx={{mx:"8vw"}}>
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "0.8vw",
              height: "80px",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            {!isDarkMode ? (
              <DarkModeOutlinedIcon fontSize="inherit" color="secondary" />
            ) : (
              <Box sx={{ width: "25px" }} />
            )}
            <Switch
              sx={{
                "& .MuiSwitch-switchBase": {
                  // Thumb (circle) when checked or unchecked
                  color: "primary.main",
                  "&.Mui-checked": {
                    color: "secondary.main",
                  },
                  "&.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "secondary.main",
                  },
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "primary.light",
                  opacity: 1,
                },
                "& .MuiSwitch-thumb": {
                  backgroundColor: "primary.main",
                },
              }}
              checked={isDarkMode}
              onChange={handleChange}
            ></Switch>
            {isDarkMode ? (
              <LightModeOutlinedIcon fontSize="inherit" color="secondary" />
            ) : (
              <Box sx={{ width: "25px" }} />
            )}
          </Box>
        </Toolbar>
      </AppBar>
  );
}
