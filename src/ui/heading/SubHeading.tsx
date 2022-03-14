import { ReactNode } from "react";
import clsx from "clsx";

type subHeadingVariant = 1 | 2;

interface subHeadingProps {
  children: ReactNode;
  size?: subHeadingVariant;
}

const SubHeading = ({ children, size }: subHeadingProps) => {
  const classNames =
    size === 1
      ? clsx("uppercase", "fs500", "ffSerif")
      : clsx("uppercase", "ffSerif", "fs200", "letterSpacing2", "textAccent");

  return <p className={classNames}>{children}</p>;
};

export default SubHeading;
