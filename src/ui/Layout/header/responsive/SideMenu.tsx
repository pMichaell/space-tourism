import clsx from "clsx";
import classes from "./SideMenu.module.css";
import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import MenuContext from "../../../../context/menuContext/MenuContext";
import { useSwipeable } from "react-swipeable";
import { NavigationProps } from "../Header";
import closeIcon from "../../../../assets/shared/icon-close.svg";

const SideMenu = ({
  homeClickHandler,
  destinationClickHandler,
  crewClickHandler,
  technologyClickHandler,
}: NavigationProps) => {
  const menuContext = useContext(MenuContext);
  const { open, changeSideMenuState } = menuContext;
  const overlaysDiv = document.getElementById("overlays")!;

  const handlers = useSwipeable({
    onSwipedRight: () => changeSideMenuState?.(),
  });

  const closeMenuButtonHandler = () => {
    changeSideMenuState?.();
  };

  const sideMenuDiv = (
    <div
      {...handlers}
      className={clsx(
        classes.sideMenu,
        open && classes.open,
        "flex",
        "ffSansCond",
        "textWhite",
        "fs500"
      )}
    >
      <div className={classes.sideMenuHeader}>
        <span className="srOnly">Close side menu</span>
        <button onClick={closeMenuButtonHandler}>
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
      <ul className={clsx("flex", classes.list, "letterSpacing3", "uppercase")}>
        <li onClick={homeClickHandler} className={""}>
          <div>
            <span>00</span>
            Home
          </div>
        </li>
        <li onClick={destinationClickHandler} className={""}>
          <div>
            <span>01</span>
            Destinations
          </div>
        </li>
        <li onClick={crewClickHandler} className={""}>
          <div>
            <span>02</span>
            Crew
          </div>
        </li>
        <li onClick={technologyClickHandler} className={""}>
          <div>
            <span>03</span>
            Technology
          </div>
        </li>
      </ul>
      <div className={classes.div} />
    </div>
  );

  return <Fragment>{ReactDOM.createPortal(sideMenuDiv, overlaysDiv)}</Fragment>;
};

export default SideMenu;
