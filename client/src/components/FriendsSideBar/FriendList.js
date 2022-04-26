import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    name: "John Doe",
    isOnline: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    isOnline: false,
  },
  {
    id: 3,
    name: "Jack Doe",
    isOnline: true,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            username={friend.name}
            id={friend.id}
            isOnline={friend.isOnline}
          />
        );
      })}
    </MainContainer>
  );
};

export default FriendList;
