import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginInputs from "../../components/Login/LoginInputs";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
}

export default Login;
