import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`w-5 h-5 accent-indigo-600 ${className} rounded-[10px]`} // Apply a border radius of 10px (default is 5px + 5px)
      {...props}
    />
  );
};
