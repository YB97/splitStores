import React, { PureComponent } from "react";
import { Container, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import moment from "moment";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import CheckboxCards from "../../components/CheckboxCards";
import Footer from "../../components/Footer";
import { urlBuilder } from "../../routes";

import classes from "./app.module.scss";

@inject("stores")
@observer
class App extends PureComponent {
  st = this.props.stores.app;
  timer = null;

  state = {
    name: "",
    id: null
  };

  componentDidMount() {
    const { setLoading } = this.props.stores;
    const { getAppById } = this.st;
    const { id } = this.props.match.params;

    setLoading(true);
    getAppById(id);
    this.setState({ name: this.st.app.name });
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // if (id !== this.state.id) {
    //   getAppById(id).then(data => {
    //     this.setState({ name: toJS(data).name });
    //     this.props.stores.setLoading(false);
    //   });
    // }
  }

  clickHandler = () => {
    this.props.history.push("/newexperiment");
  };

  saveClickHandler = () => {
    const { setAppName, save } = this.st;

    setAppName(this.state.name);
    save();
  };

  render() {
    const { app } = this.st;
    const { history } = this.props;
    const { id } = this.props.match.params;

    return (
      <div className={classes["app-wrapper"]}>
        <Header />
        <Spinner page>
          <Container>
            <div className={classes["content-wrapper"]}>
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
                  title={app.name}
                  appsImgUrl={app.icon}
                  publishDate={moment(app.creation_date).format("DD/MM/YYYY")}
                  experimentsCount={app.experiments_count}
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
                          value={app.link_store}
                          disabled
                        />
                      </div>
                      <div className={classes.control}>
                        <Input
                          title="Store Category*"
                          value={app.store_category}
                          disabled
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className={classes["checkbox-cards"]}>
                        <CheckboxCards
                          store={
                            app.store === "Google Play"
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
            </div>
          </Container>
        </Spinner>
        {!this.props.stores.loading && (
          <div className={classes.footer}>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
