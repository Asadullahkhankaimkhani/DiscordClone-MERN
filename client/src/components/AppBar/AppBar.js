import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  position: "absolute",
  top: "0",
  right: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 326px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
});

const AppBar = () => {
  return <MainContainer></MainContainer>;
};

export default AppBar;
