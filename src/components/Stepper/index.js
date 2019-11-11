import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Steplabel from "@material-ui/core/Steplabel";
import { withStyles } from "@material-ui/core/styles";

import classes from "./stepper.module.scss";

const StyledStepIconLabel = withStyles({
  root: {
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#E3603B"
    },
    "& .MuiStepLabel-iconContainer": {
      padding: 0
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#E3603B"
    }
  }
})(Steplabel);

export default function({ activeStep, steps, alternativeLabel = true }) {
  return (
    <Stepper
      className={classes["step-wrapper"]}
      activeStep={activeStep}
      alternativeLabel={alternativeLabel}
    >
      {steps.map((step, index) => {
        return (
          <Step key={`${step}:${index}`}>
            <Steplabel StepIconComponent={StyledStepIconLabel}>
              {step}
            </Steplabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
