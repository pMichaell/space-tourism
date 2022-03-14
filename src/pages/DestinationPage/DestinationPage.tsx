import clsx from "clsx";
import { useEffect, useState } from "react";
import { Destination } from "../../interfaces";
import classes from "./DestinationPage.module.css";
import { useSwipeable } from "react-swipeable";
import { wrap } from "popmotion";
import Planet from "./Planet";
import { AnimatePresence } from "framer-motion";

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

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, destinations.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
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
    onSwipedRight: () => switchDestination(false),
    onSwipedLeft: () => switchDestination(true),
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
      <AnimatePresence exitBeforeEnter>
        {destinations
          .filter((_, index) => index === currentIndex)
          .map((dest) => (
            <Planet key={currentIndex} {...dest} />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default DestinationPage;
