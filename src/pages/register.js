import React from "react";
import Input from "../components/general/Input";
import OrSeparator from "../components/general/Separator";
import Social from "../components/general/Social";
import SubmitButton from "../components/general/SubmitButton";

const Login = () => {
  return (
    <div className="w-full m-auto flex text-center justify-center">
      <div className="login-register-container">
        <div className="login-register-container-inside">
          <div className="heading-1">Create your account</div>
          <div className="heading-2">
            {"It's Includes a free 2 week trial!"}
          </div>

          <Social />

          <OrSeparator />

          <form>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <SubmitButton>Start your 2-week free trial!</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
