import { ReactNode } from "react";
import clsx from "clsx";

export type headingVariant = 1 | 2 | 3 | 4 | 5;

interface headingProps {
  children: ReactNode;
  size?: headingVariant;
  className?: string;
}

const Heading = ({ children, size = 1, className }: headingProps) => {
  const assignClassNames = () => {
    let assignedClassName = clsx("uppercase", "ffSerif", className);
    switch (size) {
      case 1:
        assignedClassName = clsx(assignedClassName, "fs900");
        break;
      case 2:
        assignedClassName = clsx(assignedClassName, "fs800");
        break;
      case 3:
        assignedClassName = clsx(assignedClassName, "fs700");
        break;
      case 4:
        assignedClassName = clsx(assignedClassName, "fs600");
        break;
      case 5:
        assignedClassName = clsx(assignedClassName, "fs500", "letterSpacing1");
        break;
    }

    return assignedClassName;
  };

  return <p className={assignClassNames()}>{children}</p>;
};

export default Heading;
