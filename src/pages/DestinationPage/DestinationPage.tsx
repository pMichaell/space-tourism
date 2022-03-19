import clsx from "clsx";
import { Destination } from "../../interfaces";
import classes from "./DestinationPage.module.css";
import { motion } from "framer-motion";
import Planet from "./Planet";
import { CaretLeft, CaretRight } from "phosphor-react";
import useSlider from "../../ui/contentSlider/useSlider";
import ContentSlider from "../../ui/contentSlider/ContentSlider";

const data = require("../../data.json");
const destinations: Destination[] = data.destinations;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const DestinationPage = () => {
  const { page, direction, currentIndex, paginate } = useSlider(destinations);

  const leftButtonClickHandler = () => paginate(-1);

  const rightButtonClickHandler = () => paginate(1);

  return (
    <div
      className={clsx(
        "fulfillParent",
        "flex",
        classes.destinationPage,
        "container"
      )}
    >
      <h2 className={clsx("numberedTitle")}>
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
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CaretLeft
            onClick={leftButtonClickHandler}
            color="white"
            size="1.5em"
          />
        </motion.li>
        <li
          className={clsx(
            destinations[currentIndex].name === "Moon" && classes.active
          )}
        >
          <button>Moon</button>
        </li>
        <li
          className={clsx(
            destinations[currentIndex].name === "Mars" && classes.active
          )}
        >
          <button>Mars</button>
        </li>
        <li
          className={clsx(
            destinations[currentIndex].name === "Europa" && classes.active
          )}
        >
          <button>Europa</button>
        </li>
        <li
          className={clsx(
            destinations[currentIndex].name === "Titan" && classes.active
          )}
        >
          <button>Titan</button>
        </li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CaretRight
            onClick={rightButtonClickHandler}
            color="white"
            size="1.5em"
          />
        </motion.li>
      </ul>
      {destinations
        .filter((_, index) => index === currentIndex)
        .map(() => {
          return (
            <ContentSlider
              sliderMovement={{ page, direction, paginate }}
              className={clsx("flex", classes.planetSection)}
            >
              <Planet {...destinations[currentIndex]} />
            </ContentSlider>
          );
        })}
    </div>
  );
};

export default DestinationPage;
