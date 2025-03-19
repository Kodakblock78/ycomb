import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
