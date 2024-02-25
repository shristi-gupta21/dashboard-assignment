import React, { useState, useEffect } from "react";

const UsersTable = () => {
  const [usersData, setUsersData] = useState(null);
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo";

  useEffect(() => {
    fetch(
      "http://enl.centralindia.cloudapp.azure.com/assignment/user/userInfo/allUsers",
      {
        headers: {
          Authorization: `${authToken}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUsersData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  console.log(usersData);
  return (
    <table className="bg-[#F2F2F2] w-3/5 mx-auto border-collapse border-black border ">
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
