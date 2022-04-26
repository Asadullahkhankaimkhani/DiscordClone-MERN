import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";
const additionalStyle = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialogHandler = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyle}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseDialogHandler}
      />
    </>
  );
};

export default AddFriendButton;
