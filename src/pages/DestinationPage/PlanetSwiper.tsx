import Planet from "./Planet";
import { AnimatePresence } from "framer-motion";
import { Destination } from "../../interfaces";
import { wrap } from "popmotion";
import { useState } from "react";

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

const PlanetSwiper = (currentIndex: number) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, destinations.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {destinations
        .filter((_, index) => index === currentIndex)
        .map((dest) => (
          <Planet key={currentIndex} {...dest} />
        ))}
    </AnimatePresence>
  );
};

export default PlanetSwiper;
