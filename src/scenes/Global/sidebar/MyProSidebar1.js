import React from "react";
import { useState } from "react";
import { Menu, Sidebar, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./sidebarContext";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../../theme";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
const Item = ({ title, to, icon, selected, setSelected, locate }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const loc = useLocation().pathname.slice(1);
  // console.log(locate === "");
  return (
    <MenuItem
      active={locate === loc}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
const MyProSidebar1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarsrc, setSidebarsrc } =
    useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed } = useProSidebar();
  const screen = useMediaQuery("(max-width:768px)");
  return (
    <Box
      // className={!screen ? "" : showmd ? "md-show" : "xxxx"}
      className={!screen ? "" : "md-show"}
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        zIndex: "100000000000",
      }}
    >
      <Box
        className={`widthcollapsefalse ${collapsed ? "widthcollapsetrue" : ""}`}
        sx={{
          // zIndex: `${showmd ? 1000000000 : ""}`,
          backgroundColor: colors.primary[400],
          // backgroundImage: `${
          //   sidebarsrc ? "url(../../assets/sidebarimg.jpg)" : ""
          // }`,
          // opacity: `${theme.palette.mode === "dark" ? "" : "0.8"}`,
          // position: "sticky",
          top: 0,
          position: "fixed",

          zIndex: "10000000",
          ".ps-sidebar-root": {
            border: "none !important",
          },
          ".ps-menu-icon": {
            // backgroundColor: "yellow !important",
            backgroundColor: "transparent !important",
          },
          // ".ps-menu-button": {
          //   backgroundColor: "green !important",
          // },
          " .ps-menuitem-root": {
            // padding: "5px 35px 5px 20px !important",
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button": {
            // anchor===button
            // color: "black !important",
            // backgroundColor: "pink !important",
            // border: "10px solid blue",
            color: "inherit !important",
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button:hover": {
            color: `${colors.blueAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button.ps-active": {
            color: `${colors.greenAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
        }}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                className="menuitemcustom"
                display="flex"
                justifyContent="space-between"
                alignItems="center"

                // ml="15px"
              >
                <IconButton
                  className="ps-menu-icon css-wx7wi4 insert"
                  sx={{
                    color: colors.grey[100],
                    marginRight: "0px !important",
                  }}
                  onClick={() => {
                    setSidebarsrc((pre) => !pre);
                  }}
                  // sx={{ marginLeft: "-10px" }}
                >
                  <InsertPhotoIcon />
                </IconButton>
                <Typography variant="h3" color={colors.grey[100]}>
                  ❣️🍒❣️
                </Typography>
                {/* <Box>
                  <img
                    src="../../assets/download.png"
                    alt=""
                    style={{
                      zIndex: "1000000",
                      height: "25px",
                      width: "25px",
                      backgroundColor: "darkred !important",
                      borderRadius: "50%",
                    }}
                  />
                </Box> */}

                <IconButton
                  className="ps-menu-icon  css-wx7wi4 close"
                  sx={{
                    marginRight: "0px !important",
                    color: colors.grey[100],
                  }}
                  onClick={() => collapseSidebar()}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </Box>

      <Box
        sx={{
          position: "sticky",
          top: "4.98rem",
          display: "flex",
          height: "calc(100vh - 80px)",
          bottom: 0,
          zIndex: 1000000,
          ".ps-sidebar-root": {
            border: "none !important",
          },
          ".ps-menu-icon": {
            // backgroundColor: "yellow !important",
            backgroundColor: "transparent !important",
          },
          // ".ps-menu-button": {
          //   backgroundColor: "green !important",
          // },
          " .ps-menuitem-root": {
            // padding: "5px 35px 5px 20px !important",
            // backgroundColor: "red !important",
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button": {
            // anchor===button
            // color: "black !important",
            // backgroundColor: "pink !important",
            // border: "10px solid blue",
            color: "inherit !important",
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button:hover": {
            // color: `${colors.blueAccent[500]} !important`,
            color:
              `${theme.palette.mode}` === "dark"
                ? `${sidebarsrc}` === "true"
                  ? "darkblue !important"
                  : `${colors.blueAccent[500]} !important`
                : `${sidebarsrc}` === "true"
                ? "darkblue !important"
                : `${colors.blueAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button.ps-active": {
            // color: `${colors.greenAccent[500]} !important`,
            color:
              `${theme.palette.mode}` === "dark"
                ? `${colors.greenAccent[500]} !important`
                : `${sidebarsrc}` === "true"
                ? "#056148 !important"
                : `${colors.greenAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
        }}
      >
        <Sidebar
          // breakPoint="md"
          rtl={sidebarRTL}
          backgroundColor={colors.primary[400]}
          // image={sidebarImage}
          style={{ flex: 1, position: "relative", overflow: "auto" }}
        >
          {sidebarsrc && (
            <div
              className="imgside"
              style={{
                height: `${collapsed ? "680px" : "853px"}`,
                backgroundColor: `${
                  theme.palette.mode === "dark"
                    ? "rgba(0, 0, 0, 0.26)"
                    : "rgba(230, 224, 224, 0.753)"
                }`,
              }}
            ></div>
          )}
          <img
            src="../../assets/sidebarimg.jpg"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
              width: "100%",
              opacity: `${theme.palette.mode === "dark" ? "" : ""}`,
              height: `${collapsed ? "680px" : "853px"}`,
              display: `${sidebarsrc ? "" : "none"}`,
            }}
          />
          <Menu iconshape="square">
            {/* <MenuItem
              icon={
                collapsed ? (
                  <MenuOutlinedIcon onClick={() => collapseSidebar()} />
                ) : sidebarRTL ? (
                  <SwitchLeftOutlinedIcon
                    onClick={() => setSidebarRTL(!sidebarRTL)}
                  />
                ) : (
                  <SwitchRightOutlinedIcon
                    onClick={() => setSidebarRTL(!sidebarRTL)}
                  />
                )
              }
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!collapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton
                    onClick={
                      broken ? () => toggleSidebar() : () => collapseSidebar()
                    }
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem> */}
            {!collapsed && (
              // mt="80px"
              <Box mb="16px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    "& .avater-image": {
                      backgroundColor: colors.primary[500],
                    },
                  }}
                >
                  <img
                    className="avater-image"
                    alt="profile user"
                    width="100px"
                    height="100px"
                    src={"../../assets/avatar.png"}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    AlbaCeo
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
            <Box
              paddingLeft={collapsed ? undefined : "10%"}
              // className={collapsed ? "menuitem" : ""}
              sx={{
                paddingBottom: "80px",
              }}
            >
              <Item
                title="Dashboard"
                to="/"
                locate=""
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                sx={{
                  m: "15px 20px 5px 20px",
                  color:
                    `${theme.palette.mode}` === "dark"
                      ? `${sidebarsrc}` === "true"
                        ? "#c0bfbf !important"
                        : `${colors.grey[300]} !important`
                      : `${colors.grey[300]} !important`,
                }}
              >
                Data
              </Typography>
              <Item
                title="Manage Team"
                to="/team"
                locate="team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                locate="contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balances"
                to="/invoices"
                locate="invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                sx={{
                  m: "15px 20px 5px 20px",
                  color:
                    `${theme.palette.mode}` === "dark"
                      ? `${sidebarsrc}` === "true"
                        ? "#c0bfbf !important"
                        : `${colors.grey[300]} !important`
                      : `${colors.grey[300]} !important`,
                }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                locate="form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                locate="calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                locate="faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                sx={{
                  m: "15px 20px 5px 20px",
                  color:
                    `${theme.palette.mode}` === "dark"
                      ? `${sidebarsrc}` === "true"
                        ? "#c0bfbf !important"
                        : `${colors.grey[300]} !important`
                      : `${colors.grey[300]} !important`,
                }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                locate="bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                locate="pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                locate="line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                locate="geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </Box>
  );
};
export default MyProSidebar1;
