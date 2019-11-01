import React, { Component } from "react"
import Container from "@material-ui/core/Container"
import Header from "../../components/Header"
import GradientBg from "../../components/GradientBg"

class Apps extends React.Component {
  render() {
    return (
      <>
        <GradientBg>
          <Header color="blue" />
          <Container>Apps</Container>
        </GradientBg>
      </>
    )
  }
}

export default Apps
