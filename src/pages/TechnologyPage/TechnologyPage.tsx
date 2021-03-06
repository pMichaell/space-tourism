import classes from "./TechnologyPage.module.css";
import clsx from "clsx";
import useSlider from "../../ui/contentSlider/useSlider";
import { Technology } from "../../interfaces";
import ContentSlider from "../../ui/contentSlider/ContentSlider";
import TechnologyImg from "./technology/TechnologyImg";
import TechnologyInfo from "./technology/TechnologyInfo";
import MotionContainer from "../../ui/motionContainer/MotionContainer";


const data = require("../../data.json");
const technologies: Technology[] = data.technology;

const TechnologyPage = () => {
  const { page, currentIndex, direction, paginate } = useSlider(technologies);

  const { name, description } = technologies[currentIndex];

  const firstListItemClickHandler = () => {
    currentIndex === 1 && paginate(-1)
    currentIndex === 2 && paginate(1);
  };

  const secondListItemClickHandler = () => {
    currentIndex === 0 && paginate(1)
    currentIndex === 2 && paginate(-1);
  }

  const thirdListItemClickHandler = () => {
    currentIndex === 0 && paginate(-1)
    currentIndex === 1 && paginate(1);
  }

  return (
    <MotionContainer
      className={clsx("fulfillParent", "flex", classes.technologyPage)}
    >
      <h2 className={clsx("numberedTitle", classes.heading)}>
        <span>03</span>Space Launch 101
      </h2>
      <section
        className={clsx("flex", "fulfillParent", classes.contentSection)}
      >
        {technologies
          .filter((_, index) => index === currentIndex)
          .map(() => {
            return (
              <ContentSlider
                sliderMovement={{ page, direction, paginate }}
                key={page}
                className={clsx(classes.imgSection)}
              >
                <TechnologyImg currentIndex={currentIndex} />
              </ContentSlider>
            );
          })}
        <ul className={clsx(classes.indicatorsList, "ffSerif")}>
          <li
            className={clsx(currentIndex === 0 && classes.active)}
            onClick={firstListItemClickHandler}
          >
            1
          </li>
          <li
            className={clsx(currentIndex === 1 && classes.active)}
            onClick={secondListItemClickHandler}
          >
            2
          </li>
          <li
            className={clsx(currentIndex === 2 && classes.active)}
            onClick={thirdListItemClickHandler}
          >
            3
          </li>
        </ul>
        {technologies
          .filter((_, index) => index === currentIndex)
          .map(() => {
            return (
              <ContentSlider
                sliderMovement={{ page, direction, paginate }}
                key={page}
                className={clsx("flex", classes.infoSection)}
              >
                <TechnologyInfo name={name} description={description} />
              </ContentSlider>
            );
          })}
      </section>
    </MotionContainer>
  );
};

export default TechnologyPage;
