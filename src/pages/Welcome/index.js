import React, { PureComponent } from "react"
import Container from "@material-ui/core/Container"
import Header from "../../components/Header"
import GradientBg from "../../components/GradientBg"
import Title from "../../components/Title"
import Button from "../../components/Button"
import { URI_TO_APPS } from "../../constants"

import classes from "./welcome.module.scss"

class Apps extends PureComponent {
  render() {
    return (
      <>
        <GradientBg>
          <Header color="blue" />
          <Container>
            <div className={classes.title}>
              <Title
                color="white"
                title="Apps"
                subtitle="This is the application control room. Here you can create and manage your apps."
              />
            </div>
            <div className="content">
              <div className={classes.welcome}>
                <h3 className={classes["welcome-title"]}>
                  Welcome to Split Stores
                </h3>
                <small className={classes["welcome-subtitle"]}>
                  Add your first app to start optimizing.
                </small>
                <div className={classes["welcome-btn"]}>
                  <Button
                    href={URI_TO_APPS}
                    click={() => {
                      console.log("HandleClick")
                    }}
                  >
                    CREATE FIRST APP
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </GradientBg>
      </>
    )
  }
}

export default Apps
