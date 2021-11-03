import React, { Fragment } from "react";
import classes from "./PlayerStatsModal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };
  return <div className={classes.backdrop} onClick={closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const PlayerStatsModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default PlayerStatsModal;
