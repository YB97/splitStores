import React, { PureComponent } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import Button from "../../components/Button"
import AppsCard from "../../components/AppsCard"
import Container from "@material-ui/core/Container"

import classes from "./apps.module.scss"

export default class Apps extends PureComponent {
  state = {
    isAsideVisible: true
  }

  render() {
    return (
      <div className={classes.apps}>
        <div className="header">
          <Header />
        </div>
        <Container>
          <div className={classes.title}>
            <Title
              title="Apps"
              subtitle="This is the application control room. Here you can create and manage your apps."
            />
            <Button
              click={() => {
                console.log("App has been added")
              }}
            >
              Add App
            </Button>
          </div>
          <div className={classes.content}>
            <div className={classes.card}>
              <AppsCard />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
