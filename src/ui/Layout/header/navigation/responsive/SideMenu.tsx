import clsx from "clsx";
import classes from "./SideMenu.module.css";
import headerClasses from "../../Header.module.css";
import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import MenuContext from "../../../../../context/menuContext/MenuContext";
import { useSwipeable } from "react-swipeable";
import { NavigationProps } from "../../Header";
import closeIcon from "../../../../../assets/shared/icon-close.svg";
import NavList from "../NavList";

const SideMenu = (props: NavigationProps) => {
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
      <NavList
        {...props}
        className={clsx(
          "flex",
          classes.list,
          "letterSpacing3",
          "uppercase",
          headerClasses.underlineIndicators
        )}
      />
      <div className={classes.div} />
    </div>
  );

  return <Fragment>{ReactDOM.createPortal(sideMenuDiv, overlaysDiv)}</Fragment>;
};

export default SideMenu;
