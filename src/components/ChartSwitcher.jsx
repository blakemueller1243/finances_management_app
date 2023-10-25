import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from "../theme";
import { Typography, useTheme } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const DashboardSwitcher = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  return (
    <div className={classes.root} style={{ display: "flex", flexDirection: "row" }}> 

      <AppBar 
      position="static"
      style={{ 
        backgroundColor: colors.blueAccent[800],
        width: '90%',
        margin: theme.spacing(2)
        }}
      >
        <Toolbar>
        <Button 
           color="inherit"
           component={Link} to="/bar"
            style={{ 
                backgroundColor: location.pathname === "/bar" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(1)
                }}
            size="large" 
            >
            <Typography variant="h5">
            Bar
            </Typography>
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/pie"
            style={{ 
                backgroundColor: location.pathname === "/pie" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(1)
            }} 
            size="large">
            <Typography variant="h5">
            Pie
            </Typography>
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/line"
            style={{ 
                backgroundColor: location.pathname === "/line" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(1)
            }} 
            size="large">
            <Typography variant="h5">
            Line
            </Typography>
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/calendarchart"
            style={{ 
                backgroundColor: location.pathname === "/calendarchart" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(0)
            }} 
            size="large">
            <Typography variant="h5">
            Calendar
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DashboardSwitcher;
