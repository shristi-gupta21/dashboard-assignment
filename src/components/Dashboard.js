import React from "react";
import UsersTable from "./UsersTable";

const Dashboard = () => {
  return (
    <div className="w-4/5 bg-gradient-to-b from-[#F2F2E7] via-[#CEDDDC] to-[#E6EFF8 ]">
      <h1 className=" font-bold py-6 px-10 text-3xl text-[#132332]">
        Dashboard-1
      </h1>
      <UsersTable />
    </div>
  );
};

export default Dashboard;
