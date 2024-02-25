import React from "react";
import UsersTable from "./UsersTable";
import Button from "./Button";

const Dashboard = () => {
  return (
    <div className="w-4/5 bg-gradient-to-b from-[#F2F2E7] via-[#CEDDDC] to-[#E6EFF8] flex flex-col items-end">
      <div className="w-full">
        <h1 className=" font-bold py-6 px-10 text-3xl text-[#132332]">
          Dashboard-1
        </h1>
        <UsersTable />
      </div>
      <Button label={"Show Details"} />
    </div>
  );
};

export default Dashboard;
