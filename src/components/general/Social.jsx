import React from "react";
import Apple from "../icons/Apple";
import Facebook from "../icons/Facebook";
import Google from "../icons/Google";

const Social = () => {
  return (
    <div className="flex justify-center space-x-6">
      <SocialSingle component={<Google />} />
      <SocialSingle component={<Apple />} />
      <SocialSingle component={<Facebook />} />
    </div>
  );
};

const SocialSingle = ({ component: Component }) => (
  <div className="w-[36px] md:w-[68px] h-[28px] md:h-[53px] md:p-3.5 shadow-sm shadow-[rgba(50, 50, 71, 0.1] p-1">
    {Component}
  </div>
);

export default Social;
