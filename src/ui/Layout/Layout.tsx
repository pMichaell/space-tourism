import React, { ReactNode, useEffect, useState } from "react";
import "../../index.scss";
import classes from "./Layout.module.css";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Header from "./header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const [backgroundState, setBackgroundState] = useState<null | string>();
  const location = useLocation();

  useEffect(() => {
    let locationName = location.pathname.split("/")[1];
    let backgroundClass = locationName
      ? classes[locationName]
      : classes["home"];
    setBackgroundState(backgroundClass);
  }, [location]);

  return (
    <main className={clsx(classes.layout, "grid", backgroundState)}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
