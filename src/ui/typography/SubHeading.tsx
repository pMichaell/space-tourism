import { ReactNode } from "react";
import clsx from "clsx";

type subHeadingVariant = 1 | 2;

interface subHeadingProps {
  children: ReactNode;
  size?: subHeadingVariant;
  className?: string;
}

const SubHeading = ({ children, size = 1, className }: subHeadingProps) => {
  const classNames =
    size === 1
      ? clsx("uppercase", "fs500", "ffSerif", className)
      : clsx(
          "uppercase",
          "ffSerif",
          "fs200",
          "letterSpacing2",
          "textAccent",
          className
        );

  return <p className={classNames}>{children}</p>;
};

export default SubHeading;
