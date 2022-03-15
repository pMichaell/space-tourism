import classes from "./Planet.module.css";
import clsx from "clsx";
import { Destination } from "../../interfaces";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SubHeading from "../../ui/typography/SubHeading";
import { Fragment } from "react";
import Heading from "../../ui/typography/Heading";

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

  const bodyContents =
    width < 1024 ? (
      <Fragment>
        <h2 className={clsx("uppercase", "ffSerif", "fs800")}>{name}</h2>
        <p className={clsx("textAccent", classes.description)}>{description}</p>
        <div className={classes.break} />
        <div className={clsx("flex", classes.additionalInfo)}>
          {additionalInfoContents}
        </div>
      </Fragment>
    ) : (
      <div className={clsx("flex", classes.destinationDesc)}>
        <Heading size={2}>{name}</Heading>
        <p className={clsx("textAccent", classes.description)}>{description}</p>
        <div className={classes.break} />
        <div className={clsx("flex", classes.additionalInfo)}>
          {additionalInfoContents}
        </div>
      </div>
    );

  return (
    <>
      <div>
        <img
          src={require("../../assets/destination/image-" +
            name.toLowerCase() +
            ".png")}
          alt="planet"
          className={classes.imgDiv}
        />
      </div>
      {bodyContents}
    </>
  );
};

export default Planet;
