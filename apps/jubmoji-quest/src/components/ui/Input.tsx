import { DerivedComponentType, classed } from "@tw-classed/react";
import React, { InputHTMLAttributes, forwardRef } from "react";
import type * as Classed from "@tw-classed/react";
import { Icons } from "../Icons";
import { cn } from "@/lib/utils";

const InputComponent = classed(
  "input",
  "font-dm-sans bg-transparent font-semibold ring-0 focus:ring-0 focus:outline-none w-full leading-[120%] disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-[11px]",
        md: "text-[13px]",
        lg: "text-base",
      },
      variant: {
        primary: "",
        secondary: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

type InputComponentVariants = Classed.VariantProps<typeof InputComponent>;

interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "ref" | "value" | "onChange"
    >,
    InputComponentVariants {
  loading?: boolean;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, size, children, icon, loading, disabled, ...props },
    ref
  ) => {
    const isSearch = props.type === "search";

    return (
      <div className="relative flex items-center bg-shark-50/10 p-2 gap-2 rounded-[4px]">
        {isSearch && <Icons.search className={cn(disabled ? "opacity-50" : '')} />}
        <InputComponent
          ref={ref}
          variant={variant}
          size={size}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
) as DerivedComponentType<typeof InputComponent, InputComponentVariants>;

Input.displayName = "Input";

export { Input };
