import React, { useEffect } from "react";
import { styled } from "@mui/system";

// Components
import SideBar from "../../components/Sidebar/SideBar";
import FriendsSideBar from "../../components/FriendsSideBar/FriendsSideBar";
import Messenger from "../../components/Messenger/Messenger";
import AppBar from "../../components/AppBar/AppBar";
import { logout } from "../../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../store/action/authActions";
import { connectWithSocketServer } from "../../RealTimeCommunication/socketConnection";

const Wrapper = styled("div")({
  display: "flex",
  width: "100%",
  height: "100vh",
});

function Dashboard({ setUserDetails }) {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      //history.push("/login");
      // window.location.pathname = "login";
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
