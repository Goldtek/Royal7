import {
  Header,
  NotificationCenter,
  Sidebar,
  Workspace,
  Wrapper,
} from "../../components";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MobileBreakpoint } from "../../styleVariables";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { AdminRoutes, TeacherRoutes } from "../../routes/SideBar/";
import useMountEffect from "../../mountEffect";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ScheduleForm from "./ScheduleForm";
import ExamTimeTableList from "./Table/ExamTimeTableList";
import TeacherExamTimeTable from "./Table/TeacherExamTimeTable";
import Modal from "../../components/Modal/CustomDialog";

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
  createbtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 25px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));
const ExamTimeTable = ({ history }) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const userAuth = useSelector((state) => state.authentication);
  let params = useParams();

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const { role } = userAuth.user;
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
          <Wrapper>
            <br />
            <Card>
              <Wrapper>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="/dashboard/exam/create">
                    Exam
                  </Link>
                  <Typography color="textPrimary">Exam Time Table</Typography>
                </Breadcrumbs>
              </Wrapper>
            </Card>
            <AppBar
              position="static"
              color="primary"
              className={classes.appBar}
            >
              <Typography
                color="inherit"
                className={`${classes.typo} flexs={12}pacer`}
              >
                {role === "Admin" && (
                  <Button
                    classes={{
                      root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                      label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    }}
                    onClick={handleDialogOpen}
                  >
                    Populate Table
                  </Button>
                )}{" "}
                <Button
                  classes={{
                    root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                  onClick={history.goBack}
                >
                  Go Back
                </Button>
              </Typography>
            </AppBar>
            {/* SCHOOL EXAMS */}
            {/* <ScheduleExams id={params.id} /> */}
            {/* SCHOOL EXAMS */}
            {/* EXAM TABLE ::::::::::::::::::::::::::::::::::::::: */}

            {role === "Admin" && <ExamTimeTableList />}
            {role === "Teacher" && <TeacherExamTimeTable />}
            {/* EXAM TABLE ::::::::::::::::::::::::::::::::::::::: */}

            {/* CUSTOM DIALOG ::::::::::::::::::::::::::::::::::::::::: */}
            <Modal
              OpenModal={isOpen}
              title={"Create Exam TimeTable"}
              dialogWidth="md"
            >
              <ScheduleForm
                sessionId={params.id}
                handleClose={handleDialogClose}
              />
            </Modal>
            {/* CUSTOM DIALOG ::::::::::::::::::::::::::::::::::::::::: */}
          </Wrapper>
        </Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>
    </>
  );
};

export default ExamTimeTable;