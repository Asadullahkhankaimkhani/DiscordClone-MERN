import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle.js";
import FriendList from "./FriendList";
import PendingInvitationsList from "./PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendList />
      <FriendsTitle title="Pending Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
