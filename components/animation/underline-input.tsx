import * as React from "react"
import { cn } from "@/lib/utils"

export interface UnderlineInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelWidth?: string
}

const UnderlineInput = React.forwardRef<HTMLInputElement, UnderlineInputProps>(
  ({ className, type, label, labelWidth = "w-44", ...props }, ref) => {
    return (
      <div className="flex items-center w-full group">
        {label ? (
          <label
            htmlFor={props.id || props.name}
            className={cn(
              "lg:text-xl md:text-lg text-sm text-black font-medium pr-4",
              labelWidth,
            )}
          >
            {label}
          </label>
        ) : null}

        <input
          type={type}
          className={cn(
            "peer appearance-none border-0 border-b-[1.5px] border-[#5e6e65] bg-transparent py-2.5 px-0 text-base text-black focus:outline-none focus:ring-0 focus:border-[#4a5b53] transition-colors duration-300",
            label ? "flex-1" : "w-full",
            className,
          )}
          placeholder=" "
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
UnderlineInput.displayName = "UnderlineInput"

export { UnderlineInput }
