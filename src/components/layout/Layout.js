import React from "react";
import MainNavigation from "./MainNavigation";
import ErrorMessageBar from "../errorMessage/ErrorMessageBar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <ErrorMessageBar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
