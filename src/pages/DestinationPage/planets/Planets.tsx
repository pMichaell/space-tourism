import { Destination } from "../../../interfaces";
import { useEffect, useState } from "react";
import classes from "./Planets.module.css";
import clsx from "clsx";

const data = require("../../../data.json");
const destinations: Destination[] = data.destinations;

const Planets = () => {
  const [currentPlanet, setCurrentPlanet] = useState<string | null>();
  const [planetInfo, setPlanetInfo] = useState<Destination>();

  const getPlanetInfo = (planetName: string) => {
    return destinations.filter((planet) => planet.name === planetName).shift();
  };

  useEffect(() => {
    const currentPlanet = localStorage.getItem("planets") ?? "Moon";
    setCurrentPlanet(currentPlanet);
    setPlanetInfo(getPlanetInfo(currentPlanet));
  }, []);

  return (
    <div className={clsx(classes.div, "fulfillParent")}>
      {currentPlanet}
      {planetInfo?.description}
    </div>
  );
};

export default Planets;
