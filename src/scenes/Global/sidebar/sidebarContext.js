import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar1 from "./MyProSidebar1";
import MyProSidebar2 from "./MyProSidebar2";
import { colormodeContext } from "../../../theme";
const SidebarContext = createContext({});
export const MyProSidebarProvider = ({ children }) => {
  const { showmd, setshowmd } = useContext(colormodeContext);
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  const [sidebarsrc, setSidebarsrc] = useState(false);
  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,
          sidebarsrc,
          setSidebarsrc,
          sidebarRTL,
          setSidebarRTL,
        }}
      >
        {/* <div
          style={{
            display: "flex",
          }}
        >
          <div className="trans">
            <MyProSidebar />
          </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          <div
            className={`trans ${showmd ? "" : "showbackdrop"}`}
            style={{
              display: sidebarRTL ? "none" : "",
            }}
          >
            <MyProSidebar2 />
          </div>
          <MyProSidebar1 />
          {/* <div
            style={
              {
                // opacity: `${!showmd ? "0.4" : "1"}`,
                // zIndex: `${!showmd ? "0" : "1000000"}`,
              }
            }
            onClick={() => setshowmd((pre) => !pre)}
          > */}
          {children}
          <div
            className={`transrtl ${showmd ? "" : "showbackdrop"}`}
            style={{
              display: sidebarRTL ? "" : "none",
            }}
          >
            <MyProSidebar2 />
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};
export const useSidebarContext = () => useContext(SidebarContext);
