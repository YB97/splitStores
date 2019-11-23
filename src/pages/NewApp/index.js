import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Card from "./components/Card";
import Footer from "../../components/Footer";

import classes from "./newapp.module.scss";

export default function Apps() {
  return (
    <div className={classes.newapp}>
      <div className="header">
        <Header />
      </div>
      <Container>
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
                <Card withBtn={true} />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
