import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
// import Collapse from "@material-ui/core/Collapse";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { green } from "@material-ui/core/colors";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
// import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "0 1px 8px rgba(0,0,0,.3)",
    position: "relative",
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
    // backgroundColor: "#343a40",
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2,
  },
  branding: {
    display: "flex",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: "auto 0",
    lineHeight: "50px",
    padding: `0 64px 0 0`,
  },
  logo: {
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80px",
    },
  },
  searchWrapper: {
    flex: "1 1 0%",
    boxSizing: " border-box",
  },
  searchForm: {
    background: "white",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1) * 2,
    display: "block",
    maxWidth: "800px",
  },
  // searchInput: {
  //   fontSize: "1rem",
  //   padding: theme.spacing(1) * 1.9,
  //   [theme.breakpoints.down("xs")]: {
  //     padding: theme.spacing(1) * 1.2,
  //   },
  //   cursor: "text",
  //   textIndent: "30px",
  //   border: "none",
  //   background: "transparent",
  //   width: "100%",
  //   outline: "0",
  // },
  // searchIcon: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "0",
  //   marginTop: "-24px",
  //   color: "rgba(0,0,0,.87)",
  // },
}));

const Header = ({
  logo,
  logoAltText,
  toggleFullscreen,
  toggleDrawer,
  toogleNotifications,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  let history = useHistory();
  const handleSettingdToggle = (event) => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleSearchExpandToggle = () => setSearchExpanded(!searchExpanded);

  const handleDrawerToggle = () => {
    toggleDrawer();
    if (searchExpanded) handleSearchExpandToggle();
  };

  const handleNotificationToggle = () => {
    toogleNotifications();
    if (searchExpanded) handleSearchExpandToggle();
  };

  const Logout = () => {
    history.push("/signin");
  };
  return (
    <AppBar
      position="static"
      className={classes.appBar}
      // style={{ backgroundColor: "#343a40" }}
    >
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <div className={classes.branding}>
          {/* <img src={logo} alt={logoAltText} className={classes.logo} /> */}
          <Typography variant="body1" className="flexSpacer">
            EDCOLLAB
          </Typography>
        </div>

        <Hidden xsDown>
          <div className={classes.searchWrapper}>
            <form className={classes.searchForm}></form>
          </div>
        </Hidden>

        <Hidden smUp>
          <span className="flexSpacer" />
        </Hidden>

        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={handleSearchExpandToggle}
            aria-expanded={searchExpanded}
            aria-label="Show searchbar"
          >
            <SearchIcon />
          </IconButton>
        </Hidden>

        <Hidden xsDown>
          <IconButton color="inherit" onClick={toggleFullscreen}>
            <FullscreenIcon />
          </IconButton>
        </Hidden>
        <Tooltip title="Notfication">
          <IconButton color="inherit" onClick={handleNotificationToggle}>
            <Badge badgeContent={5} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Profile">
          <IconButton
            aria-label="User Settings"
            aria-owns={anchorEl ? "user-menu" : null}
            aria-haspopup="true"
            color="inherit"
            onClick={handleSettingdToggle}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout">
          <IconButton
            color="inherit"
            onClick={Logout}
            style={{
              backgroundColor: "white",
              fontSize: "0.875rem",
              fontWeight: "800",
            }}
            size="small"
          >
            <ExitToAppRoundedIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <NotificationsOffIcon />
            </ListItemIcon>
            <ListItemText primary="Disable notifications" />
          </MenuItem>
          <MenuItem onClick={Logout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </MenuItem>
        </Menu>
      </Toolbar>
      {/* <Hidden smUp>
        <Collapse in={searchExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.toolBar}>
            <div className={classes.searchWrapper}>
              <form className={classNames(classes.searchForm, "mr-0")}>
                <IconButton aria-label="Search" className={classes.searchIcon}>
                  <SearchIcon />
                </IconButton>
                <input
                  className={classes.searchInput}
                  type="text"
                  placeholder="Search"
                  autoFocus="true"
                />
              </form>
            </div>
          </Toolbar>
        </Collapse>
      </Hidden> */}
    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
};

export default Header;
