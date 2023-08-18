import React from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { colormodeContext, tokens } from "../../theme";
import { useProSidebar } from "react-pro-sidebar";
import MyProSidebar from "./sidebar/MyProSidebar1";
function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, toggleSidebar, broken, rtl, collapsed } =
    useProSidebar();
  const { showmd, setshowmd, colorMode } = useContext(colormodeContext);
  const screen = useMediaQuery("(max-width:768px)");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      // backgroundColor={colors.primary[500]}
      backgroundColor={
        theme.palette.mode === "dark" ? colors.primary[500] : "#fcfcfc"
      }
      p={2}
      className={` widthtopbar ${
        screen
          ? " "
          : rtl
          ? collapsed
            ? "widthtopbarrtlcollapsed"
            : "widthtopbarrtl"
          : "widthtopbar"
      }`}
      sx={{
        zIndex: "200000",
        position: "fixed",
        height: "11vh",
        top: 0,

        // width: rtl
        //   ? collapsed
        //     ? "calc(100% - 80px) !important"
        //     : "calc(100% - 250px) !important"
        //   : "fill-available",
      }}
    >
      <Box display="flex">
        {screen && showmd && !rtl && (
          <IconButton
            sx={{ margin: "0px 6px 0px 2px" }}
            onClick={() => {
              //   console.log("SDD");
              setshowmd((pre) => {
                if (showmd === true) {
                  return false;
                }
                return true;
              });
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={
            theme.palette.mode === "dark"
              ? colors.primary[400]
              : colors.primary[400]
          }
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.togglecolormode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        {screen && showmd && rtl && (
          <IconButton
            sx={{ margin: "0px 6px 0px 2px" }}
            onClick={() => {
              setshowmd((pre) => {
                if (showmd === true) {
                  return false;
                }
                return true;
              });
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default Topbar;
