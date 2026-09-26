import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center gap-1";

function Button({ text, variant, startIcon, onClick, loading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={` ${defaultStyles} ${loading ? "cursor-not-allowed bg-purple-200" : variantClasses[variant] + " cursor-pointer"}`}
    >
      {startIcon} {text}
    </button>
  );
}

export default Button;
