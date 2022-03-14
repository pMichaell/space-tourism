import classes from "./DestinationPage.module.css";
import clsx from "clsx";
import { Destination } from "../../interfaces";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SubHeading from "../../ui/heading/SubHeading";
import { Fragment } from "react";

const Planet = ({ name, description, distance, travel }: Destination) => {
  const { width } = useWindowDimensions();

  const additionalInfoContents =
    width < 560 ? (
      <Fragment>
        <SubHeading size={2}>Avg. Distance</SubHeading>
        <SubHeading size={1}>{distance}</SubHeading>
        <SubHeading size={2}>Est. Travel Time</SubHeading>
        <SubHeading size={1}>{travel}</SubHeading>
      </Fragment>
    ) : (
      <Fragment>
        <div>
          <SubHeading size={2}>Avg. Distance</SubHeading>
          <SubHeading size={1}>{distance}</SubHeading>
        </div>
        <div>
          <SubHeading size={2}>Est. Travel Time</SubHeading>
          <SubHeading size={1}>{travel}</SubHeading>
        </div>
      </Fragment>
    );

  return (
    <>
      <div>
        <img alt="planet" className={classes[name!]} />
      </div>
      <h2 className={clsx("uppercase", "ffSerif", "fs800")}>{name}</h2>
      <p className={clsx("textAccent", classes.description)}>{description}</p>
      <div className={classes.break} />
      <div className={clsx("flex", classes.additionalInfo)}>
        {additionalInfoContents}
      </div>
    </>
  );
};

export default Planet;
