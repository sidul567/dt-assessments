import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const inputWrapperVariants = cva(
  "flex h-13 w-full items-center gap-2 px-6",
  {
    variants: {
      variant: {
        filled: "rounded-3xl bg-neutral-white",
        outline: "rounded-full border border-neutral-200 bg-transparent",
        field: "rounded-xl border border-neutral-100 bg-white",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputWrapperVariants> {
  icon?: React.ReactNode;
  wrapperClassName?: string;
}

export function Input({
  className,
  wrapperClassName,
  variant,
  icon,
  ...props
}: InputProps) {
  return (
    <div className={cn(inputWrapperVariants({ variant }), wrapperClassName)}>
      {icon}
      <input
        className={cn(
          "w-full bg-transparent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { inputWrapperVariants };
