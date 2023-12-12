import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import DashboardGrid from '../../../components/DashboardGrid';


const GlobalDashboard = () => {

  return (
      <Box m="20px">
        <Box>
          <Header title="PERSONAL DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box>
          <DashboardGrid/>
        </Box>
      </Box>
  );
};

export default GlobalDashboard;

