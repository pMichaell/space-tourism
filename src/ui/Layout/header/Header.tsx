import clsx from "clsx";
import logo from "../../../assets/shared/logo.svg";
import classes from "./Header.module.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Responsive from "./navigation/responsive/Responsive";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import NavList from "./navigation/NavList";

export type NavigationProps = {
  homeClickHandler: () => void;
  destinationClickHandler: () => void;
  crewClickHandler: () => void;
  technologyClickHandler: () => void;
  defineClassName?: (locName: string) => string;
  className?: string;
};

const Header = () => {
  const [navState, navStateSet] = useState<string | null>(null);
  const windowDimensions = useWindowDimensions();
  const location = useLocation();
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
  };

  const destinationClickHandler = () => {
    navigate("/destination");
  };

  const crewClickHandler = () => {
    navigate("/crew");
  };

  const technologyClickHandler = () => {
    navigate("/technology");
  };

  const defineClassName = (navElement: string) => {
    return clsx(navState === navElement ? classes.active : "");
  };

  useEffect(() => {
    const locationName = location.pathname.split("/")[1];
    navStateSet(locationName ? locationName : "/");
  }, [location]);

  const props: NavigationProps = {
    homeClickHandler,
    destinationClickHandler,
    crewClickHandler,
    technologyClickHandler,
    defineClassName,
  };

  const navigation =
    windowDimensions.width > 560 ? (
      <NavList
        {...props}
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
      />
    ) : (
      <Responsive {...props} />
    );

  return (
    <div className={clsx("flex", classes.header)}>
      <div className={classes.logo}>
        <img src={logo} alt="company logo" />
      </div>
      {navigation}
    </div>
  );
};

export default Header;
