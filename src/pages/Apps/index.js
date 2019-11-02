import React, { PureComponent } from "react"
import Container from "@material-ui/core/Container"
import Header from "../../components/Header"
import GradientBg from "../../components/GradientBg"
import Title from "../../components/Title"
import classes from "./apps.module.scss"

class Apps extends PureComponent {
  render() {
    return (
      <>
        <GradientBg>
          <Header color="blue" />
          <Container>
            <Title
              color="white"
              title="Apps"
              subtitle="This is the application control room. Here you can create and manage your apps."
            />
          </Container>
        </GradientBg>
      </>
    )
  }
}

export default Apps
