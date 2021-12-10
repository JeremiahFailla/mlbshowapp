import React, { useState, useEffect } from "react";
import classes from "./ErrorMessageBar.module.css";
import { useSelector, useDispatch } from "react-redux";

const ErrorMessageBar = () => {
  const [showError, setShowError] = useState(false);
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

  const showErrorMessage = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      dispatch({ type: "errorMessage", message: "" });
    }, 5000);
  };

  useEffect(() => {
    showErrorMessage();
  }, [errorMessage]);

  return (
    showError &&
    errorMessage.length > 0 && (
      <div className={classes.errorBar}>
        <p className={classes.errorMsg}>{errorMessage}</p>
      </div>
    )
  );
};

export default ErrorMessageBar;
