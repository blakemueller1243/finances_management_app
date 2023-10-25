import { ResponsiveCalendar } from '@nivo/calendar'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockCalendarData as data } from "../data/mockData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2015-07-12"
        emptyColor="#eeeeee"
        colors={[ "#d1e5fb", "#76b2f3", "#1a7feb", "#104c8d" ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={60}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        theme={{
            "background": colors.primary[400],
            "textColor": colors.grey[200],
            "fontSize": 17,
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 22,
                        "fill": colors.grey[100]
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 20,
                        "fill": colors.grey[100]
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#dddddd",
                    "strokeWidth": 1
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": colors.grey[100]
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": colors.grey[100]
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": colors.grey[100],
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": colors.grey[100],
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "container": {
                    "background": colors.grey[100],
                    "color": colors.grey[900],
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
);
};

export default CalendarChart;