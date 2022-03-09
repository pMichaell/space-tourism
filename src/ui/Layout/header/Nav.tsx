import clsx from "clsx";
import classes from "./Header.module.css";
import { NavigationProps } from "./Header";
import React from "react";

const Nav = ({
  homeClickHandler,
  destinationClickHandler,
  technologyClickHandler,
  crewClickHandler,
  defineClassName,
}: NavigationProps) => {
  return (
    <ul
      className={clsx(
        "flex",
        "ffSansCond",
        "textWhite",
        "fs400",
        "letterSpacing3",
        "uppercase",
        classes.underlineIndicators,
        classes.navigation
      )}
    >
      <li onClick={homeClickHandler} className={defineClassName?.("/")}>
        <div>
          <span>00</span>
          Home
        </div>
      </li>
      <li
        onClick={destinationClickHandler}
        className={defineClassName?.("destination")}
      >
        <div>
          <span>01</span>
          Destinations
        </div>
      </li>
      <li onClick={crewClickHandler} className={defineClassName?.("crew")}>
        <div>
          <span>02</span>
          Crew
        </div>
      </li>
      <li
        onClick={technologyClickHandler}
        className={defineClassName?.("technology")}
      >
        <div>
          <span>03</span>
          Technology
        </div>
      </li>
    </ul>
  );
};

export default Nav;
