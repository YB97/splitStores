import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { inject, observer } from "mobx-react";
import moment from "moment";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";
import StyledSelect from "../../components/StyledSelect";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";
import { URI_TO_NEW_EXPERIMENT } from "../../constants";
import { urlBuilder } from "../../routes";

import classes from "./experiments.module.scss";

@inject("stores")
@observer
class Experiments extends PureComponent {
  componentWillMount() {
    const { getAllApps } = this.props.stores.apps;

    getAllApps();
  }
  componentDidMount() {
    this.props.stores.setLoading(true);

    const { getExperimentsByAppId } = this.props.stores.experiments;
    const { id } = this.props.match.params;
    const { appsList } = this.props.stores.apps;
    const { setApp } = this.props.stores.app;

    const app = appsList.find(ap => ap.id.toString() === id);

    setApp(app);
    getExperimentsByAppId(id).then(() => {
      this.props.stores.setLoading(false);
    });
  }

  clickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT);
  };

  onCardClickHandler = (appId, expId) => {
    this.props.history.push(urlBuilder("experiment", { id: appId, expId }));
  };

  onAppSelect = name => {
    const { history } = this.props;
    const { appsList } = this.props.stores.apps;
    const { setApp } = this.props.stores.app;
    const { getExperimentsByAppId } = this.props.stores.experiments;

    const app = appsList.find(app => app.name === name);

    setApp(app);
    getExperimentsByAppId(app.id);
    history.push(urlBuilder("experiments", { id: app.id }));
  };

  render() {
    const { experiments } = this.props.stores.experiments;
    const { appsList } = this.props.stores.apps;
    const { id } = this.props.match.params;

    const activeApp = appsList.find(app => app.id.toString() === id.toString());

    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <Spinner page>
          <Container>
            <div className={classes['content-wrapper']}>
              <div className={classes.select}>
                <StyledSelect
                  data={appsList}
                  setAsDefault={activeApp && activeApp.name}
                  onClickHandler={this.onAppSelect}
                  width="300px"
                  noBlankValue
                />
              </div>
              <div className={classes.title}>
                <div className={classes["title-text"]}>
                  <Title title="Experiments" />
                </div>
                {Boolean(experiments.length) && (
                  <Button click={this.clickHandler}>
                    CREATE NEW EXPERIMENT
                  </Button>
                )}
              </div>
              {!experiments.length && (
                <div className={classes["no-exp-wrapper"]}>
                  <strong className={classes["no-exp-text"]}>
                    You don't have any experiments
                  </strong>
                  <Button click={this.clickHandler}>
                    CREATE NEW EXPERIMENT
                  </Button>
                </div>
              )}
              {!!experiments.length &&
                experiments.map(exp => (
                  <Card
                    key={`${exp.experiment_name} ${exp.experiment_id}`}
                    type="experiments"
                    title={exp.experiment_name}
                    variationsCount={exp.variations_count}
                    visitorsCount={exp.visitors_count}
                    clicksCount={exp.clicks_count}
                    publishDate={moment(exp.creation_date).format("DD/MM/YYYY")}
                    storeType={activeApp.store}
                    onClickHandler={() =>
                      this.onCardClickHandler(id, exp.experiment_id)
                    }
                  />
                ))}
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

export default withRouter(Experiments);
