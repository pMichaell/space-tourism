import React from "react";
import {NavigationProps} from "../Header";
import useNavigationActions from "../../../../hooks/useNavigationActions";

const NavList = ({className}: { className: string }) => {
    const {
        homeClickHandler,
        destinationClickHandler,
        crewClickHandler,
        technologyClickHandler,
        defineClassName
    } = useNavigationActions();

    return (
        <ul className={className}>
            <li onClick={homeClickHandler} className={defineClassName?.("/")}>
                <div>
                    <span aria-hidden="true">00</span>
                    Home
                </div>
            </li>
            <li
                onClick={destinationClickHandler}
                className={defineClassName?.("destination")}
            >
                <div>
                    <span aria-hidden="true">01</span>
                    Destinations
                </div>
            </li>
            <li onClick={crewClickHandler} className={defineClassName?.("crew")}>
                <div>
                    <span aria-hidden="true">02</span>
                    Crew
                </div>
            </li>
            <li
                onClick={technologyClickHandler}
                className={defineClassName?.("technology")}
            >
                <div>
                    <span aria-hidden="true">03</span>
                    Technology
                </div>
            </li>
        </ul>
    );
};

export default NavList;
