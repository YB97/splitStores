import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { Link } from "react-router-dom"

import { blue, white } from "~v"
import { URI_TO_APPS } from "~/constants"
import Logo from "~c/Logo"
import classes from "./styles.module.scss"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: white,
    fontFamily: "Exo",
    fontSize: "24px",
    fontWeight: "500"
  }
}))

const StyledToolbar = withStyles({
  root: {}
})(Toolbar)

const canShowNavList = () => {
  return window.location.pathname !== URI_TO_APPS && auth
}

export default function MenuAppBar({ color = "white" }) {
  const cls = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navList = canShowNavList() && (
    <Link to={URI_TO_APPS} className={`${classes.link} ${color}`}>
      Applications
    </Link>
  )

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={cls.root}>
      <AppBar className={`${classes["app-bar"]} bg-${color}`} position="static">
        <StyledToolbar>
          <div className={classes.logo}>
            {/* Яна тут глянь. Я вот хз норм ли так в пропсе писать  */}
            <Logo color={color} href={canShowNavList() && URI_TO_APPS} />
          </div>
          <div className={classes.nav}>{navList}</div>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </StyledToolbar>
      </AppBar>
    </div>
  )
}
