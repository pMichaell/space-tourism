import { createContext } from "react";

type menuContext = {
  open: boolean;
  changeSideMenuState?: () => void;
};

const defaultValue: menuContext = {
  open: false,
};

const Context = createContext(defaultValue);

export default Context;
