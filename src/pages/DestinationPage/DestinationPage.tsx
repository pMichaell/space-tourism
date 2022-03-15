import clsx from "clsx";
import { useState } from "react";
import { Destination } from "../../interfaces";
import classes from "./DestinationPage.module.css";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import Planet from "./Planet";
import { CaretLeft, CaretRight } from "phosphor-react";

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
  const [[page, direction], setPage] = useState([0, 0]);

  const planetIndex = wrap(0, destinations.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

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
            destinations[planetIndex].name === "Moon" && classes.active
          )}
        >
          <button>Moon</button>
        </li>
        <li
          className={clsx(
            destinations[planetIndex].name === "Mars" && classes.active
          )}
        >
          <button>Mars</button>
        </li>
        <li
          className={clsx(
            destinations[planetIndex].name === "Europa" && classes.active
          )}
        >
          <button>Europa</button>
        </li>
        <li
          className={clsx(
            destinations[planetIndex].name === "Titan" && classes.active
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
      <AnimatePresence exitBeforeEnter>
        {destinations
          .filter((_, index) => index === planetIndex)
          .map(() => {
            return (
              <motion.div
                className={clsx("flex", classes.planetDiv)}
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "tween",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.2,
                  },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Planet {...destinations[planetIndex]} />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default DestinationPage;
