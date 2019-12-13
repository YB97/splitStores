import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Card from "./components/Card";
import Footer from "../../components/Footer";
import withStore from "../../hocs/withStore";

import classes from "./newapp.module.scss";

const Apps = props => {
  return (
    <div className={classes.newapp}>
      <div className="header">
        <Header />
      </div>
      <Container>
        <div className={classes['content-wrapper']}>
          <div className={classes.title}>
            <div className={classes["title-text"]}>
              <Title title="Add new app" />
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes["content-title-wrap"]}>
              <h3 className={classes["content-title"]}>
                Is your app already availiable on the AppStore or Google Play?
              </h3>
            </div>
            <div className="cards-wrapper">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={3}
              >
                <Grid item xs={12} sm={6} lg={5}>
                  <Card />
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                  <Card
                    withBtn={true}
                    title="Not yet"
                    urlImg={"../../../static/images/newapp/add-circle.svg"}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
      {!props.stores.loading && (
        <div className={classes.footer}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default withStore(Apps);
