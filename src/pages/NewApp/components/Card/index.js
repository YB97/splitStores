import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Spinner from "../../../../components/Spinner";
import classes from "./card.module.scss";
import { URI_TO_NEW_APPS_STEP_2 } from "../../../../constants";
import withStore from "../../../../hocs/withStore";

function Card({
  withBtn = false,
  title = "Yes, here’s my app’s URL",
  urlImg = "../../../../../static/images/newapp/check.svg",
  stores
}) {
  const [value, setValue] = useState("");
  const [canCreate, setCanCreate] = useState(false);
  const history = useHistory();

  const emulation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setCanCreate(true);
        resolve();
      }, 400);
    });
  };

  const changeHandler = e => {
    stores.setLoading(true);
    const value = e.target.value;
    try {
      new URL(value);
      setValue(value);
      emulation().then(() => {
        stores.setLoading(false);
      });
    } catch (e) {
      setValue("");
      console.error("error", e);
      stores.setLoading(false);
      return;
    }
  };

  const clickHandler = e => {
    history.push(URI_TO_NEW_APPS_STEP_2);
  };

  const onReset = () => {
    setValue("");
    setCanCreate(false);
  };

  let renderActions = (
    <Button click={clickHandler} disabled={stores.loading}>
      ADD APPLICATION MANUALLY
    </Button>
  );
  if (!withBtn) {
    renderActions = (
      <Spinner>
        <Input
          onChange={changeHandler}
          value={value}
          placeholder={"Paste the link to  your app here"}
        />
      </Spinner>
    );
  }
  if (canCreate) {
    renderActions = (
      <>
        <Button click={clickHandler}>ADD APP</Button>
        <span className={classes.reset} onClick={onReset}>
          Reset
        </span>
      </>
    );
  }
  return (
    <>
      <div className={classes.card}>
        <div className={classes["img-wrapper"]}>
          <img className={classes.img} src={urlImg} alt="" />
        </div>
        <h3 className={classes.title}>
          {canCreate ? "We are upload your app. Do you want to add?" : title}
        </h3>
        <div className={classes.action}>{renderActions}</div>
      </div>
    </>
  );
}

export default withStore(Card);
