import { ReactNode } from "react";
import clsx from "clsx";

type BodyTextProps = {
  children: ReactNode;
  className?: string;
};

const BodyText = ({ children, className }: BodyTextProps) => {
  return <p className={clsx("textAccent", className)}>{children}</p>;
};

export default BodyText;
