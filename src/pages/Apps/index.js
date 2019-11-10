import React from "react"
import Container from "@material-ui/core/Container"
import { useHistory } from "react-router-dom"

import Header from "../../components/Header"
import Title from "../../components/Title"
import Button from "../../components/Button"
import AppsCard from "../../components/Card"
import { URI_TO_NEW_APPS } from "../../constants"

import classes from "./apps.module.scss"

export default function Apps() {
  const history = useHistory()

  const clickHandler = () => {
    history.push(URI_TO_NEW_APPS)
  }

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
          <Button click={clickHandler}>Add App</Button>
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
