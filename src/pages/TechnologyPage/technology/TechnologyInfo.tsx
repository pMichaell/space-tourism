import classes from "./TechnologyInfo.module.css";
import BodyText from "../../../ui/typography/BodyText";
import Heading from "../../../ui/typography/Heading";
import { Fragment } from "react";
import clsx from "clsx";

const TechnologyInfo = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <Fragment>
      <section className={classes.headingSection}>
        <p
          className={clsx(
            "textAccent",
            "letterSpacing3",
            "uppercase",
            "ffSansCond"
          )}
        >
          The terminology...
        </p>
        <Heading size={4}>{name}</Heading>
      </section>
      <BodyText>{description}</BodyText>
    </Fragment>
  );
};

export default TechnologyInfo;
