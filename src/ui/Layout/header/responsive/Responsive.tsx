import { useContext } from "react";
import MenuContext from "../../../../context/menuContext/MenuContext";
import { NavigationProps } from "../Header";
import hamburgerIcon from "../../../../assets/shared/icon-hamburger.svg";
import SideMenu from "./SideMenu";

const Responsive = (props: NavigationProps) => {
  const menuContext = useContext(MenuContext);
  const { open, changeSideMenuState } = menuContext;

  const hamburgerClickHandler = () => {
    changeSideMenuState?.();
  };

  return (
    <div>
      {!open && (
        <button onClick={hamburgerClickHandler}>
          <span className="srOnly">Menu</span>
          <div>
            <img src={hamburgerIcon} alt="menu icon" />
          </div>
        </button>
      )}
      <SideMenu {...props} />
    </div>
  );
};

export default Responsive;
