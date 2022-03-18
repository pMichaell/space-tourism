import clsx from "clsx";
import { CrewMember } from "../../interfaces";
import { Fragment, useState } from "react";
import { wrap } from "popmotion";
import { motion } from "framer-motion";
import classes from "./CrewPage.module.css";
import { CaretLeft, CaretRight } from "phosphor-react";
import MemberImg from "./crewMember/MemberImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MemberInfo from "./crewMember/MemberInfo";

const data = require("../../data.json");
const crew: CrewMember[] = data.crew;

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

const CrewPage = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const memberIndex = wrap(0, crew.length, page);

  const { name, role, bio } = crew[memberIndex];

  const { width } = useWindowDimensions();

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const leftButtonClickHandler = () => paginate(-1);

  const rightButtonClickHandler = () => paginate(1);

  return (
    <div className={clsx("fulfillParent", classes.crewPage)}>
      <section className={clsx(classes.upperSection, "flex")}>
        <h2 className={"numberedTitle"}>
          <span>02</span>Meet Your Crew
        </h2>
        <ul className={clsx("flex", classes.dotIndicators)}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CaretLeft
              onClick={rightButtonClickHandler}
              color="white"
              size="1.5em"
            />
          </motion.button>
          <li className={clsx(memberIndex === 0 && classes.active)} />
          <li className={clsx(memberIndex === 1 && classes.active)} />
          <li className={clsx(memberIndex === 2 && classes.active)} />
          <li className={clsx(memberIndex === 3 && classes.active)} />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CaretRight
              onClick={leftButtonClickHandler}
              color="white"
              size="1.5em"
            />
          </motion.button>
        </ul>
      </section>
      {crew
        .filter((_, index) => index === memberIndex)
        .map(() => {
          return (
            <motion.div
              className={clsx("flex", classes.crewMemberDiv)}
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
              {width < 560 && (
                <Fragment>
                  <MemberImg memberName={name} />
                  <MemberInfo name={name} role={role} bio={bio} />
                </Fragment>
              )}
              {width >= 560 && (
                <Fragment>
                  <MemberInfo name={name} role={role} bio={bio} />
                  <MemberImg memberName={name} />
                </Fragment>
              )}
            </motion.div>
          );
        })}
    </div>
  );
};

export default CrewPage;
