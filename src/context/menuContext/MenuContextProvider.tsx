import { ReactNode, useState } from "react";
import MenuContext from "./MenuContext";

const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState(false);

  const changeSideMenuState = () => {
    setMenuState((prevState) => !prevState);
  };

  const contextValue = {
    open: menuState,
    changeSideMenuState,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
