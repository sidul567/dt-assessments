import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "rounded-3xl bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
        outline:
          "rounded-3xl outline outline-solid outline-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50",
        ghost: "rounded-full text-neutral-700 hover:bg-neutral-50",
      },
      size: {
        default: "px-6 py-3 text-lg leading-[24px]",
        icon: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  type = "button",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      type={asChild ? undefined : type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
