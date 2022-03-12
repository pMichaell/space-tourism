import clsx from "clsx";
import { useEffect, useState } from "react";
import { Destination } from "../../interfaces";
import classes from "./DestinationPage.module.css";
import { useSwipeable } from "react-swipeable";

const data = require("../../data.json");
const destinations: Destination[] = data.destinations;

const DestinationPage = () => {
  const [planetInfo, setPlanetInfo] = useState<Destination>();
  const [currentIndex, setCurrentIndex] = useState<number>();

  const getPlanetInfo = (planetName: string) => {
    return destinations.filter((planet) => planet.name === planetName).shift();
  };

  const getCurrentIndex = (planetName: string) => {
    setCurrentIndex(
      destinations.findIndex((planet) => planet.name === planetName)
    );
  };

  useEffect(() => {
    const currentPlanet = localStorage.getItem("planet") ?? "Moon";
    console.log(currentPlanet);
    setPlanetInfo(getPlanetInfo(currentPlanet));
    getCurrentIndex(currentPlanet);
  }, [currentIndex]);

  const switchDestination = (right: boolean) => {
    let newIndex: number;
    if (right) {
      newIndex = currentIndex === 3 ? 0 : currentIndex! + 1;
    } else {
      newIndex = currentIndex === 0 ? 3 : currentIndex! - 1;
    }
    setCurrentIndex(newIndex);
    localStorage.setItem("planet", destinations[newIndex].name);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => switchDestination(true),
    onSwipedLeft: () => switchDestination(false),
  });

  return (
    <div
      {...handlers}
      className={clsx(
        "fulfillParent",
        "flex",
        classes.destinationPage,
        "container"
      )}
    >
      <h2 className={clsx("numberedTitle", classes.title)}>
        <span>01</span>Pick your destination
      </h2>
      <div>
        <img alt="planet" className={classes[planetInfo?.name!]} />
      </div>
      <ul
        className={clsx(
          "flex",
          classes.planetList,
          "uppercase",
          "textAccent",
          "ffSansCond",
          "letterSpacing3"
        )}
      >
        <li>
          <button>Moon</button>
        </li>
        <li>
          <button>Mars</button>
        </li>
        <li>
          <button>Europa</button>
        </li>
        <li>
          <button>Titan</button>
        </li>
      </ul>
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
    </div>
  );
};

export default DestinationPage;
