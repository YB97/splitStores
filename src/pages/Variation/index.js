import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import witrhStores from "../../hocs/withStore";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

import Tags from "./components/Tags";
import Info from "./components/Info";

import classes from "./variation.module.scss";

class Variation extends PureComponent {
  stores = this.props.stores;

  state = {
    tags: ["Social", "Blog", "Game", "Some"]
  };

  render() {
    return (
      <div className={classes.variation}>
        <div className="header">
          <Header />
        </div>
        <Spinner>
          <Container>
            <div className={classes.control}>
              <Button variant="outlined" color="#244bdd">
                Back
              </Button>
            </div>
            <div className={classes.tags}>
              <Tags tags={this.state.tags} />
            </div>
            <div className={classes.info}>
              <Info variationImgUrl="../../../static/images/apps/facebook.png" />
            </div>
            <Footer />
          </Container>
        </Spinner>
      </div>
    );
  }
}

export default withRouter(witrhStores(Variation));
