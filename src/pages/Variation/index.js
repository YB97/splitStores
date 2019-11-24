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
import Overview from "./components/Overview";
import Ratings from "./components/Ratings";

import classes from "./variation.module.scss";

class Variation extends PureComponent {
  stores = this.props.stores;

  state = {
    tags: ["Social", "Blog", "Game", "Some"],
    screenshots: ["../../../../../static/images/variations/1.jpg"],
    reviews: [10, 20, 40, 30, 100],
    developer: "My app developer"
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
            <div className={classes.overview}>
              <Overview screenshots={this.state.screenshots} />
            </div>
            <div className={classes.ratings}>
              <Ratings reviews={this.state.reviews} />
            </div>
            <div className={classes.developer}>
              <div className={classes["developer-title"]}>
                <span className={classes["developer-title-text"]}>
                  Developer
                </span>
              </div>
              <h4 className={classes["developer-name"]}>
                {this.state.developer}
              </h4>
            </div>
            <Footer />
          </Container>
        </Spinner>
      </div>
    );
  }
}

export default withRouter(witrhStores(Variation));
