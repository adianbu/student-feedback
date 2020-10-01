import { Button } from "@material-ui/core";
import React from "react";

function Login() {
  const onLogIn = () => {};

  const onSignUp = () => {};

  return (
    <div>
      <Button title="Login" onClick={onLogIn} />
      <Button title="Sign Up" onClick={onSignUp} />
    </div>
  );
}

export default Login;
