import React, { Fragment, useEffect } from "react";
import classes from "./PlayerStatsModal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

const ModalOverlay = (props) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };
  useEffect(() => {
    document.querySelector("body").classList.add(`${classes.noScroll}`);
    return () => {
      document.querySelector("body").classList.remove(`${classes.noScroll}`);
    };
  }, []);
  return (
    <div className={classes.modal} onClick={closeModal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const PlayerStatsModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default PlayerStatsModal;
