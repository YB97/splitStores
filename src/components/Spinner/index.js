import React from "react";
import withStore from "../../hocs/withStore";
import classes from "./spinner.module.scss";
import "./spinner.scss";

const Spinner = ({
  stores,
  children,
  text = false,
  style = {},
  page = false
}) => {
  if (stores.loading) {
    return text ? (
      "Loading..."
    ) : (
      <div
        className={`${classes.spinner} ${page && classes.page}`}
        style={style}
      >
        <div className="lds-css">
          <div className="lds-double-ring">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default withStore(Spinner);
