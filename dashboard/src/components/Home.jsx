import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      {/*  This is where the dynamic content will load */}
    </>
  );
};

export default Home;
