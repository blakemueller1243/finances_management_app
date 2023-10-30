import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useRef, useEffect } from "react";
import { debounce } from 'lodash';

const StatBox = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const statBoxRef = useRef(null);

  useEffect(() => {

    const resizeObserver = new ResizeObserver(debounce(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const titleLength = title.length;
        const subtitleLength = subtitle.length;
        
        const maxTitleChars = 12;  // Adjust based on your needs
        const maxSubtitleChars = 16;  // Adjust based on your needs
        
        const titleScaleFactor = Math.min(1, maxTitleChars / titleLength);
        const subtitleScaleFactor = Math.min(1, maxSubtitleChars / subtitleLength);
        
        const fontSizeTitle = (width / 6 + height / 5.5) / 2 * titleScaleFactor;
        const fontSizeSubtitle = (width / 8 + height / 6) / 2 * subtitleScaleFactor;
        const iconSize = (width / 6 + height / 4) / 2;

        entry.target.style.setProperty('--dynamic-font-size-title', `${fontSizeTitle}px`);
        entry.target.style.setProperty('--dynamic-font-size-subtitle', `${fontSizeSubtitle}px`);
        entry.target.style.setProperty('--dynamic-icon-size', `${iconSize}px`);
      }
    }, 1));

    if (statBoxRef.current) {
      resizeObserver.observe(statBoxRef.current);
    }

    return () => {
      if (statBoxRef.current) {
        resizeObserver.unobserve(statBoxRef.current);
      }
    };
  }, [title, subtitle]);

  return (
    <Box 
      ref={statBoxRef}
      width="100%" 
      height="100%" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      p={1.5}
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={2}
        sx={{
          width: "var(--dynamic-icon-size, 40px)",
          height: "var(--dynamic-icon-size, 40px)",
          '& > svg': {
            width: '100%',
            height: '100%',
          }
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.grey[100], fontSize: "var(--dynamic-font-size-title, 20px)"}}
      >
        {title}
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ color: colors.greenAccent[500], mt: 1, fontSize: "var(--dynamic-font-size-subtitle, 16px)" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default StatBox;
