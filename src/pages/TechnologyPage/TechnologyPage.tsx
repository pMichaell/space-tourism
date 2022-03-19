import { Technology } from "../../interfaces";
import classes from "./TechnologyPage.module.css";
import clsx from "clsx";
import useSlider from "../../ui/contentSlider/useSlider";

const data = require("../../data.json");
const technologies: Technology[] = data.technology;

const TechnologyPage = () => {
  const { page, currentIndex, direction, paginate } = useSlider(technologies);

  return (
    <div className={clsx("fulfillParent", "flex", classes.technologyPage)}>
      <h2 className={"numberedTitle"}>
        <span>03</span>Space Launch 101
      </h2>
      <section></section>
    </div>
  );
};

export default TechnologyPage;
