import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/Global/Topbar";
import MyProSidebar from "./scenes/Global/sidebar/MyProSidebar1";
import Dashboard from "./scenes/Dashboard/index";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import FAQ from "./scenes/Faq";
import Geography from "./scenes/Geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colormodeContext, useMode } from "./theme";
import Calendar from "./scenes/Calendar/Calendar";
import { MyProSidebarProvider } from "./scenes/Global/sidebar/sidebarContext";
function App() {
  const [theme, colorMode] = useMode();
  const [showmd, setshowmd] = useState(true);
  return (
    <colormodeContext.Provider value={{ colorMode, showmd, setshowmd }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          {!showmd && (
            <div
              className="backdrop"
              onClick={() => {
                setshowmd((pre) => {
                  if (pre === false) {
                    return true;
                  }
                  return true;
                });
              }}
            ></div>
          )}
          <div className="app">
            <main className="content">
              <div className="div">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/*" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </div>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </colormodeContext.Provider>
  );
}
export default App;
