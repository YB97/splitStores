import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import CheckboxCards from "../../components/CheckboxCards";
import { useHistory } from "react-router-dom";
import classes from "./app.module.scss";

export default function() {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/newexperiment");
  };
  return (
    <div>
      <Header />
      <Container>
        <div className={classes.title}>
          <Title title="App details" />
          <Button click={clickHandler}>NEW EXPERIMENT</Button>
        </div>
        <div className={classes.card}>
          <Card onClickHandler={() => {}} />
        </div>
        <main className={classes.main}>
          <div className={classes.control}>
            <Input
              helpText="This name will only be displayed on the dashboard"
              title="App Name*"
              value="213213"
              disabled={true}
            />
          </div>
          <div className="content">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <div className={classes.control}>
                  <Input
                    title="Link in Store*"
                    value="213213"
                    disabled={true}
                  />
                </div>
                <div className={classes.control}>
                  <Input
                    title="Store Category*"
                    value="213213"
                    disabled={true}
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className={classes["checkbox-cards"]}>
                  <CheckboxCards store="app-store" disabled={true} />
                </div>
              </Grid>
            </Grid>
          </div>
        </main>
      </Container>
    </div>
  );
}
