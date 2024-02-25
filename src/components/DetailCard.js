import React, { useState, useEffect } from "react";

const DetailCard = () => {
  const [usersData, setUsersData] = useState(null);
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo";

  useEffect(() => {
    fetch(
      "http://enl.centralindia.cloudapp.azure.com/assignment/user/userInfo/2",
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
    <div className="bg-[#F2F2F2] py-6 px-8 w-2/5 rounded-lg shadow flex flex-col gap-4 mx-auto">
      <p>User ID :</p>
      <p>Salutation :</p>
      <p>Full name :</p>
    </div>
  );
};

export default DetailCard;
