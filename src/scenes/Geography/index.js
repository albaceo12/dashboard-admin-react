import React from "react";
import GeographyChart from "../../components/GeographyChart/GeographyChart";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
const Geography = () => {
  return (
    <Box
      m="20px"
      height="80vh"
      p="2px"
      sx={{
        marginTop: "11vh",
      }}
    >
      <Header title="Geography CHART" subtitle="simple Geography chart" />
      <div style={{ height: "70vh", marginTop: "-30px" }}>
        <GeographyChart />
      </div>
    </Box>
  );
};

export default Geography;
