import React from "react";

const UsersTable = () => {
  return (
    <table className="bg-[#F2F2F2] w-3/5 mx-auto border-collapse border-black border">
      <thead>
        <tr className=" mx-auto border-black border-b">
          <th>All Users</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
    </table>
  );
};

export default UsersTable;
