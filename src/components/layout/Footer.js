import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <a
        className={classes.content}
        href="https://github.com/JeremiahFailla"
        target="_blank"
      >
        &copy; Jeremiah Failla 2021
      </a>
    </div>
  );
};

export default Footer;
