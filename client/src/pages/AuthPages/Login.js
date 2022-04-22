import React, { useState, useEffect } from "react";
import { getAction } from "../../action/authActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// Component
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginInputs from "../../components/Login/LoginInputs";
import LoginFooter from "../../components/Login/LoginFooter";
import { validateLoginForm } from "../../shared/utils/validators";

function Login({ login }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, isFormValid]);

  const handleLogin = () => {
    login({ mail, password }, history);
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Login);
