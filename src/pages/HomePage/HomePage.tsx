import "../../index.scss";
import classes from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  const exploreButtonHandler = () => {};

  return (
    <div className={clsx("gridContainer", "gridContainerHome")}>
      <div className={clsx(classes.gridDiv)}>
        <h1
          className={clsx(
            "ffSansCond",
            "textAccent",
            "uppercase",
            "fs500",
            "letterSpacing1",
            classes.header
          )}
        >
          So, you want to travel to
          <span className={clsx("fs900", "textWhite", "ffSerif", "dBlock")}>
            Space
          </span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={classes.gridDiv}>
        <button
          onClick={exploreButtonHandler}
          className={clsx(
            "largeButton",
            "uppercase",
            "ffSerif",
            "fs600",
            "textDark",
            "bgWhite"
          )}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default HomePage;
