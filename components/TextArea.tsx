import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { name, label, className } = props;
  return (
    <fieldset className="border-none bg-white/20 relative rounded-md border px-2 shadow-sm focus-within:ring-">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-white"
      >
        {label}
      </label>
      <textarea
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
})

export default TextArea;
