import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
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
            width: '85.7%',
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
    </div>
  );
};

export default DashboardSwitcher;
