import clsx from "clsx";
import classes from "./SideMenu.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const SideMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const overlaysDiv = document.getElementById("overlays")!;

  const sideMenuDiv = (
    <div className={clsx(classes.sideMenu, menuOpen && classes.open)} />
  );

  return <Fragment>{ReactDOM.createPortal(sideMenuDiv, overlaysDiv)}</Fragment>;
};

export default SideMenu;
