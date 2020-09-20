import React, { useState } from "react";
import axios from "axios";
import { Header, Sidebar, Workspace } from "../components";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
// import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
// import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
// import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import { MobileBreakpoint } from "../styleVariables";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
// import SettingsIcon from "@material-ui/icons/Settings";
// import SpeedDial from "@material-ui/lab/SpeedDial";
// import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
// import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
// import WbSunnyIcon from "@material-ui/icons/WbSunny";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import { AdminRoutes, TeacherRoutes, StudentRoutes } from "../routes/SideBar/";
// import { useAppState } from "../components/AppProvider/AppProvider";
import CustomModal from "./Dialogue/CustomModal";
import useMountEffect from "../mountEffect";
import { Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import cogoToast from "cogo-toast";
import * as Yup from "yup";

const API_URL = process.env.REACT_APP_BASEURL;

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
  link: {
    color: "#fff",
  },
  snackAlert: {
    cursor: "pointer",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Dashboard = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [state, dispatch] = useAppState();
  const [opened, setOpened] = useState(true);
  // const [notificationsOpen, setNotificationsOpen] = useState(false);
  // const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const [OpenModal, SetOpenModal] = useState(false);
  const userAuth = useSelector((state) => state.authentication);
  const { role, id, password } = userAuth.user;

  // useEffect(() => {
  //   setRoutes()
  // }, []);
  let routes = [];

  const Schema = Yup.object().shape({
    password: Yup.string().required("required"),
    changepassword: Yup.string()
      .required("required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password doesn't match"
        ),
      }),
  });
  if (role === "Admin") {
    routes = AdminRoutes;
    // return routes;
  }
  if (role === "Teacher") {
    routes = TeacherRoutes;
    // return routes;
  }
  if (role === "Student") {
    routes = StudentRoutes;
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

  // const handleNotificationToggle = () =>
  //   setNotificationsOpen(!notificationsOpen);

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

  // const handleSpeedDialOpen = () => setOpenSpeedDial(true);

  // const handleSpeedDialClose = () => setOpenSpeedDial(false);

  const handleDialogOpen = () => SetOpenModal(true);

  const handleDialogClose = () => SetOpenModal(false);
  const getRoutes = (
    <Switch>
      {routes.items.map((item, index) =>
        item.type === "external" ? (
          <Route
            exact
            path={item.path}
            component={item.component}
            name={item.name}
            key={index}
          />
        ) : item.type === "submenu" ? (
          item.children.map((subItem) => (
            <Route
              exact
              path={`${item.path}${subItem.path}`}
              component={subItem.component}
              name={subItem.name}
            />
          ))
        ) : (
          <Route
            exact
            path={item.path}
            component={item.component}
            name={item.name}
            key={index}
          />
        )
      )}
      <Redirect to="/404" />
    </Switch>
  );

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
  let isOpen = false;
  if (password === "%tempPassword!") {
    isOpen = true;
  }
  return (
    <>
      <Header
        logoAltText="Edcollab"
        logo={`${process.env.PUBLIC_URL}/static/images/logo.svg`}
        toggleDrawer={handleDrawerToggle}
        // toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
      />
      <div className={classNames(classes.panel, "theme-dark")}>
        <Sidebar
          routes={routes.items}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>{getRoutes}</Workspace>
        {/* <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        /> */}
      </div>

      <Snackbar
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClick={handleDialogOpen}
        className={classes.snackAlert}
      >
        <Alert
          severity="error"
          action={
            <IconButton aria-label="close" color="inherit">
              <NotificationImportantIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Typography>Click here to change password</Typography>
        </Alert>
      </Snackbar>
      <CustomModal
        OpenModal={OpenModal}
        handleDialogClose={handleDialogClose}
        title={"Please Provide your new password in the fields below"}
        dialogWidth="xs"
      >
        <Formik
          initialValues={{
            password: "",
            changepassword: "",
          }}
          validationSchema={Schema}
          onSubmit={(values, { resetForm }) => {
            axios({
              method: "patch",
              url: `${API_URL}/users/${id}`,
              data: {
                password: values.changepassword,
                updated: Date.now(),
              },
            })
              .then(() => {
                cogoToast.success("Please Login with your new password");
                resetForm();
                handleDialogClose();
                dispatch(userLogout());
              })
              .catch((error) => {
                cogoToast.success(`${error}`);
              });
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  name="password"
                  label="Enter New Password"
                  type="password"
                  fullWidth
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                <TextField
                  margin="dense"
                  id="changepassword"
                  name="changepassword"
                  label="Re-Enter Password"
                  type="password"
                  fullWidth
                  onChange={handleChange}
                  value={values.changepassword}
                  onBlur={handleBlur}
                  error={errors.changepassword && touched.changepassword}
                  helperText={
                    errors.changepassword &&
                    touched.changepassword &&
                    errors.changepassword
                  }
                />
                <DialogActions>
                  <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={handleDialogClose}
                  >
                    Close
                  </Button>
                  <Button type="reset" variant="outlined" color="primary">
                    Clear
                  </Button>
                  <Button type="submit" variant="outlined" color="primary">
                    Update
                  </Button>
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </CustomModal>
    </>
  );
};

export default Dashboard;
