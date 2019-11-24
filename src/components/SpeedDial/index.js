import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ExtensionIcon from "@material-ui/icons/Extension";
import AppsIcon from "@material-ui/icons/Apps";

import withStore from "../../hocs/withStore";
import { useHistory } from "react-router-dom";
import { URI_TO_NEW_APPS, URI_TO_NEW_EXPERIMENT } from "../../constants";

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    "& .MuiSpeedDial-fab": {
      backgroundColor: "#244bdd"
    }
  }
}));

const actions = [
  { icon: <AppsIcon />, name: "App", href: URI_TO_NEW_APPS },
  { icon: <ExtensionIcon />, name: "Experiment", href: URI_TO_NEW_EXPERIMENT }
];

function WidgetBtn({ stores }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickTooltipHandler = href => {
    history.push(href);
    setOpen(false);
  };

  if (!stores.login.isAuth) {
    return;
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => onClickTooltipHandler(action.href)}
        />
      ))}
    </SpeedDial>
  );
}

export default withStore(WidgetBtn);
