import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const additionalStyle = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const handleOpenFriendDaiog = () => {
    //
  };
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyle}
        label="Add Friend"
        onClick={handleOpenFriendDaiog}
      />
    </>
  );
};

export default AddFriendButton;
