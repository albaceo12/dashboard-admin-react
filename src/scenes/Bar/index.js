import React from "react";
import BarChart from "../../components/BarChart/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Bar = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    <Box
      m="20px"
      height="80vh"
      sx={{
        marginTop: "11vh",
      }}
    >
      <Header title="BAR CHART" subtitle="simple bar chart" />
      <div style={{ height: "70vh", marginTop: "-50px" }}>
        <BarChart />
      </div>
    </Box>
  );
};
export default Bar;
