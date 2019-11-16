import React, { PureComponent } from "react";
import { Container, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { toJS } from "mobx";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import CheckboxCards from "../../components/CheckboxCards";
import Footer from "../../components/Footer";
import { urlBuilder } from "../../routes";

import classes from "./app.module.scss";

@inject("stores")
@observer
class App extends PureComponent {
  st = this.props.stores.apps;

  state = {
    name: ""
  };

  componentDidMount() {
    const { getAppById } = this.st;
    const { id } = this.props.match.params;

    this.setState({ name: toJS(getAppById(id)).name });
  }

  clickHandler = () => {
    this.props.history.push("/newexperiment");
  };

  saveClickHandler = () => {
    const { setAppName } = this.st;
    const { id } = this.props.match.params;

    setAppName(id, this.state.name);
  };

  render() {
    const { getAppById } = this.st;
    const { history } = this.props;
    const { id } = this.props.match.params;
    const appData = getAppById(id);

    return (
      <div>
        <Header />
        <Container>
          <div className={classes.title}>
            <Title title="App details" />
            <Button click={this.clickHandler}>NEW EXPERIMENT</Button>
          </div>
          <div className={classes.card}>
            <Card
              onClickHandler={() => {}}
              onExperimentsClick={() =>
                history.push(urlBuilder("experiments", { id }))
              }
              title={appData.name}
              appsImgUrl={appData.icon}
              publishDate={moment(appData.creation_date).format("DD/MM/YYYY")}
              experimentsCount={appData.experiments_count}
              withExpHover
            />
          </div>
          <main className={classes.main}>
            <div className={classes.control}>
              <Input
                helpText="This name will only be displayed on the dashboard"
                title="App Name*"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="content">
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <div className={classes.control}>
                    <Input
                      title="Link in Store*"
                      value={appData.link_store}
                      disabled
                    />
                  </div>
                  <div className={classes.control}>
                    <Input
                      title="Store Category*"
                      value={appData.store_category}
                      disabled
                    />
                  </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div className={classes["checkbox-cards"]}>
                    <CheckboxCards
                      store={
                        appData.store === "Google Play"
                          ? "google-play"
                          : "app-store"
                      }
                      disabled
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </main>
          <Button click={this.saveClickHandler}>SAVE</Button>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
