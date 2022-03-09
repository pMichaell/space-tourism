import { Fragment, ReactNode } from "react";
import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClick }: { onClick?: () => void }) => {
  const backdrop = <div className={classes.backdrop} onClick={onClick} />;
  const overlaysDiv = document.getElementById("overlays")!;

  return <Fragment>{ReactDOM.createPortal(backdrop, overlaysDiv)}</Fragment>;
};

type modalProps = {
  modalStyle: string;
  children: ReactNode;
};

const ModalOverlay = ({ modalStyle, children }: modalProps) => {
  return <Fragment></Fragment>;
};

export default Backdrop;
