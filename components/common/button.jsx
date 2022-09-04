import { FiLoader } from "react-icons/fi";
import { classNames } from "lib/classnames";
import * as React from "react";

export function buttonClasses({
  className,
  variant = "primary",
  size = "medium",
  isLoading,
  disabled,
}) {
  return classNames(
    "inline-flex items-center justify-center font-extrabold transition-colors focus-ring",
    size === "large" && "h-14 rounded-xl px-12 text-base",
    size === "medium" && "h-12 rounded-xl px-10 text-md",
    size === "small" && "h-8 rounded-lg px-8 text-sm",
    variant === "primary" &&
      "text-white bg-brand-500 hover:text-white hover:bg-brand-700",
    variant === "secondary" &&
      "border border-brand-500 text-brand-500 bg-white hover:text-brand-700 hover:border-brand-700",
    variant === "tertiary" && "border font-medium bg-white",
    (disabled || isLoading) && "opacity-50 cursor-default",
    className
  );
}

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      type = "button",
      isLoading = false,
      loadingChildren,
      disabled,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        {...rest}
        ref={forwardedRef}
        type={type}
        disabled={disabled || isLoading}
        className={buttonClasses({
          className,
          disabled,
          variant,
          size,
          isLoading,
        })}
      >
        {isLoading && <FiLoader className="w-5 h-5 mr-2 -ml-1 animate-spin" />}
        {isLoading && loadingChildren ? loadingChildren : children}
      </button>
    );
  }
);

Button.displayName = "Button";
