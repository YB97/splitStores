import React from "react";
import FileInput from "../../hocs/FileInput";
import Button from "../Button";
import getUniqId from "../../helpers/getUniqueId";
import classes from "./TestingIcon.module.scss";

function TestingIcon({ icon, setIcon, changeHandlerWrapper }) {
  const fileInputRef = React.createRef();

  const handleIconWrapped = () => changeHandlerWrapper(setIcon, fileInputRef);
  const id = getUniqId();
  return (
    <>
      <div className={classes.iconLabel}>Icon</div>
      <div className={classes.uploadWrapper}>
        <div className={classes.iconWrap}>
          {icon.value ? (
            <img src={icon.value} className={classes.image} alt="" />
          ) : (
            <div className={classes.imageWait}>
              <span className={classes["file-content"]}>{null}</span>
              <div className={classes["icon-text"]}>{icon.name || null}</div>
            </div>
          )}
        </div>
        <div className={classes.buttonWrap}>
          <Button bg="#E3603B" size="small">
            <label
              htmlFor={"file" + (id !== undefined ? `_${id}` : "")}
              className={classes.buttonLabel}
            >
              Upload new file
            </label>
          </Button>
          <input
            ref={fileInputRef}
            accept=".jpg, .jpeg, .png"
            onChange={handleIconWrapped}
            className={classes.file}
            id={"file" + (id !== undefined ? `_${id}` : "")}
            type="file"
          />
          <div className={classes.buttonHelpText}>
            We recommend using .png 250x250px
          </div>
        </div>
      </div>
    </>
  );
}

export default FileInput(TestingIcon);
