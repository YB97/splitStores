import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Spinner from "../../../../components/Spinner";
import classes from "./card.module.scss";
import { URI_TO_APPS, URI_TO_NEW_APPS_STEP_2 } from "../../../../constants";
import withStore from "../../../../hocs/withStore";

function Card({
  withBtn = false,
  title = "Yes, here’s my app’s URL",
  urlImg = "../../../../../static/images/newapp/link.svg",
  stores
}) {
  const [value, setValue] = useState("");
  const [canCreate, setCanCreate] = useState(false);
  const [urlImage, setUrlImage] = useState(urlImg);
  const [message, setMessage] = useState(title);

  const history = useHistory();

  const urlImageSuccess = "../../../../../static/images/newapp/check.svg";
  const urlImageError = "../../../../../static/images/newapp/attantion.svg";

  const emulation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setCanCreate(true);
        resolve();
      }, 400);
    });
  };

  const changeHandler = e => {
    const value = e.target.value;
    setValue(value);
  };

  const onSend = e => {
    e.preventDefault();
    stores.setLoading(true);
    try {
      new URL(value);
      emulation().then(() => {
        setMessage("Link is valid. Do you want upload App?");
        setUrlImage(urlImageSuccess);
        stores.setLoading(false);
      });
    } catch (e) {
      setValue("");
      setMessage("Link is not valid");
      console.error("error", e);
      setUrlImage(urlImageError);
      stores.setLoading(false);
      return;
    }
  };

  const clickHandler = e => {
    history.push(URI_TO_APPS);
  };

  const onCreateNewApp = e => {
    history.push(URI_TO_NEW_APPS_STEP_2);
  };

  const onReset = () => {
    setValue("");
    setMessage(title);
    setUrlImage(urlImg);
    setCanCreate(false);
  };

  let renderActions = (
    <Button click={onCreateNewApp} disabled={stores.loading}>
      ADD APPLICATION MANUALLY
    </Button>
  );
  if (!withBtn) {
    renderActions = (
      <Spinner>
        <form className={classes.form} onSubmit={onSend}>
          <Input
            type="url"
            onChange={changeHandler}
            value={value}
            placeholder={"Paste the link to your app here"}
          />
          <div className={classes.control}>
            <Button type="submit" click={onSend}>
              send
            </Button>
          </div>
        </form>
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
        <Spinner>
          <div className={classes["img-wrapper"]}>
            <img className={classes.img} src={urlImage} alt="" />
          </div>
          <h3 className={classes.title}>{message}</h3>
          <div className={classes.action}>{renderActions}</div>
        </Spinner>
      </div>
    </>
  );
}

export default withStore(Card);
