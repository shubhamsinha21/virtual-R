import React from "react";

const Button = ({
  children,
  bgColor = "bg-gradient-to-tr from-amber-500 to-amber-800",
  border = "none",
  paddingX = "p-[10px]",
}) => {
  return (
    <button
      className={`text-sm text-white font-medium
    ${bgColor} ${border}
    ${paddingX} rounded-md hover:p-[12px]`}
    >
      {children}
    </button>
  );
};

export default Button;
