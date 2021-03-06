import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlePushToRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <Tooltip
        title={
          isFormValid
            ? "Please Login"
            : "Please fill all the fields and try again"
        }
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleLogin}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?  "
        redirectText="Create an account"
        redirectHandler={handlePushToRegister}
        additionalStyles={{ marginTop: "30px" }}
      />
    </>
  );
};

export default LoginFooter;
