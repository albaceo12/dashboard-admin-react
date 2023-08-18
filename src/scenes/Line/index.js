import React from "react";
import LineChart from "../../components/LineChart/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Line = () => {
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
      <Header title="Line CHART" subtitle="simple line chart" />
      <div
        style={{
          height: "70vh",
          marginTop: "-50px",
        }}
      >
        <LineChart />
      </div>
    </Box>
  );
};

export default Line;
