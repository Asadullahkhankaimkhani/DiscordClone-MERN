import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import RegisterFooter from "../../components/RegisterPage/RegisterFooter";
import RegisterPageInputs from "../../components/RegisterPage/RegisterPageInputs";
import AuthBox from "../../shared/components/AuthBox";
import { validateRegisterForm } from "../../shared/utils/validators";
import { getAction } from "../../action/authActions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Register({ register }) {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
    console.log("isFormValid", isFormValid);
  }, [mail, password, isFormValid, username]);

  const handleRegister = () => {
    register({ mail, username, password }, history);
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

const mapDispatchToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Register);
