import classes from "./ColorsSection.module.css";
import "../../index.scss";
import React from "react";
import clsx from "clsx";

const ColorsSection = () => {
  return (
    <section>
      <h2 className={"numberedTitle"}>
        <span>01</span>COLORS
      </h2>
      <div className={classes.colorsContainer}>
        <div>
          <div className={clsx("bgDark", "textWhite", "firstColorDiv")}>
            #0B0D17
          </div>
          <p>
            <span className={"textAccent"}>RGB</span> 11, 13, 23
          </p>
          <p>
            <span className={"textAccent"}>HSL</span>230°, 35%, 7%
          </p>
        </div>
        <div>
          <div className={clsx("bgAccent", "textDark", "secondColorDiv")}>
            #0B0D17
          </div>
          <p>
            <span className={"textAccent"}>RGB</span> 11, 13, 23
          </p>
          <p>
            <span className={"textAccent"}>HSL</span> 230°, 35%, 7%
          </p>
        </div>
        <div>
          <div className={clsx("bgWhite", "textDark", "thirdColorDiv")}>
            #0B0D17
          </div>
          <p>
            <span className={"textAccent"}>RGB</span> 11, 13, 23
          </p>
          <p>
            <span className={"textAccent"}>HSL</span> 230°, 35%, 7%
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;
