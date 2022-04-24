import React from "react";
import { styled } from "@mui/system";

// Components
import SideBar from "../../components/Sidebar/SideBar";
import FriendsSideBar from "../../components/FriendsSideBar/FriendsSideBar";
import Messenger from "../../components/Messenger/Messenger";
import AppBar from "../../components/AppBar/AppBar";

const Wrapper = styled("div")({
  display: "flex",
  width: "100%",
  height: "100vh",
});

function Dashboard() {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}

export default Dashboard;
