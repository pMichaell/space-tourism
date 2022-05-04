import clsx from "clsx";
import { CrewMember } from "../../interfaces";
import { Fragment } from "react";
import { motion } from "framer-motion";
import classes from "./CrewPage.module.css";
import { CaretLeft, CaretRight } from "phosphor-react";
import ImgContainer from "./crewMember/ImgContainer";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MemberInfo from "./crewMember/MemberInfo";
import useSlider from "../../ui/contentSlider/useSlider";
import ContentSlider from "../../ui/contentSlider/ContentSlider";
import MotionContainer from "../../ui/motionContainer/MotionContainer";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

const data = require("../../data.json");
const crew: CrewMember[] = data.crew;
const crewImages = [douglas, mark, victor, anousheh];


const CrewPage = () => {
  const { page, direction, currentIndex, paginate } = useSlider(crew);

  const { name, role, bio } = crew[currentIndex];

  const { width } = useWindowDimensions();

  const leftButtonClickHandler = () => paginate(-1);

  const rightButtonClickHandler = () => paginate(1);

  return (
    <MotionContainer className={clsx("fulfillParent", classes.crewPage)}>
      <section className={clsx(classes.upperSection, "flex")}>
        <h2 className={"numberedTitle"}>
          <span>02</span>Meet Your Crew
        </h2>
        <ul className={clsx("flex", classes.dotIndicators)}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CaretLeft
              onClick={leftButtonClickHandler}
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
              onClick={rightButtonClickHandler}
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
                  <ImgContainer currentIndex={currentIndex} images={crewImages} className={classes.imgDiv}/>
                  <MemberInfo name={name} role={role} bio={bio} />
                </Fragment>
              )}
              {width >= 560 && (
                <Fragment>
                  <MemberInfo name={name} role={role} bio={bio} />
                  <ImgContainer currentIndex={currentIndex} images={crewImages} className={classes.imgDiv}/>
                </Fragment>
              )}
            </ContentSlider>
          );
        })}
    </MotionContainer>
  );
};

export default CrewPage;
