import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Input from "../../../../components/Input"
import Button from "../../../../components/Button"
import classes from "./card.module.scss"
import { URI_TO_NEW_APPS_STEP_2 } from "../../../../constants"

export default function({
  withBtn = false,
  title = "Yes, here’s my app’s URL",
  urlImg = "../../../../../static/images/newapp/check.svg"
}) {
  const [value, setValue] = useState("")
  const history = useHistory()

  const changeHandler = e => {
    setValue(e.target.value)
  }
  const clickHandler = e => {
    history.push(URI_TO_NEW_APPS_STEP_2)
  }

  let renderActions = (
    <Button click={clickHandler}>ADD APPLICATION MANUALLY</Button>
  )
  if (!withBtn) {
    renderActions = (
      <Input
        onChange={changeHandler}
        value={value}
        placeholder={"Paste the link to  your app here"}
      />
    )
  }
  return (
    <>
      <div className={classes.card}>
        <div className={classes["img-wrapper"]}>
          <img className={classes.img} src={urlImg} alt="" />
        </div>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.action}>{renderActions}</div>
      </div>
    </>
  )
}
