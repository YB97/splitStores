import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import Logo from "~c/Logo";
import withStore from "../../hocs/withStore";
import { useHistory } from "react-router-dom";
import {
  URI_TO_APPS,
  URI_TO_WELCOME,
  URI_TO_EXPERIMENTS
} from "../../constants";

import cls from "./header.module.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function Header({ color = "white", stores }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const openUserMenu = Boolean(anchorEl);

  const navList = [
    { text: "Applications", href: URI_TO_APPS },
    { text: "Experiments", href: URI_TO_EXPERIMENTS.replace(":id", "1") }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    stores.setLoading(true);
    handleClose();
    stores.login.logout().then(() => {
      history.push("/");
      stores.setLoading(false);
    });
  };

  const canShowNavList = auth => {
    const currentPathname = window.location.pathname;
    return (
      currentPathname !== URI_TO_APPS &&
      currentPathname !== URI_TO_WELCOME &&
      auth
    );
  };

  const renderNavList = navList.map(item => {
    return (
      <div className={cls.link} key={item.text}>
        <Link to={item.href}>{item.text}</Link>
      </div>
    );
  });

  return (
    <div className={classes.root}>
      {open ? (
        <div className={cls.overlay} onClick={handleDrawerClose}></div>
      ) : null}

      <CssBaseline />
      <AppBar position="static" className={`bg-${color}`}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`${clsx(classes.menuButton, open && classes.hide)} ${
              cls["menu-btn"]
            }`}
          >
            <MenuIcon />
          </IconButton>
          <div className={cls.logo}>
            <Logo color={color} href={canShowNavList(auth) && URI_TO_APPS} />
          </div>
          <div className={cls.nav}>{renderNavList}</div>
          {auth && (
            <div className={cls.user}>
              <span className={cls["user-name"]}>John Preston</span>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={openUserMenu}
                onClose={handleClose}
              >
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navList.map(item => (
            <ListItem button key={item.text}>
              <div className={cls["drawer-link"]}>
                <Link to={item.href}>
                  <ListItemText primary={item.text} />
                </Link>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withStore(Header);
