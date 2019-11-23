import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#FAFAFA",
    "& .MuiAppBar-colorDefault": {
      backgroundColor: "#395DE0"
    }
  },
  padding: {
    padding: theme.spacing(3)
  }
}));

const StyledTabs = withStyles({
  root: {
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#fff"
    },
    "& .MuiTab-textColorPrimary": {
      color: "#CCCCCC"
    },
    "& .MuiTabs-scroller.MuiTabs-scrollable": {
      backgroundColor: "#395DE0"
    },
    "& .PrivateTabScrollButton-root-322": {
      backgroundColor: "#395DE0",
      color: "#fff"
    }
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E98568",
    width: "100%"
  }
})(Tabs);

const StyledTab = withStyles({
  root: {
    padding: "20px"
  }
})(Tab);
export default function NavBar({ items = [] }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container>
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {items.map((item, idx) => (
              <StyledTab
                key={`${idx}:${item.label}`}
                label={item.label}
                {...a11yProps(idx)}
              />
            ))}
          </StyledTabs>
        </Container>
      </AppBar>
      {items.map((item, idx) => (
        <TabPanel key={`${item.label}:${item.idx}`} value={value} index={idx}>
          <Container>{item.data}</Container>
        </TabPanel>
      ))}
    </div>
  );
}
