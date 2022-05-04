import clsx from "clsx";
import classes from "../ui/Layout/header/Header.module.css";
import {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import MenuContext from "../context/menuContext/MenuContext";

const useNavigationActions = () => {
    const [navState, navStateSet] = useState<string | null>(null);
    const {open, changeSideMenuState} = useContext(MenuContext);

    const location = useLocation();
    const navigate = useNavigate();

    const homeClickHandler = () => {
        navigate("/");
        open && changeSideMenuState?.();
    };

    const destinationClickHandler = () => {
        navigate("/destination");
        open && changeSideMenuState?.();
    };

    const crewClickHandler = () => {
        navigate("/crew");
        open && changeSideMenuState?.();
    };

    const technologyClickHandler = () => {
        navigate("/technology");
        open && changeSideMenuState?.();
    };

    const defineClassName = (navElement: string) => {
        return clsx(navState === navElement ? classes.active : "");
    };

    useEffect(() => {
        const locationName = location.pathname.split("/")[1];
        navStateSet(locationName ? locationName : "/");
    }, [location]);

    return {homeClickHandler, destinationClickHandler, crewClickHandler, technologyClickHandler, defineClassName}
}

export default useNavigationActions;