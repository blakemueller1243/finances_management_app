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
            width: '40%',
            margin: theme.spacing(2)
            }}
      >
        <Toolbar style={{justifyContent: 'center'}}>
          <Button 
           color="inherit"
           component={Link} to="/dashboard"
            style={{ 
                backgroundColor: location.pathname === "/dashboard" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(2)
                }}
            size="large" 
            >
            <Typography variant="h5">
            Personal
            </Typography>
          </Button>
          <Button 
           color="inherit"
           component={Link} to="/businessdashboard"
            style={{ 
                backgroundColor: location.pathname === "/businessdashboard" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(0)
                }}
            size="large" 
            >
            <Typography variant="h5">
            Business
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>  

      <AppBar 
      position="static"
      style={{ 
        backgroundColor: colors.blueAccent[800],
        width: '48.5%',
        margin: theme.spacing(2)
        }}
      >
        <Toolbar>
          <Button 
            color="inherit"
            component={Link}
            to="/ebay-dashboard"
            style={{ 
                backgroundColor: location.pathname === "/ebay-dashboard" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(1)
            }} 
            size="large">
            <Typography variant="h5">
            eBay
            </Typography>
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/amazon-dashboard"
            style={{ 
                backgroundColor: location.pathname === "/amazon-dashboard" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(1)
            }} 
            size="large">
            <Typography variant="h5">
            Amazon
            </Typography>
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/mercari-dashboard"
            style={{ 
                backgroundColor: location.pathname === "/mercari-dashboard" ? colors.blueAccent[500] : colors.blueAccent[700],
                fontSize: '12px',
                marginRight: theme.spacing(0)
            }} 
            size="large">
            <Typography variant="h5">
            Mercari
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DashboardSwitcher;
