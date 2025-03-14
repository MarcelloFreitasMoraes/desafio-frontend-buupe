import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  endIcon?: React.ReactNode;
  error?: string
}

function Input({ className, type, endIcon, error, ...props }: InputProps) {
  return (
    <div className="relative flex  items-center">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-10 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {endIcon && <span className="absolute right-2 text-gray-400 cursor-pointer">{endIcon}</span>}
      <div className="h-4">
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export { Input };
