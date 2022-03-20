import React, { ReactNode, useContext, useEffect, useState } from "react";
import "../../index.css";
import classes from "./Layout.module.css";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import MenuContext from "../../context/menuContext/MenuContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const [backgroundState, setBackgroundState] = useState<null | string>();
  const location = useLocation();
  const { open, changeSideMenuState } = useContext(MenuContext);

  useEffect(() => {
    let locationName = location.pathname.split("/")[1];
    let backgroundClass = locationName
      ? classes[locationName]
      : classes["home"];
    setBackgroundState(backgroundClass);
  }, [location]);

  const mainClickHandler = () => {
    open && changeSideMenuState?.();
  };

  return (
    <div className={clsx(classes.layout, "grid", backgroundState)}>
      <a href="#main" className={clsx("skipToContent")}>
        Skip to content
      </a>
      <Header />
      <main id="main" className="fulfillParent" onClick={mainClickHandler}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
