import React from "react";
import UsersTable from "./UsersTable";
import Button from "./Button";
import DetailCard from "./DetailCard";

const Dashboard = () => {
  return (
    <div className="w-4/5 bg-gradient-to-b from-[#F2F2E7] via-[#CEDDDC] to-[#E6EFF8] flex flex-col">
      <div className="w-full">
        <h1 className=" font-bold py-6 px-10 text-3xl text-[#132332]">
          Dashboard-1
        </h1>
        <UsersTable />
      </div>
      <div className="flex justify-end">
        <Button label={"Show Details"} />
      </div>
      <DetailCard />
    </div>
  );
};

export default Dashboard;
