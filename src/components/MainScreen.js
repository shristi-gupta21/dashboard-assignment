import React from "react";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";

const MainScreen = () => {
  return (
    <div className="flex">
      <SideNav />
      <Dashboard />
    </div>
  );
};

export default MainScreen;
