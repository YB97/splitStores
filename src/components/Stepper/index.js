import React from "react"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import Steplabel from "@material-ui/core/Steplabel"
import {withStyles} from "@material-ui/core/styles"

export default function ({
  bg = "#E3603B",
  color = "#fff",
  activeStep,
  steps,
  className,
  alternativeLabel = true
}) {
  const StyledStepIconLabel = withStyles({
    root: {
      backgroundColor: bg,
      color,
      height: "50px",
      width: "50px",
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
      lineHeight: "28px"
    }
  })(Steplabel)

  return (
    <Stepper className={className} activeStep={activeStep} alternativeLabel={alternativeLabel}>
      {console.log(steps)}
      {steps.map((step, index) => {
        return (
          <Step key={index}>
            <Steplabel StepIconComponent={StyledStepIconLabel}>
              {step}
            </Steplabel>
          </Step>
        )
      })}
    </Stepper>
  )
}