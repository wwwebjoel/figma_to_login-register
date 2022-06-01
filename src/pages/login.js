import React from "react";
import Input from "../components/general/Input";
import OrSeparator from "../components/general/Separator";
import Social from "../components/general/Social";
import SubmitButton from "../components/general/SubmitButton";

const Register = () => {
  return (
    <div className="w-full m-auto flex text-center justify-center">
      <div className="login-register-container">
        <div className="login-register-container-inside">
          <div className="heading-1">Welcome back! 👋</div>
          <div className="heading-2">{"Let's build someting great"}</div>

          <Social />

          <OrSeparator />

          <form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <SubmitButton>Start your 2-week free trial!</SubmitButton>
          </form>

          <div className="mx-auto leading-normal font-light mt-6 mb-20 rounded-[6px] text-[#1B818C] text-sm py-4 px-10 md:px-2  bg-[rgba(37, 161, 175, 0.1)] border-dashed border-[1px] w-11/12">
            <span className="text-[18px] font-medium">Click here</span>
            <br />
            to sign up of the complete Examine Membership. Includes a free 2
            week trial!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
