import React from "react";
import { Outlet } from "react-router-dom";

import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        {/*  This will change only the page content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
