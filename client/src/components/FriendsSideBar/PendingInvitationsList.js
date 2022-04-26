import React from "react";
import { styled } from "@mui/system";
import PendInvitationListItem from "./PendingInvitationLListItem";

const Invitations = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      mail: "dummy@ad.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Mark",
      mail: "Demo@gmail.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {Invitations.map((invitation) => {
        return (
          <PendInvitationListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitationsList;
