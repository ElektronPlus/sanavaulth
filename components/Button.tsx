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
        "inline-flex items-center rounded-md justify-center border border-transparent bg-amber-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
        props.className
      )}
    >
      <span>{props.children}</span>
    </button>
  );
}
