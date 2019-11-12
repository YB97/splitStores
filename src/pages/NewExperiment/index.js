import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormHelperText
} from "@material-ui/core"

import Header from "../../components/Header";
import Title from "../../components/Title";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
import CardRadioControl from "../../components/CardRadioControl"
import { URI_TO_NEW_EXPERIMENT_STEP_2 } from "../../constants";

import classes from "./newexperiment.module.scss"

export default function NewExperiment() {
  const steps = ["set up", "details", "variations"];
  const history = useHistory();

  const [actionInstallValue, setActionInstallValue] = React.useState('');
  const [deviceValue, setDeviceValue] = React.useState('');

  const handleChange = event => {
    setDeviceValue(event.target.value);
  };
  const handleInstallActionChange = event => {
    setActionInstallValue(event.target.value)
  };
  const onClickHandler = () => {
    history.push(URI_TO_NEW_EXPERIMENT_STEP_2);
  };


  return (
    <div className={classes.newexperiment}>
      <div className={classes.header}>
        <Header />
      </div>
      <Container>
        <Grid container justify="center">
          <Grid item sm={8} lg={6}>
            <div className={classes.wrapper}>
              <div className={classes["title-wrapper"]}>
                <Title title="Create new experiment" />
              </div>
              <Stepper activeStep={0} steps={steps} />
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel
                  disableAnimation
                  shrink={false}
                  id="appSelectLabel"
                  className={classes.inputLabel}
                >
                  Select the app
                </InputLabel>
                <Select
                  labelId="appSelectLabel"
                  id="appSelect"
                  variant="outlined"
                  defaultValue={10}
                  displayEmpty
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>
                    <img
                      src="../../../static/images/apps/facebook.png"
                      className={classes.selectImage}
                      alt=""
                      width={39}
                      height={39}
                    />
                    Play for game
                  </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <CardRadioControl
                name="deviceSelect"
                title={<div className={classes.inputLabel}>Define platform device</div>}
                values={[
                  {
                    value: 'phone',
                    id: 'phone',
                    img: '../../../static/images/apps/facebook.png',
                    text: 'Android phone'
                  },
                  {
                    value: 'tablet',
                    id: 'tablet',
                    img: '../../../static/images/apps/facebook.png',
                    text: 'Android tablet'
                  }
                ]}
                currentValue={deviceValue}
                className={classes.formControl}
                handleChange={handleChange}
              />
              <FormControl
                fullWidth
                className={classes.formControl}
              >
                <InputLabel
                  disableAnimation
                  shrink={false}
                  id="pageSelectLabel"
                  className={classes.inputLabel}
                >
                  Define the page you’d like to test
                </InputLabel>
                <Select
                  labelId="pageSelectLabel"
                  id="pageSelect"
                  variant="outlined"
                  defaultValue={10}
                  displayEmpty
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Play for game</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className={classes.formControl}>
                <InputLabel
                  disableAnimation
                  shrink={false}
                  id="elementSelectLabel"
                  className={classes.inputLabel}
                >
                  Define the element you’d like to test
                </InputLabel>
                <Select
                  labelId="elementSelectLabel"
                  id="elementSelect"
                  variant="outlined"
                  defaultValue={10}
                  displayEmpty
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>123</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel
                  disableAnimation
                  shrink={false}
                  htmlFor="nameInput"
                  className={classes.inputLabel}
                >
                  Set the name to your experiment
                </InputLabel>
                <OutlinedInput
                  id="nameInput"
                  variant="outlined"
                  placeholder="Name..."
                />
                <FormHelperText>
                  This name will only be displayed on the dashboard
                </FormHelperText>
              </FormControl>

              <CardRadioControl
                name="install_action"
                title={(
                  <div className={classes.inputLabel}>
                    What to do, when the user wants to install your application?
                  </div>
                )}
                values={[
                  {
                    value: 'user_email',
                    id: 'user_email',
                    img: '../../../static/images/apps/facebook.png',
                    text: 'Collect user’s email'
                  },
                  {
                    value: 'custom_link',
                    id: 'custom_link',
                    img: '../../../static/images/apps/facebook.png',
                    text: 'Go to custom link'
                  }
                ]}
                currentValue={actionInstallValue}
                className={classes.formControl}
                handleChange={handleInstallActionChange}
              />
              <div className={classes.buttonWrap}>
                <Button click={onClickHandler}>Next</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
