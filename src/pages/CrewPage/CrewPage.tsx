import clsx from "clsx";
import { CrewMember } from "../../interfaces";
import { Fragment } from "react";
import { motion } from "framer-motion";
import classes from "./CrewPage.module.css";
import { CaretLeft, CaretRight } from "phosphor-react";
import MemberImg from "./crewMember/MemberImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MemberInfo from "./crewMember/MemberInfo";
import useSlider from "../../ui/contentSlider/useSlider";
import ContentSlider from "../../ui/contentSlider/ContentSlider";

const data = require("../../data.json");
const crew: CrewMember[] = data.crew;

const CrewPage = () => {
  const { page, direction, currentIndex, paginate } = useSlider(crew);

  const { name, role, bio } = crew[currentIndex];

  const { width } = useWindowDimensions();

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
          <li className={clsx(currentIndex === 0 && classes.active)} />
          <li className={clsx(currentIndex === 1 && classes.active)} />
          <li className={clsx(currentIndex === 2 && classes.active)} />
          <li className={clsx(currentIndex === 3 && classes.active)} />
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
        .filter((_, index) => index === currentIndex)
        .map(() => {
          return (
            <ContentSlider
              sliderMovement={{ page, direction, paginate }}
              className={clsx("flex", classes.crewMemberSection)}
              key={page}
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
            </ContentSlider>
          );
        })}
    </div>
  );
};

export default CrewPage;
