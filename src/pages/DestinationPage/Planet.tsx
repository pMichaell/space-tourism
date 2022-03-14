import { motion } from "framer-motion";
import classes from "./DestinationPage.module.css";
import clsx from "clsx";
import { Destination } from "../../interfaces";

const Planet = (planetInfo: Destination) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "tween", duration: 0.1 }}
      className={clsx("flex", classes.planetDiv)}
    >
      <div>
        <img alt="planet" className={classes[planetInfo?.name!]} />
      </div>
      <h2 className={clsx("uppercase", "ffSerif", "fs800")}>
        {planetInfo?.name}
      </h2>
      <p className={clsx("textAccent", classes.description)}>
        {planetInfo?.description}
      </p>
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
    </motion.div>
  );
};

export default Planet;
