import React from "react";

const OrSeparator = () => {
  return (
    <div className="flex justify-center items-center w-11/12 m-auto">
      <SeparatorLine />
      <div className="py-9 mx-4 text-sm text-text-secondary">OR</div>
      <SeparatorLine />
    </div>
  );
};

const SeparatorLine = () => (
  <div className="flex-grow h-[1px] bg-separator"></div>
);

export default OrSeparator;
