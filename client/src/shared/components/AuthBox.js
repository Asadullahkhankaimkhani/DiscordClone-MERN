import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import image from "../../Assets/Images/background-image.jpeg";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "#5865f2",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
});

function AuthBox({ children }) {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "5px",
          boxShadow: "0px 2px 10px 0 rgba(0 0 0 /20% )",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
}

export default AuthBox;
