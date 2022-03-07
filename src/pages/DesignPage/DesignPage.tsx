import "../../index.scss";
import classes from "./DesignPage.module.css";
import React from "react";
import ColorsSection from "./ColorsSection";
import logo from "../../assets/shared/logo.svg";
import TypographySection from "./TypographySection";
import InteractiveSection from "./InteractiveSection";
import clsx from "clsx";

const DesignPage = () => {
  return (
    <div className={clsx("container", "fulfillParent")}>
      <header className={clsx("flex", "header", "ffSansCond", classes.header)}>
        <img src={logo} alt="company logo" />
        <h1 className={classes.header}>Design System</h1>
      </header>
      <ColorsSection />
      <TypographySection />
      <InteractiveSection />
    </div>
  );
};

export default DesignPage;
