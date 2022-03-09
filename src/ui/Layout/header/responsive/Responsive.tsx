import { useContext, useEffect, useState } from "react";
import MenuContext from "../../../../context/menuContext/MenuContext";
import { NavigationProps } from "../Header";
import hamburgerIcon from "../../../../assets/shared/icon-hamburger.svg";
import SideMenu from "./SideMenu";

const Responsive = ({
  homeClickHandler,
  destinationClickHandler,
  crewClickHandler,
  technologyClickHandler,
}: NavigationProps) => {
  const menuContext = useContext(MenuContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlaysDiv = document.getElementById("overlays");

  const hamburgerClickHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <div>
      <button onClick={hamburgerClickHandler}>
        <span className="srOnly">Menu</span>
        <div>
          <img src={hamburgerIcon} alt="menu icon" />
        </div>
      </button>
      <SideMenu menuOpen={menuOpen} />
    </div>
  );
};

export default Responsive;
