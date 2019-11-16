import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import StyledSelect from "../../../components/StyledSelect";
import CheckboxCards from "../../../components/CheckboxCards";
import Footer from "../../../components/Footer";
import optimizeImage from "../../../helpers/optimizeImage";
import { URI_TO_NEW_APPS } from "../../../constants";

import classes from "./step2.module.scss";

export default function() {
  const defaultStateStep2 = {
    appName: {
      value: ""
    },
    file: {}
  };

  const [step2, setStep2] = useState(defaultStateStep2);
  const [store, setStore] = useState("app-store");
  const history = useHistory();

  const fileInput = React.createRef();

  const onClickHandler = () => {
    history.push(URI_TO_NEW_APPS);
  };

  const handleFileAsDataUri = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (function(file) {
        return function(e) {
          const binaryData = e.target.result;
          const base64String = window.btoa(binaryData);
          const value = `data:${file.type};base64,${base64String}`;
          resolve(value);
        };
      })(file);
      reader.readAsBinaryString(file);
    });
  };

  const selectHandler = e => {
    const value = e.target.value;
    setStore(value);
  };
  const changeHandler = e => {
    const file = fileInput.current.files[0];
    optimizeImage(file, 0.9, 200, 200).then(blob => {
      handleFileAsDataUri(blob).then(value => {
        const newFile = { name: file.name, value };
        setStep2({ ...step2, file: newFile });
      });
    });
  };

  return (
    <div className={classes["step2"]}>
      <div className="header">
        <Header />
      </div>
      <Container>
        <div className={classes["title"]}>
          <Title title="Add new app" />
        </div>
        <div className={classes["nav-btn"]}>
          <Button click={onClickHandler}>PREVIOUS STEP</Button>
        </div>
        <div className={classes["content"]}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div className={classes["control"]}>
                <Input
                  title="App name*"
                  helpText="This name will only be displayed on the dashboard"
                  placeholder="Your App name..."
                  value={step2.appName.value}
                  onChange={e => {
                    const appName = {
                      value: e.target.value
                    };
                    setStep2({ ...step2, appName });
                  }}
                />
              </div>
              <div className={classes["control"]}>
                <CheckboxCards store={store} onSelect={selectHandler} />
              </div>
              <div className={classes["control"]}>
                <span className={classes["control-title"]}>
                  Store Category*
                </span>
                <StyledSelect
                  width="100%"
                  data={
                    store === "app-store" ? appleStoreData : googleStoreData
                  }
                />
              </div>
            </Grid>
            <Grid item lg={5} xs={12}>
              <div className={classes["icon-wrapper"]}>
                <div className="icon">
                  <div className="input-wrapper">
                    {/* {TODO: create the File component} */}
                    <label
                      htmlFor="file"
                      className={`${classes["file-label"]} ${
                        step2.file.name ? classes["file-add"] : ""
                      }`}
                    >
                      {step2.file.value ? (
                        <img src={step2.file.value} alt="" />
                      ) : (
                        <>
                          <span className={classes["file-content"]}>+</span>
                          <div className={classes["icon-text"]}>
                            {step2.file.name || "Add icon"}
                          </div>
                        </>
                      )}
                    </label>
                    <input
                      ref={fileInput}
                      accept=".jpg, .jpeg, .png"
                      onChange={changeHandler}
                      className={classes.file}
                      id="file"
                      type="file"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes["add-btn"]}>
          <Button>ADD APPLICATION</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

const appleStoreData = [
  { name: "Books" },
  { name: "Business" },
  { name: "Catalogs" },
  { name: "Education" },
  { name: "Entertainment" },
  { name: "Finance" },
  { name: "Food & Drink" },
  { name: "Game: Action" },
  { name: "Game: Adventure" },
  { name: "Game: Arcade" },
  { name: "Game: Board" },
  { name: "Game: Card" },
  { name: "Game: Casino" },
  { name: "Game: Dice" },
  { name: "Game: Educational" },
  { name: "Game: Family" },
  { name: "Game: Kids" },
  { name: "Game: Music" },
  { name: "Game: Puzzle" },
  { name: "Game: Racing" },
  { name: "Game: Role Playing" },
  { name: "Game: Simulation" },
  { name: "Game: Sports" },
  { name: "Game: Strategy" },
  { name: "Game: Trivia" },
  { name: "Game: World Games" },
  { name: "Health & Fitness" },
  { name: "Lifestyle" },
  { name: "Medical" },
  { name: "Musical" },
  { name: "Navigation" },
  { name: "News" },
  { name: "Newsstand" },
  { name: "Photo & Video" },
  { name: "Productivity" },
  { name: "Reference" },
  { name: "Shopping" },
  { name: "Social Networking" },
  { name: "Sports" },
  { name: "Stickers" },
  { name: "Travel" },
  { name: "Utilities" },
  { name: "Weather" }
];

const googleStoreData = [
  { name: "Art & Design Auto & Vehicles Beauty" },
  { name: "Books & Reference" },
  { name: "Business" },
  { name: "Comics" },
  { name: "Communication" },
  { name: "Dating" },
  { name: "Education" },
  { name: "Entertainment" },
  { name: "Events" },
  { name: "Family" },
  { name: "Family: Action & Adventure" },
  { name: "Family: Brain Games" },
  { name: "Family: Creativity" },
  { name: "Family: Education" },
  { name: "Family: Music & Video" },
  { name: "Family: Pretend Play" },
  { name: "Finance" },
  { name: "Food & Drink" },
  { name: "Game: Action" },
  { name: "Game: Adventure" },
  { name: "Game: Arcade" },
  { name: "Game: Board" },
  { name: "Game: Card" },
  { name: "Game: Casino" },
  { name: "Game: Casual" },
  { name: "Game: Educational" },
  { name: "Game: Family" },
  { name: "Game: Music" },
  { name: "Game: Puzzle" },
  { name: "Game: Racing" },
  { name: "Game: Role Playing" },
  { name: "Game: Simulation" },
  { name: "Game: Sports" },
  { name: "Game: Strategy" },
  { name: "Game: Trivia" },
  { name: "Game: Word" },
  { name: "Games" },
  { name: "Health & Fitness" },
  { name: "House & Home" },
  { name: "Libraries & Demo" },
  { name: "Lifestyle" },
  { name: "Live Wallpaper" },
  { name: "Maps & Navigation" },
  { name: "Medical" },
  { name: "Music & Audio" },
  { name: "News & Magazines" },
  { name: "Parenting" },
  { name: "Personalization" },
  { name: "Photography" },
  { name: "Productivity" },
  { name: "Shopping" },
  { name: "Social" },
  { name: "Sports" },
  { name: "Tools" },
  { name: "Travel" },
  { name: "Travel & local" },
  { name: "Video Players & Editors" },
  { name: "Wear OS by Google" },
  { name: "Weather" },
  { name: "Widgets" }
];
