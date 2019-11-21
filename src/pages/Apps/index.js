import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import moment from "moment";

import { URI_TO_NEW_APPS } from "../../constants";
import { urlBuilder } from "../../routes";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";

import classes from "./apps.module.scss";

@inject("stores")
@observer
class Apps extends PureComponent {
  componentDidMount() {
    this.props.stores.apps.initialAppList();
  }

  clickHandler = () => {
    this.props.history.push(URI_TO_NEW_APPS);
  };

  cardClickHandler = id => {
    this.props.history.push(urlBuilder("app", { id }));
  };

  render() {
    const { appsList, processing } = this.props.stores.apps;

    return (
      <div className={classes.apps}>
        <div className="header">
          <Header />
        </div>
        <Container>
          <div className={classes.title}>
            <div className={classes["title-text"]}>
              <Title
                title="Apps"
                subtitle="This is the application control room. Here you can create and manage your apps."
              />
            </div>
            <Button click={this.clickHandler}>Add App</Button>
          </div>
          <div className={classes.content}>
            {processing
              ? (
                <div className={classes.spinner}>
                  <Spinner />
                </div>
                )
              : appsList.map(app => (
                <div key={app.name} className={classes.card}>
                  <Card
                    onClickHandler={() => this.cardClickHandler(app.id)}
                    title={app.name}
                    appsImgUrl={app.icon}
                    publishDate={moment(app.creation_date).format("DD/MM/YYYY")}
                    experimentsCount={app.experiments_count}
                    storeType={app.store}
                  />
                </div>
              ))
            }
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Apps);
