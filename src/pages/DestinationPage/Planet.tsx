import classes from "./DestinationPage.module.css";
import clsx from "clsx";
import { Destination } from "../../interfaces";

const Planet = ({ name, description, distance, travel }: Destination) => {
  return (
    <>
      <div>
        <img alt="planet" className={classes[name!]} />
      </div>
      <h2 className={clsx("uppercase", "ffSerif", "fs800")}>{name}</h2>
      <p className={clsx("textAccent", classes.description)}>{description}</p>
      <div className={classes.break} />
      <div className={clsx("flow", "flex", classes.additionalInfo)}>
        <p
          className={clsx(
            "uppercase",
            "ffSerif",
            "fs200",
            "letterSpacing2",
            "textAccent"
          )}
        >
          Avg. Distance
        </p>
        <p className={clsx("uppercase", "fs500", "ffSerif")}>{distance}</p>
        <p
          className={clsx(
            "uppercase",
            "ffSerif",
            "fs200",
            "letterSpacing2",
            "textAccent"
          )}
        >
          Est. Travel Time
        </p>
        <p className={clsx("uppercase", "fs500", "ffSerif")}>{travel}</p>
      </div>
    </>
  );
};

export default Planet;
