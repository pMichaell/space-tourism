import clsx from "clsx";
import { useEffect, useState } from "react";
import { Destination } from "../../interfaces";
import classes from "./DestinationPage.module.css";
import { useSwipeable } from "react-swipeable";
import Planet from "./Planet";

const data = require("../../data.json");
const destinations: Destination[] = data.destinations;

const DestinationPage = () => {
  const [planetInfo, setPlanetInfo] = useState<Destination>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const currentPlanet = localStorage.getItem("planet") ?? "Moon";
    console.log(currentPlanet);
    setPlanetInfo(getPlanetInfo(currentPlanet));
    getCurrentIndex(currentPlanet);
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedRight: () => switchDestination(false),
    onSwipedLeft: () => switchDestination(true),
  });

  const getPlanetInfo = (planetName: string) => {
    return destinations.filter((planet) => planet.name === planetName).shift();
  };

  const getCurrentIndex = (planetName: string) => {
    setCurrentIndex(
      destinations.findIndex((planet) => planet.name === planetName)
    );
  };

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
      <h1 className={clsx("numberedTitle", classes.title)}>
        <span>01</span>Pick your destination
      </h1>
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
        <li className={clsx(planetInfo?.name === "Moon" && classes.active)}>
          <button>Moon</button>
        </li>
        <li className={clsx(planetInfo?.name === "Mars" && classes.active)}>
          <button>Mars</button>
        </li>
        <li className={clsx(planetInfo?.name === "Europa" && classes.active)}>
          <button>Europa</button>
        </li>
        <li className={clsx(planetInfo?.name === "Titan" && classes.active)}>
          <button>Titan</button>
        </li>
      </ul>
      <Planet {...destinations[currentIndex]} />
    </div>
  );
};

export default DestinationPage;
