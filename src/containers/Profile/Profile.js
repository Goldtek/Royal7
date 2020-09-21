import React, { useState } from "react";
import {
  Header,
  NotificationCenter,
  Sidebar,
  Workspace,
} from "../../components";
import classNames from "classnames";
import { useSelector } from "react-redux";
import Hidden from "@material-ui/core/Hidden";
import useMountEffect from "../../mountEffect";
import SpeedDial from "@material-ui/lab/SpeedDial";
import { colors } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";
import { MobileBreakpoint } from "../../styleVariables";
import SettingsIcon from "@material-ui/icons/Settings";
import ProfileHeader from "../../components/ProfileHeader";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { Wrapper } from "../../components";
import ProfileTab from "./ProfileTab";
import { AdminRoutes, TeacherRoutes } from "../../routes/SideBar";
import { useAppState } from "../../components/AppProvider/AppProvider";
import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
// import { ProfileTabs } from "./ProfileTabs";

const useStyles = makeStyles((theme) => ({
  panel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "calc(100vh - 64px)",
      paddingTop: "64px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingTop: "56px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 3,
  },
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: "100%",
    margin: "0 auto",
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
}));

const Dashboard = ({ history }) => {
  const classes = useStyles();
  const [state, dispatch] = useAppState();
  const [opened, setOpened] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const userAuth = useSelector((state) => state.authentication);
  // let [routes, setRoutes] = useState([]);
  const { role } = userAuth.user;

  // useEffect(() => {
  //   setRoutes()
  // }, []);
  let routes = [];
  if (role === "Admin") {
    routes = AdminRoutes;
    // return routes;
  }
  if (role === "Teacher") {
    routes = TeacherRoutes;
    // return routes;
  }
  const mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);

  const resizeDispatch = () => {
    if (typeof Event === "function") {
      window.dispatchEvent(new Event("resize"));
    } else {
      const evt = window.document.createEvent("UIEvents");
      evt.initUIEvent("resize", true, false, window, 0);
      window.dispatchEvent(evt);
    }
  };

  const handleDrawerToggle = () => {
    setOpened(!opened);
    resizeDispatch();
  };

  const handleNotificationToggle = () =>
    setNotificationsOpen(!notificationsOpen);

  const handleFullscreenToggle = () => {
    const element = document.querySelector("#root");
    const isFullscreen =
      document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      function () {
        return false;
      };
    document.cancelFullScreen =
      document.cancelFullScreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      function () {
        return false;
      };
    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  };

  const handleSpeedDialOpen = () => setOpenSpeedDial(true);

  const handleSpeedDialClose = () => setOpenSpeedDial(false);

  useMountEffect(() => {
    if (mediaMatcher.matches) setOpened(false);
    mediaMatcher.addListener((match) => {
      setTimeout(() => {
        if (match.matches) setOpened(false);
        else setOpened(true);
      }, 300);
    });

    const unlisten = history.listen(() => {
      if (mediaMatcher.matches) setOpened(false);
      document.querySelector("#root > div > main").scrollTop = 0;
    });

    return () => {
      unlisten();
      mediaMatcher.removeListener((match) => {
        setTimeout(() => {
          if (match.matches) setOpened(false);
          else setOpened(true);
        }, 300);
      });
    };
  });

  return (
    <>
      <Header
        logoAltText="Edcollab"
        logo={`${process.env.PUBLIC_URL}/static/images/logo.svg`}
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
      />
      <div className={classNames(classes.panel, "theme-dark")}>
        <Sidebar
          routes={routes.items}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>
          <ProfileHeader User={userAuth} />
          <div className={classes.inner}>
            {/* <Divider className={classes.divider} /> */}
          </div>

          <Wrapper>
            <ProfileTab />
          </Wrapper>
        </Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>

      <Hidden xsDown>
        <SpeedDial
          ariaLabel="Settings"
          className={classes.speedDial}
          icon={<SpeedDialIcon icon={<SettingsIcon />} />}
          onBlur={handleSpeedDialClose}
          onClose={handleSpeedDialClose}
          onFocus={handleSpeedDialOpen}
          onMouseEnter={handleSpeedDialOpen}
          onMouseLeave={handleSpeedDialClose}
          open={openSpeedDial}
        >
          <SpeedDialAction
            icon={<WbSunnyIcon />}
            tooltipTitle="Toggle light/dark theme"
            onClick={() => dispatch({ type: "type" })}
          />
          <SpeedDialAction
            icon={
              state.direction === "rtl" ? (
                <FormatTextdirectionLToRIcon />
              ) : (
                <FormatTextdirectionRToLIcon />
              )
            }
            tooltipTitle="Toggle LTR/RTL direction"
            onClick={() => dispatch({ type: "direction" })}
          />
        </SpeedDial>
      </Hidden>
    </>
  );
};

export default Dashboard;