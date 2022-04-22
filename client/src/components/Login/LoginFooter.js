import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const LoginFooter = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Login"
        additionalStyles={{ marginTop: "30px" }}
        onClick={handleLogin}
        disabled={!isFormValid}
      />
    </div>
  );
};

export default LoginFooter;
