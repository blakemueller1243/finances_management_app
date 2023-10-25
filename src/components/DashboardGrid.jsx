import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import React, { useEffect } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import StatBox from "./StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const DashboardGrid = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        var options = {
          column: 12,
          row: 12,
          float: false,
          auto: true,
          cellHeight: 140,
          cellWidth: 280,
    
        };
        var grid = GridStack.init(options);
      });

    return (
      <div className="grid-stack">
        <div className="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="2" data-gs-height="1">
          <div className="grid-stack-item-content">
            <StatBox
              title="69"
              subtitle="Sales Today"
              icon={<EmailIcon sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
            />
          </div>
        </div>
        <div className="grid-stack-item" data-gs-x="0" data-gs-y="2" data-gs-width="2" data-gs-height="1">
          <div className="grid-stack-item-content">
            <StatBox
              title="12"
              subtitle="To Be Shipped"
              icon={<PointOfSaleIcon sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
            />
          </div>
        </div>
        <div className="grid-stack-item" data-gs-x="1" data-gs-y="0" data-gs-width="2" data-gs-height="1">
          <div className="grid-stack-item-content">
            <StatBox
              title="32,441"
              subtitle="?????"
              icon={<PersonAddIcon sx={{ color: colors.blueAccent[600], fontSize: "26px" }} />}
            />
          </div>
        </div>
      </div>
    );
  };

  export default DashboardGrid;