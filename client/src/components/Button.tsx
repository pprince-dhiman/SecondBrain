import type React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  onClick: () => void;
}

const variantStyle: Record<ButtonProps["variant"], string> = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-300 text-purple-600",
}

const sizeStyles = {
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": "py-4 px-6"
}

const defaultStyles = "rounded-md flex";

export const Button = ({variant, size, text, startIcon, endIcon, onClick}: ButtonProps) => {
  return (
    <button className={`${variantStyle[variant]} ${sizeStyles[size]} ${defaultStyles}`} onClick={onClick}>
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text} {endIcon}
    </button>
  );
};
