import React from "react";
import { useInput } from "../CustomHooks/InputHook"

function LoginPage() {
  const { userValue, userBind, userReset } = useInput("")
  const { passValue, passBind, passReset } = useInput("")
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <input type="text" {...userBind}/>
      <input type="text" {...passBind}/>
    </div>
  );
}

export default LoginPage;
