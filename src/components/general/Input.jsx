import React from "react";

const Input = ({ type = "text", placeholder = "Placeholder here" }) => {
  return (
    <input className="form-input" type={type} placeholder={placeholder}></input>
  );
};

export default Input;
