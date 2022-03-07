import "../../index.scss";
import classes from "./InteractiveSection.module.css";
import clsx from "clsx";

const InteractiveSection = () => {
  return (
    <section className={clsx("flow", classes.section)}>
      <h2 className={"numberedTitle"}>
        <span>03</span> Interactive elements
      </h2>

      <div className={clsx(classes.navigationDiv, "flex")}>
        <ul
          className={clsx(
            classes.primaryNavigation,
            "flex",
            classes.underlineIndicators
          )}
        >
          <li className={classes.active}>
            <a
              href="#"
              className={clsx("uppercase", "textWhite", "letterSpacing2")}
            >
              <span>00</span>Active
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx("uppercase", "textWhite", "letterSpacing2")}
            >
              <span>01</span>Hovered
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx("uppercase", "textWhite", "letterSpacing2")}
            >
              <span>02</span>Idle
            </a>
          </li>
        </ul>
      </div>

      <div className={clsx("flex", classes.elementsDiv, "flow")}>
        <div>
          <a
            href="#"
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
          </a>
        </div>
        <div className={clsx("flow", classes.indicatorsList)}>
          <div
            className={clsx(
              classes.underlineIndicators,
              "ffSansCond",
              "letterSpacing3",
              "uppercase",
              "flex",
              "textAccent",
              classes.tabList
            )}
          >
            <button aria-selected="true">Moon</button>
            <button aria-selected="false">Mars</button>
            <button aria-selected="false">Europa</button>
          </div>

          <div className={clsx("flex", classes.dotIndicators)}>
            <button aria-selected="true" className={classes.active}>
              <span className="srOnly">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="srOnly">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="srOnly">Slide title</span>
            </button>
          </div>
          <div className={clsx("flex", classes.sliderStates)}>
            <button>
              <span></span>1
            </button>
            <button>
              <span></span>2
            </button>
            <button>
              <span></span>3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
