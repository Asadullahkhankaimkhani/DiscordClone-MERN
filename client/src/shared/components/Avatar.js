import { styled } from "@mui/system";
import React from "react";

const AvatarPreview = styled("div")({
  width: "42px",
  height: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { width: "80px", height: "80px" } : {}}>
      {username?.substring(0, 2).toUpperCase()}
    </AvatarPreview>
  );
};

export default Avatar;
