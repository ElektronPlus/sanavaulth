import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, className } = props;
  return (
    <fieldset className="border-none bg-white/20 rounded-[50px] relative rounded-md border px-3 py-2 shadow-sm">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 -mt-px inline-block bg-transparent px-1 text-xs font-medium text-white"
      >
        {label}
      </label>
      <input
        {...props}
        ref={ref}
        name={name}
        className={twMerge(
          "block w-full border-0 outline-0 p-0 text-white bg-transparent focus:ring-0 sm:text-sm",
          className
        )}
      />
    </fieldset>
  );
});

export default Input;