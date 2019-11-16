import React, { PureComponent } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import classes from "./experiment.module.scss";

class Experiment extends PureComponent {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        Exp Page
        <Footer />
      </>
    );
  }
}

export default Experiment;
