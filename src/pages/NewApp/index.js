import React from "react"
import Container from "@material-ui/core/Container"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header"
import Title from "../../components/Title"
import Button from "../../components/Button"
import Card from "./components/Card"

import classes from "./newapp.module.scss"
import { Grid } from "@material-ui/core"

export default function Apps() {
  const history = useHistory()

  const clickHandler = () => {
    console.log("TODO")
  }

  return (
    <div className={classes.apps}>
      <div className="header">
        <Header />
      </div>
      <Container>
        <div className={classes.title}>
          <div className={classes["title-text"]}>
            <Title title="Add new app" />
          </div>
          <Button click={clickHandler}>next</Button>
        </div>
        <div className={classes.content}>
          <div className={classes["content-title-wrap"]}>
            <h3 className={classes["content-title"]}>
              Is your app already availiable on the AppStore or Google Play?
            </h3>
          </div>
          <div className="cards-wrapper">
            <Grid container>
              <Grid item xs={5}>
                <Card />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  )
}
