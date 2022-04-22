import React, { useState, useEffect } from "react";

// Component
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginInputs from "../../components/Login/LoginInputs";
import LoginFooter from "../../components/Login/LoginFooter";
import { validateLoginForm } from "../../shared/utils/validators";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, isFormValid]);

  const handleLogin = () => {
    console.log("Login");
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

export default Login;
