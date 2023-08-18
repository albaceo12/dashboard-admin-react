import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Pie = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    <Box
      m="20px"
      height="80vh"
      p="2px"
      sx={{
        marginTop: "11vh",
      }}
    >
      <Header title="Pie CHART" subtitle="simple pie chart" />
      <div style={{ height: "70vh", marginTop: "-50px" }}>
        <PieChart />
      </div>
    </Box>
  );
};

export default Pie;
