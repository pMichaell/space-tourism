import "../../index.css";
import classes from "./HomePage.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import MotionContainer from "../../ui/motionContainer/MotionContainer";

const HomePage = () => {
  const navigate = useNavigate();
  const exploreButtonHandler = () => {
    navigate("./destination");
  };

  return (
    <MotionContainer
      className={clsx("gridContainer", "gridContainerHome", "fulfillParent")}
    >
      <div className={"flow"}>
        <h1
          className={clsx(
            "ffSansCond",
            "textAccent",
            "uppercase",
            "fs500",
            "letterSpacing1"
          )}
        >
          So, you want to travel to
          <span className={clsx("fs900", "textWhite", "ffSerif", "dBlock")}>
            Space
          </span>
        </h1>
        <p
          className={clsx(
            "textAccent",
            "textAlignCenter",
            "fs450",
            classes.description
          )}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
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
    </MotionContainer>
  );
};

export default HomePage;
