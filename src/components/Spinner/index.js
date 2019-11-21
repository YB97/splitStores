import React from "react";
import withStore from "../../hocs/withStore";
import "./spinner.scss";

const Spinner = ({ stores, children, text = false }) => {
  if (stores.loading) {
    return text ? (
      "Loading..."
    ) : (
      <div className="spinner">
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
