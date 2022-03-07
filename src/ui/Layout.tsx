import React, { ReactNode, useState } from "react";
import "../index.scss";
import classes from "./Layout.module.css";
import clsx from "clsx";
import logo from "../assets/shared/logo.svg";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const [navState, navStateSet] = useState("home");
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navStateSet("home");
    navigate("/");
  };

  const destinationClickHandler = () => {
    navStateSet("destination");
    navigate("/destination");
  };

  const crewClickHandler = () => {
    navStateSet("crew");
    navigate("/crew");
  };

  const technologyClickHandler = () => {
    navStateSet("technology");
    navigate("/technology");
  };

  const defineClassName = (navElement: string) => {
    return clsx(navState === navElement ? classes.active : "");
  };

  return (
    <div className={classes.layout}>
      <div className={clsx(classes.header, "flex")}>
        <div className={classes.logo}>
          <img src={logo} alt="company logo" />
        </div>
        <div className={classes.line} />
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
          <li onClick={homeClickHandler} className={defineClassName("home")}>
            <div>
              <span>00</span>
              Home
            </div>
          </li>
          <li
            onClick={destinationClickHandler}
            className={defineClassName("destination")}
          >
            <div>
              <span>01</span>
              Destinations
            </div>
          </li>
          <li onClick={crewClickHandler} className={defineClassName("crew")}>
            <div>
              <span>02</span>
              Crew
            </div>
          </li>
          <li
            onClick={technologyClickHandler}
            className={defineClassName("technology")}
          >
            <div>
              <span>03</span>
              Technology
            </div>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Layout;
