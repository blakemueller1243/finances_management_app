import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import CalendarChart from "../../../components/CalendarChart";
import BarChart from "../../../components/BarChart";


const GlobalDashboard = () => {

  return (
      <Box m="20px">
        <Box>
          <Header title="PERSONAL DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box height="250px" sx={{ mt: 5 }}>
          <LineChart>
          </LineChart>
        </Box>
        <Box height="300px" sx={{ mt: 5 }}>
          <CalendarChart>
          </CalendarChart>
        </Box>
        <Box height="300px" sx={{ mt: 100 }}>
          <BarChart>
          </BarChart>
        </Box>
      </Box>
  );
};

export default GlobalDashboard;

