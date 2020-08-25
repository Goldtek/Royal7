import {
  Header,
  NotificationCenter,
  Sidebar,
  Workspace,
  Wrapper,
} from "../../components";
import React from "react";
import Moment from "react-moment";
import { useHistory, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent } from "../../redux/actions/studentActions";
import { MobileBreakpoint } from "../../styleVariables";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { AdminRoutes, TeacherRoutes } from "../../routes/SideBar/";
import useMountEffect from "../../mountEffect";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

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
  goback: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  avatar: {
    display: "inline-block",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      width: 128,
      height: 128,
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
      height: 64,
    },
    marginBottom: theme.spacing(1),
  },
  tabRoot: {
    textTransform: "initial",
    color: theme.palette.text.primary,
  },
  postInput: {
    border: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1) * 3,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1) * 2,
    },
    fontSize: "13px",
    outline: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));
const TabContainer = (props) => (
  <Typography component="div" className="pa-0">
    {props.children}
  </Typography>
);

const UserProfile = () => {
  const classes = useStyles();
  // const [state, dispatch] = useAppState();
  const dispatch = useDispatch();
  const [opened, setOpened] = React.useState(true);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  // const [openSpeedDial, setOpenSpeedDial] = React.useState(false);
  const userAuth = useSelector((state) => state.authentication);
  const student = useSelector((state) => state.student.student);
  let history = useHistory();
  // const dispatch = useDispatch();
  // console.log(student);
  let params = useParams();
  // let [routes, setRoutes] = useState([]);
  const [tab, setTab] = React.useState(0);
  const handleTabToggle = (event, tab) => setTab(tab);
  const { role } = userAuth.user;
  const {
    firstName,
    middleName,
    lastName,
    email,
    gender,
    dob,
    phone,
    // photo,
    shortbio,
    admissionId,
    stdclass,
    bloodgrp,
    created,
  } = student;
  React.useEffect(() => {
    dispatch(fetchSingleStudent(params.id));
  }, [dispatch, params.id]);
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

  // const handleSpeedDialOpen = () => setOpenSpeedDial(true);

  // const handleSpeedDialClose = () => setOpenSpeedDial(false);

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
          {/* PROFILE CONTENT GOES HERE ::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

          <br />
          <br />
          <Card>
            <Wrapper>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="#!">
                  Student
                </Link>
                <Typography color="textPrimary">Student Profile</Typography>
              </Breadcrumbs>
            </Wrapper>
          </Card>
          <AppBar position="static" color="primary" className={classes.appBar}>
            <Typography
              color="inherit"
              className={`${classes.typo} flexs={12}pacer`}
            >
              <Button
                classes={{
                  root: classes.goback, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                onClick={() => history.goBack()}
                // href="/dashboard/student/view"
              >
                Go Back
              </Button>
            </Typography>
          </AppBar>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <ProfileCard
                firstName={firstName}
                lastName={lastName}
                middleName={middleName}
                email={email}
                role={student.role}
                bio={shortbio}
                admissionid={admissionId}
                sex={gender}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={7}>
              <Card>
                <Tabs value={tab} onChange={handleTabToggle}>
                  <Tab label="Bio" classes={{ root: classes.tabRoot }} />
                  <Tab label="Edit Bio" classes={{ root: classes.tabRoot }} />
                  <Tab label="Photos" classes={{ root: classes.tabRoot }} />
                </Tabs>
                <Divider />
                {tab === 0 && (
                  <TabContainer>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Basic Information
                      </Typography>
                      <Grid
                        container
                        spacing={3}
                        alignItems="flex-start"
                        direction="row"
                        justify="space-between"
                      >
                        <Grid item>
                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Mobile
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              {phone}
                            </Typography>
                          </div>

                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Birthday
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              {dob}
                            </Typography>
                          </div>

                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Occupation
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              {student.role}
                            </Typography>
                          </div>

                          <div>
                            <Typography variant="caption" gutterBottom>
                              Created
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              {/* <Moment> {created}</Moment> */}
                              <Moment date={created} format="YYYY-MM-DD" />
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Extension
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              94
                            </Typography>
                          </div>

                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Mobile
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              +123 456 7890
                            </Typography>
                          </div>

                          <div className="mb-1">
                            <Typography variant="caption" gutterBottom>
                              Phone
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              +123 456 7890
                            </Typography>
                          </div>

                          <div>
                            <Typography variant="caption" gutterBottom>
                              Facebook
                            </Typography>
                            <Typography
                              variant="body1"
                              className="font-weight-bold"
                            >
                              @geraldmorris
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    {/* <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Bio
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum id ligula porta felis euismod semper. Nullam
                        quis risus eget urna mollis ornare vel eu leo. Nullam
                        quis risus eget urna mollis ornare vel eu leo.
                      </Typography>
                    </CardContent> */}
                  </TabContainer>
                )}
                {tab === 1 && (
                  <TabContainer>
                    <CardContent>
                      <form>
                        <Card
                          className={classes.card}
                          style={{ marginTop: "5px", marginBottom: "20px" }}
                        >
                          <CardContent>
                            <Grid container spacing={3}>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={firstName}
                                    name="firstName"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    {" "}
                    First Name
                  </label> */}
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={middleName}
                                    name="middleName"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">Name</label> */}
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={lastName}
                                    name="lastName"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                                </div>
                              </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="email"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={email}
                                    name="email"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={dob}
                                    name="dob"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={admissionId}
                                    name="admissionId"
                                    required
                                  />
                                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <select
                                  className="browser-default custom-select mb-4"
                                  required
                                >
                                  <option defaultValue={stdclass}>
                                    {stdclass}
                                  </option>
                                  <option value="2">Report a bug</option>
                                  <option value="3">Feature request</option>
                                  <option value="4">Feature request</option>
                                </select>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <select
                                  className="browser-default custom-select mb-4"
                                  name="bloodgrp"
                                >
                                  <option defaultValue={bloodgrp}>
                                    {bloodgrp}
                                  </option>
                                  <option value="">A+</option>
                                  <option value="2">A-</option>
                                  <option value="3">B+</option>
                                  <option value="4">B-</option>
                                  <option value="5">O+</option>
                                  <option value="6">O-</option>
                                </select>
                              </Grid>
                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <select className="browser-default custom-select mb-4">
                                  <option defaultValue={gender}>
                                    {gender}
                                  </option>
                                  {gender === "Male" ? (
                                    <option value="Female">Female</option>
                                  ) : (
                                    <option value="Male">Male</option>
                                  )}
                                </select>
                              </Grid>

                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form">
                                  <textarea
                                    id="materialContactFormMessage"
                                    className="form-control md-textarea"
                                    // rows="1"
                                    // defaultValue={shortbio}
                                  >
                                    {shortbio}
                                  </textarea>
                                  {/* <label for="materialContactFormMessage">{shortbio}</label> */}
                                </div>
                              </Grid>

                              <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="md-form mt-3">
                                  <input
                                    type="text"
                                    id="materialSubscriptionFormPasswords"
                                    className="form-control"
                                    defaultValue={phone}
                                    name="phone"
                                  />
                                </div>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>

                        <Card>
                          <Wrapper>
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              type="submit"
                              // disabled={isSubmitting}
                            >
                              {/* <SaveIcon className={classes.rightIcon} />  */}
                              Update Profile
                            </Button>{" "}
                          </Wrapper>
                        </Card>
                      </form>
                    </CardContent>
                  </TabContainer>
                )}
                {tab === 2 && (
                  <TabContainer>
                    <GridList cols={3} spacing={1} cellHeight={180}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tile) => (
                        <GridListTile key={tile}>
                          <img
                            src={`${process.env.PUBLIC_URL}/static/images/unsplash/${tile}.jpg`}
                            alt={tile}
                          />
                          <GridListTileBar
                            title={tile}
                            subtitle={<span>Gallery image: {tile}</span>}
                            actionIcon={
                              <IconButton>
                                <FavoriteIcon />
                              </IconButton>
                            }
                          />
                        </GridListTile>
                      ))}
                    </GridList>
                  </TabContainer>
                )}
              </Card>
            </Grid>
          </Grid>

          {/* PROFILE CONTENT GOES HERE ::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        </Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>
    </>
  );
};

export default UserProfile;
