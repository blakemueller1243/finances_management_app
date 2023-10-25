import React from "react";
import { Box, useTheme, Tooltip } from "@mui/material";
import { tokens } from "../theme";

const ProgressBar = ({ progress = 0.3, height = 20, total = 10 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const progressPercentage = Math.round(progress * 100);
  const progressText = `${Math.round(progress * total)}/${total} packages shipped`;

  return (
    <Tooltip
      title={`${progressPercentage}%`}
    >
      <Box
        sx={{
          backgroundColor: colors.greenAccent[200],
          width: "100%",
          height,
          borderRadius: 5,
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        <Box
          sx={{
            width: `${progressPercentage}%`,
            height: "100%",
            backgroundColor: colors.blueAccent[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: "white",
          }}
        >
          {progressText}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default ProgressBar;
