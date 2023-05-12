import * as React from "react";

type ButtonVariant = "primary";

export type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const STYLE_MAPPER: { [key in ButtonVariant]: string } = {
  primary: "bg-[#2383f3] border-none text-white",
};

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={`${STYLE_MAPPER[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
