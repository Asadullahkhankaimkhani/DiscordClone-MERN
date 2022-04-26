import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { validateEmail } from "../../shared/utils/validators";
import InputWithLabel from "../../shared/components/InputWithLabel";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {};

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Email"
            value={mail}
            setValue={setMail}
            placeholder="Enter email address"
          ></InputWithLabel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
