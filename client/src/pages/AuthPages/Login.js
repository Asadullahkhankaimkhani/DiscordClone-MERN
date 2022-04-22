import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginInputs from "../../components/Login/LoginInputs";
import LoginFooter from "../../components/Login/LoginFooter";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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
