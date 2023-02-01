import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export function Button({ name, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "inline-flex items-center rounded-md justify-center border border-transparent rounded-[50px] bg-gradient-to-tr from-sanahPurple to-sanahBlue px-3 py-2 text-sm font-medium text-white",
        props.className
      )}
    >
      <span>{props.children}</span>
    </button>
  );
}
