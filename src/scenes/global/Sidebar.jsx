import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses, SubMenu } from 'react-pro-sidebar';
import { useState } from "react";

import { Box,Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';

const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [hover, setHover] = useState(false);
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <MenuItem 
        active={selected === title} 
        style={{ 
          color: colors.grey[100],
          backgroundColor: hover ? colors.blueAccent[600] : '',
          transition: "0.2s",
        }} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        icon={icon}
      >
        <Typography>
          {title}
        </Typography>
      </MenuItem>
    </Link>
  );
};






function Sidebarr() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { collapseSidebar} = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");
  const [hover, setHover] = useState(false);



  return (
    <Box>
    <Sidebar
      rootStyles={{
        borderRight: 0,
        height: "100%",
        [`.${sidebarClasses.container}`]: {
          backgroundColor: `${colors.grey[800]}`,
        },
      }}
      >
      <Menu>

      {/* OPEN AND CLOSE MENU */}
        <MenuItem 
          onClick={() => {
            collapseSidebar();
            setIsCollapsed(!isCollapsed);
          }}
          style={{
            margin: "10px 8px 10px 8px",
            color: colors.grey[100],
            backgroundColor: hover ? colors.blueAccent[600] : '',
            transition: "0.2s",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
          {!isCollapsed ? (
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15 px">
              <Typography variant="h5" color={colors.grey[100]}>
                Name Of Project Here
              </Typography>
            <MenuOutlinedIcon />
            </Box>
            
          ) : (
            <MenuOutlinedIcon />
          )}
        </MenuItem>

        {/* USER PICTURE, NAME, AND ROLE */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`} 
                style={{ cursor: "pointer", borderRadius: "50%"}}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sc={{ m: "10px 0 0 0" }}>Sahn Gaku</Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>Dev I Guess?</Typography>
            </Box>
          </Box>
          )}


        {/* MENU ITEMS */}
          <Box>
            <Item 
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
              >
            Profiles
            </Typography>
            )}
            <Item 
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Invoices"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="New Transaction"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
              >
            Utilities
            </Typography>
            )}
            {/* <Item 
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item 
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
              >
            Data
            </Typography>
            )}
            <Item 
            title="Charts"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item 
            title="Inventory"
            to="/inventory"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            />
          </Box>
      </Menu>
    </Sidebar>
  </Box>
);
}

export default Sidebarr;