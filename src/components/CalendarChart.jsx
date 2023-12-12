import { ResponsiveCalendar } from '@nivo/calendar'
import { useTheme, MenuItem, FormControl, Select, InputLabel, TextField } from "@mui/material";
import { tokens } from "../theme";
import { mockCalendarData as data } from "../data/mockData";
import React, { useState } from 'react';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const CalendarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selectedChart, setSelectedChart] = useState('total');

    // Get the current year
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    // Update the fromDate and toDate based on the selected year
    const fromDate = `${selectedYear}-01-02`;
    const toDate = `${selectedYear}-12-31`;

    // Separate the data
    const incomeData = data.filter((item) => item.value >= 0);
    const spendingData = data.filter((item) => item.value < 0);
    
    //Setting default item height for year drop down
    const ITEM_HEIGHT = 48;

    // Handle selection change
    const handleChartChange = (event) => {
      setSelectedChart(event.target.value);
    };
    const handleYearChange = (event) => {
        const year = event.target.value;
        setSelectedYear(year);
    };

    const calculateMonthlyTotals = (data, year) => {
        const monthlyTotals = {};
      
        // Initialize monthlyTotals with each month of the year set to 0
        for (let month = 1; month <= 12; month++) {
          const monthString = month.toString().padStart(2, '0'); // Ensure the month is two digits
          monthlyTotals[`${year}-${monthString}`] = 0;
        }
      
        // Accumulate the values for each month
        data.forEach(item => {
          const month = item.day.slice(0, 7); // Get the 'YYYY-MM' part of the date
          if (monthlyTotals.hasOwnProperty(month)) {
            monthlyTotals[month] += item.value;
          }
        });
      
        return monthlyTotals;
      };

      
      // Render monthly totals for income, spending, and net total
      const renderMonthlyTotals = (type) => {
        let monthlyTotals;
        let title;
      
        switch (type) {
          case 'income':
            monthlyTotals = calculateMonthlyTotals(incomeData, selectedYear);
            title = 'Income';
            break;
          case 'spending':
            monthlyTotals = calculateMonthlyTotals(spendingData, selectedYear);
            title = 'Spending';
            break;
          case 'total':
            const incomeTotals = calculateMonthlyTotals(incomeData, selectedYear);
            const spendingTotals = calculateMonthlyTotals(spendingData, selectedYear);
            monthlyTotals = Object.keys(incomeTotals).reduce((acc, month) => {
              acc[month] = incomeTotals[month] + (spendingTotals[month] || 0);
              return acc;
            }, {});
            title = 'Total';
            break;
          default:
            return null; // or some default message indicating to select a chart
        }

        // Calculate the yearly total
        const yearlyTotal = Object.values(monthlyTotals).reduce((acc, value) => acc + value, 0);

        // Define a fixed width for each month container
        const monthContainerWidth = '80px';
      
        return (
          <div>
            <div style={{ backgroundColor: colors.primary[500], padding: '5px', marginBottom: '-20px', marginTop: '-30px' }}>
                <h2>{title}</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '4px', backgroundColor: colors.primary[500], marginTop: '-20px'}}>
              {Object.entries(monthlyTotals).map(([month, total]) => (
                <div key={month} style={{ textAlign: 'center', marginLeft: '70px'  }}>
                  <div>{month}</div>
                  <div>${total.toFixed(2)}</div>
                </div>
              ))}
              {/* Displaying the yearly total */}
            <div style={{ width: monthContainerWidth, textAlign: 'center', marginLeft: '76px' }}>
                <div>Yearly Total</div>
                <div>${yearlyTotal.toFixed(2)}</div>
            </div>
            </div>
          </div>
        );
      };
      const colorsData = [
        "#2f0d0a",
        "#5e1a15",
        "#8d261f",
        "#bc332a",
        "#eb4034",
        "#ef665d",
        "#f38c85",
        "#f7b3ae",
        "#fbd9d6",
        "#bce8b8", 
        "#9ad396", 
        "#6cc963", 
        "#49a43f", 
        "#2a8c1f", 
        "#208017", 
        "#185e13", 
        "#0e3c0d", 
        "#051c04"
      ];

      const themeData = {
        "background": colors.primary[500],
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
      };
      

    // Render the appropriate calendar based on the selected chart
    const renderCalendar = () => {
        switch (selectedChart) {
        case 'income':
            return <ResponsiveCalendar
            monthSpacing={40}
            monthBorderWidth={0}
            data={incomeData}
            from={fromDate}
            to={toDate}
            emptyColor="#eeeeee"
            colors={colorsData}
            margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
            yearSpacing={60}
            monthBorderColor={colors.primary[500]}
            dayBorderWidth={2}
            dayBorderColor={colors.primary[500]}
            minValue={-500}
            maxValue={500}
            theme={themeData}
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
        case 'spending':
            return <ResponsiveCalendar
            monthSpacing={40}
            monthBorderWidth={0}
            data={spendingData}
            from={fromDate}
            to={toDate}
            emptyColor="#eeeeee"
            colors={colorsData}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={60}
            monthBorderColor={colors.primary[500]}
            dayBorderWidth={2}
            dayBorderColor={colors.primary[500]}
            minValue={-500}
            maxValue={500}
            theme={themeData}
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
        case 'total':
            return <ResponsiveCalendar
            monthSpacing={40}
            monthBorderWidth={0}
            data={data}
            from={fromDate}
            to={toDate}
            emptyColor="#eeeeee"
            colors={colorsData}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={60}
            monthBorderColor={colors.primary[500]}
            dayBorderWidth={2}
            dayBorderColor={colors.primary[500]}
            minValue={-500}
            maxValue={500}
            theme={themeData}
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
        
        default:
            return <div>Select a chart</div>;
        }
    };

    return (
        <div style={{ height: 300 }} sx={{ backgroundColor: colors.blueAccent[500], mt: 20 }}>
          {/* Dropdown to select the chart */}
          <FormControl style={{ width: 300 }} sx={{ backgroundColor: colors.primary[700] }}>
            <InputLabel id="chart-select-label">Select Chart</InputLabel>
            <Select
              labelId="chart-select-label"
              id="chart-select"
              value={selectedChart}
              label="Select Chart"
              onChange={handleChartChange}
            >
              <MenuItem value="total">Total</MenuItem>
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="spending">Spending</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ width: 300 }} sx={{ backgroundColor: colors.primary[700], mb: 1 }}>
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                labelId="year-select-label"
                id="year-select"
                value={selectedYear}
                label="Year"
                onChange={handleYearChange}
                MenuProps={{
                    PaperProps: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 10.5, // where ITEM_HEIGHT is the pixel height of each MenuItem
                        width: 250,
                    },
                    },
                }}
                >
                {[...Array(20)].map((_, i) => (
                    <MenuItem key={i} value={currentYear - i}>{currentYear - i}</MenuItem>
                ))}
                </Select>
            </FormControl>
          {/* Render the selected calendar */}
          {renderCalendar()}
          {renderMonthlyTotals(selectedChart)}
        </div>
      );
};

export default CalendarChart;