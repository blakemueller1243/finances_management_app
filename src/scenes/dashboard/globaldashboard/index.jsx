import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import DashboardGrid from '../../../components/DashboardGrid';

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';  // gridstack styles

const GlobalDashboard = () => {

  return (
    <>
      <Box m="20px">
        <Box>
          <Header title="PERSONAL DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
      </Box>
      
      <Box>
        <DashboardGrid/>
      </Box>
    </>
  );
};

export default GlobalDashboard;

