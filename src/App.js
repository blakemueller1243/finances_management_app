import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DynamicDashboard from "./scenes/dashboard/dynamicdashboard";
import GlobalDashboard from "./scenes/dashboard/globaldashboard";
import TestDashboard from "./scenes/dashboard/testingdashboard";
import BusinessDashboard from "./scenes/dashboard/globalbusinessdashboard";
import EbayDashboard from "./scenes/dashboard/ebaydashboard";
import AmazonDashboard from "./scenes/dashboard/amazondashboard";
import MercariDashboard from "./scenes/dashboard/mercaridashboard";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Bar from "./scenes/charts/bar";
import Line from "./scenes/charts/line";
import Pie from "./scenes/charts/pie";
import CalendarChart from "./scenes/charts/calendarchart";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Inventory from "./scenes/inventory";

function App() {
  const [theme, colorMode] = useMode();

  return (
<ProSidebarProvider>
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path ="/dashboard" element = {<GlobalDashboard />} />
            <Route path ="/businessdashboard" element = {<BusinessDashboard />} />
            <Route path ="/ebay-dashboard" element = {<EbayDashboard />} />
            <Route path ="/amazon-dashboard" element = {<AmazonDashboard />} />
            <Route path ="/mercari-dashboard" element = {<MercariDashboard />} />
            <Route path ="/team" element = {<Team />} />
            <Route path ="/contacts" element = {<Contacts />} />
            <Route path ="/bar" element = {<Bar />} />
            <Route path ="/form" element = {<Form />} />
            <Route path ="/line" element = {<Line />} />
            <Route path ="/pie" element = {<Pie />} />
            <Route path ="/faq" element = {<FAQ />} />
            <Route path ="/calendar" element = {<Calendar />} />
            <Route path ="/calendarchart" element = {<CalendarChart />} />
            <Route path ="/inventory" element = {<Inventory />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  </ProSidebarProvider>
  );
}

export default App;
