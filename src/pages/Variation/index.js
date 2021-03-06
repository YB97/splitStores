import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import withStores from "../../hocs/withStore";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

import Tags from "./components/Tags";
import Info from "./components/Info";
import Overview from "./components/Overview";
import Ratings from "./components/Ratings";

import { urlBuilder } from "../../routes";

import { URI_TO_EXPERIMENTS } from "../../constants";

import classes from "./variation.module.scss";

class Variation extends PureComponent {
  stores = this.props.stores;

  componentDidMount() {
    this.stores.setLoading(true);
    const { getVariationById, data } = this.stores.variations;
    const { id, expId, varId } = this.props.match.params;

    getVariationById(id, expId, varId).then(() => {
      this.stores.setLoading(false);
    });
  }

  backBtnHandler = () => {
    const { id, expId } = this.props.match.params;
    this.props.history.push(urlBuilder("experiment", { id, expId }));
  };

  render() {
    const { data } = this.stores.variations;

    return (
      <div className={classes.variation}>
        <div className="header">
          <Header />
        </div>
        <Spinner page>
          <Container>
            <div className={classes.wrapper}>
              <div className={classes.control}>
                <Button
                  variant="outlined"
                  color="#244bdd"
                  click={this.backBtnHandler}
                >
                  Back
                </Button>
              </div>
              <div className={classes.tags}>
                <Tags tags={data.tags || []} />
              </div>
              <div className={classes.info}>
                <Info
                  title={data.name}
                  downloadsCount={data.downloads_count}
                  rating={this.stores.variations.avgRating || 0}
                  variationImgUrl={data && data.icon}
                  ageRating={data.age}
                />
              </div>
              <div className={classes.overview}>
                <Overview
                  screenshots={data.screenshots}
                  descriptionPreview={data.description_preview}
                  descriptionText={data.description_text}
                />
              </div>
              <div className={classes.ratings}>
                <Ratings
                  reviews={data.reviews || [0]}
                  rating={this.stores.variations.avgRating || 0}
                  reviewsCount={this.stores.variations.reviewsCount || 0}
                />
              </div>
              <div className={classes.developer}>
                <div className={classes["developer-title"]}>
                  <span className={classes["developer-title-text"]}>
                    Developer
                  </span>
                </div>
                <h4 className={classes["developer-name"]}>{data.developer}</h4>
              </div>
            </div>
          </Container>
          {!this.props.stores.loading && (
            <div className={classes.footer}>
              <Footer />
            </div>
          )}
        </Spinner>
      </div>
    );
  }
}

export default withRouter(withStores(Variation));
