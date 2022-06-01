import React from "react";

const SubmitButton = ({ children }) => {
  return (
    <button className="form-submit-button" type="submit">
      <div className="text-sm">{children}</div>
    </button>
  );
};

export default SubmitButton;
