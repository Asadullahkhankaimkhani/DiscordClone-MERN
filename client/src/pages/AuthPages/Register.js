import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import RegisterFooter from "../../components/RegisterPage/RegisterFooter";
import RegisterPageInputs from "../../components/RegisterPage/RegisterPageInputs";
import AuthBox from "../../shared/components/AuthBox";
import { validateRegisterForm } from "../../shared/utils/validators";

function Register() {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
    console.log("isFormValid", isFormValid);
  }, [mail, password, isFormValid, username]);

  const handleRegister = () => {
    console.log("Register");
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
}

export default Register;
