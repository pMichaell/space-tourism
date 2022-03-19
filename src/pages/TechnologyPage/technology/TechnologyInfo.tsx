import classes from "./TechnologyInfo.module.css";
import BodyText from "../../../ui/typography/BodyText";
import Heading from "../../../ui/typography/Heading";
import { Fragment } from "react";
import clsx from "clsx";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const TechnologyInfo = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { width } = useWindowDimensions();
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
        <Heading size={width > 560 ? 3 : 4}>{name}</Heading>
      </section>
      <BodyText className={classes.bodyText}>{description}</BodyText>
    </Fragment>
  );
};

export default TechnologyInfo;
