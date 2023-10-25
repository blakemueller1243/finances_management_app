import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color hexs
export const tokens = (mode) => ({
    ...(mode === "dark"
        ?{
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414",
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#434957",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509",
            },
            blueAccent: {
                100: "#d1e5fb",
                200: "#a3ccf7",
                300: "#76b2f3",
                400: "#4899ef",
                500: "#1a7feb",
                600: "#1566bc",
                700: "#104c8d",
                800: "#0a335e",
                900: "#05192f",
            },
            pinkAccent: {
                100: "#f5d1fb",
                200: "#eaa3f7",
                300: "#e076f3",
                400: "#d548ef",
                500: "#cb1aeb",
                600: "#a215bc",
                700: "#7a108d",
                800: "#510a5e",
                900: "#29052f",
            },
            lightblueAccent: {
                100: "#d1fbf8",
                200: "#a3f7f1",
                300: "#76f3eb",
                400: "#48efe4",
                500: "#1aebdd",
                600: "#15bcb1",
                700: "#108d85",
                800: "#0a5e58",
                900: "#052f2c",
            },
            greenAccent: {
                100: "#d6f4d4",
                200: "#ade9aa",
                300: "#84dd7f",
                400: "#5bd255",
                500: "#32c72a",
                600: "#289f22",
                700: "#1e7719",
                800: "#145011",
                900: "#0a2808"
            },
        }    
    : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        blueAccent: {
            100: "#05192f",
            200: "#0a335e",
            300: "#104c8d",
            400: "#1566bc",
            500: "#1a7feb",
            600: "#2b6db3",
            700: "#76b2f3",
            800: "#a3ccf7",
            900: "#d1e5fb",
        },
        pinkAccent: {
            100: "#29052f",
            200: "#510a5e",
            300: "#7a108d",
            400: "#a215bc",
            500: "#cb1aeb",
            600: "#d548ef",
            700: "#e076f3",
            800: "#eaa3f7",
            900: "#f5d1fb",
        },
        lightblueAccent: {
            100: "#052f2c",
            200: "#0a5e58",
            300: "#108d85",
            400: "#15bcb1",
            500: "#1aebdd",
            600: "#48efe4",
            700: "#76f3eb",
            800: "#a3f7f1",
            900: "#d1fbf8",
        },
        greenAccent: {
          100: "#0a2808",
          200: "#145011",
          300: "#1e7719",
          400: "#289f22",
          500: "#32c72a",
          600: "#5bd255",
          700: "#84dd7f",
          800: "#ade9aa",
          900: "#d6f4d4",
        },
    }),
})


// mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...(mode === "dark" 
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.blueAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500],
                },
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.blueAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: "#fcfcfc",
                },
            }
           ),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};