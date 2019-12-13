import React from "react";
import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import styles from "./footer.module.scss";

const useStyles = makeStyles({
  root: {
    // marginTop: 'auto',
    color: "#244BDD",
    "& .MuiBottomNavigationAction-root.Mui-selected": {
      color: "#244BDD"
    }
  }
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  return (
    <div className={styles.wrapper}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Privacy Policy" />
        <BottomNavigationAction label="Terms Of Service " />
        <BottomNavigationAction label="Cookie Policy" />
        <BottomNavigationAction label="Agreement" />
        <BottomNavigationAction label="GDRP" />
      </BottomNavigation>
      <div className={styles.copyright}>SplitStores.com 2019</div>
    </div>
  );
}

export default Footer;
