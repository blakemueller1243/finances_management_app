import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import ChartSwitcher from "../../../components/ChartSwitcher";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="flex">
        <Header title="Charts" />
        <Box position="flex" right="569px" top="20px">
          <ChartSwitcher>
            
          </ChartSwitcher>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;