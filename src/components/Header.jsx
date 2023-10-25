import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BusinessDashboardSwitcher from "./BusinessDashboardSwitcher";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb="30px">
      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.blueAccent[400]}>
          {subtitle}
        </Typography>
      </Box>

      <Box position= "flex" left="-1.2px" top="0px">
        <BusinessDashboardSwitcher></BusinessDashboardSwitcher>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            width: "170px",
            height: "60px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Report
        </Button>
      </Box>
    </Box>
  );
};

export default Header;