import React, { useState, useEffect } from "react";

const SideNav = () => {
  const [menuGroup1Items, setMenuGroup1Items] = useState(null);
  const [menuGroup2Items, setMenuGroup2Items] = useState(null);
  const [menuGroup3Items, setMenuGroup3Items] = useState(null);
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo";

  useEffect(() => {
    fetch(
      "http://enl.centralindia.cloudapp.azure.com/assignment/sidebarMenu/menuItems",
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
        data.sort((a, b) => (a.menuItemName > b.menuItemName ? 1 : -1));
        let groupOneItem = data.filter(
          (item) => item.menuGroupName == "Group One"
        );
        setMenuGroup1Items(groupOneItem);
        let groupTwoItem = data.filter(
          (item) => item.menuGroupName == "Group Two"
        );
        setMenuGroup2Items(groupTwoItem);
        let groupThreeItem = data.filter(
          (item) => item.menuGroupName == "Group Three"
        );
        setMenuGroup3Items(groupThreeItem);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  console.log(menuGroup1Items, menuGroup2Items, menuGroup3Items);
  return (
    <>
      <div className="bg-[#132332] w-1/5 h-screen">
        <p className=" text-white text-3xl py-5 px-4">Assignment</p>
        <div className="bg-white w-full h-px"></div>
        <p className=" text-white text-xl py-3 px-4">Menu Group One</p>
        {menuGroup1Items?.map((item) => (
          <>
            <p className=" text-white text-lg py-2 px-4" key={item.menuItemId}>
              {item.menuItemName}
            </p>
          </>
        ))}
        <p className=" text-white text-xl py-3 px-4">Menu Group Two</p>
        {menuGroup2Items?.map((item) => (
          <>
            <p className=" text-white text-lg py-2 px-4" key={item.menuItemId}>
              {item.menuItemName}
            </p>
          </>
        ))}
        <p className=" text-white text-xl py-3 px-4">Menu Group Three</p>
        {menuGroup3Items?.map((item) => (
          <>
            <p className=" text-white text-lg py-2 px-4" key={item.menuItemId}>
              {item.menuItemName}
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default SideNav;
