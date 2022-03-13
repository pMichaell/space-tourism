import destinationClasses from "./DestinationPage.module.css";
import clsx from "clsx";
import { Destination } from "../../interfaces";

const Planet = (planetInfo: Destination) => {
  return (
    <>
      <div>
        <img alt="planet" className={destinationClasses[planetInfo?.name!]} />
      </div>
      <h2 className={clsx("uppercase", "ffSerif", "fs800")}>
        {planetInfo?.name}
      </h2>
      <p className={clsx("textAccent", destinationClasses.description)}>
        {planetInfo?.description}
      </p>
      <div className={destinationClasses.break} />
      <div className={clsx("flow", "flex", destinationClasses.additionalInfo)}>
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
        <p className={clsx("uppercase", "fs500", "ffSerif")}>
          {planetInfo?.distance}
        </p>
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
        <p className={clsx("uppercase", "fs500", "ffSerif")}>
          {planetInfo?.travel}
        </p>
      </div>
    </>
  );
};

export default Planet;
