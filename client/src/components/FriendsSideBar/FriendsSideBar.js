import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";

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
    </MainContainer>
  );
};

export default FriendsSideBar;
