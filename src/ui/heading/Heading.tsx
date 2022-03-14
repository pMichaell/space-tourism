import { ReactNode } from "react";
import clsx from "clsx";

export type headingVariant = 1 | 2 | 3 | 4 | 5;

const Heading = (
  headingVariant: headingVariant,
  { children }: { children: ReactNode }
) => {
  const assignClassNames = () => {
    let className = clsx("uppercase", "ffSerif");
    switch (headingVariant) {
      case 1:
        className = clsx(className, "fs900");
    }
  };

  return <></>;
};

export default Heading;
