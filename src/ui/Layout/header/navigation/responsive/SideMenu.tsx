import clsx from "clsx";
import classes from "./SideMenu.module.css";
import headerClasses from "../../Header.module.css";
import React, {Fragment, useContext} from "react";
import ReactDOM from "react-dom";
import MenuContext from "../../../../../context/menuContext/MenuContext";
import {useSwipeable} from "react-swipeable";
import closeIcon from "../../../../../assets/shared/icon-close.svg";
import NavList from "../NavList";
import {motion} from "framer-motion";

const SideMenu = () => {
    const menuContext = useContext(MenuContext);
    const {open, changeSideMenuState} = menuContext;
    const overlaysDiv = document.getElementById("overlays")!;

    const handlers = useSwipeable({
        onSwipedRight: () => changeSideMenuState?.(),
    });

    const closeMenuButtonHandler = () => {
        changeSideMenuState?.();
    };


    const variants = {
        open: {opacity: 1, x: 0},
        closed: {opacity: 0, x: "100%"},
    }

    const sideMenuDiv = (
        <motion.aside
            animate={open ? "open" : "closed"}
            initial={false}
            variants={variants}
            transition={{duration: 0.35}}
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
                    <img src={closeIcon} alt="close icon"/>
                </button>
            </div>
            <NavList
                className={clsx(
                    "flex",
                    classes.list,
                    "letterSpacing3",
                    "uppercase",
                    headerClasses.underlineIndicators
                )}
            />
            <div className={classes.div}/>
        </motion.aside>
    );

    return <Fragment>{ReactDOM.createPortal(sideMenuDiv, overlaysDiv)}</Fragment>;
};

export default SideMenu;
