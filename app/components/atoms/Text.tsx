import * as React from "react";

type TextVariant = "title";

export type TextProps = {
  variant?: TextVariant;
  className?: string;
} & React.PropsWithChildren;

const STYLE_MAPPER: { [key in TextVariant]: string } = {
  title: "font-semibold text-sm",
};

const Text = ({ children, className, variant = "title" }: TextProps) => {
  return <p className={`${className} ${STYLE_MAPPER[variant]}`}>{children}</p>;
};

export default Text;
