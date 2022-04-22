import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlePushToLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <Tooltip
        title={
          isFormValid
            ? "Please Register"
            : "Please fill all the fields and try again"
        }
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleRegister}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account?  "
        redirectText="Please Login"
        redirectHandler={handlePushToLogin}
        additionalStyles={{ marginTop: "5px" }}
      />
    </>
  );
};

export default RegisterFooter;
