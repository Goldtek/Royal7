// GENERAL IMPORT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Avatar from "react-avatar";
import MaterialTable from "material-table";
import Moment from "react-moment";
import { Wrapper } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTeacher,
  fetchSingleTeacher,
  updateTeacher,
} from "../../../redux/actions/teachersAction";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// GENERAL IMPORT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// MODAL DIALGOUE IMPORT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
// MODAL DIALGOUE IMPORT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// PROFILE CARD ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "../Card/ProfileCard";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfoIcon from "@material-ui/icons/Info";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";
import serializeForm from "form-serialize";
import { DialogContent } from "@material-ui/core";

// PROFILE CARD ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
// STYLES :::::::::::::::::::::::::::::::::::::::::::::::::::
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
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const styles1 = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
});

// STYLES :::::::::::::::::::::::::::::::::::::::::::::::::::

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
const Transition = (props) => {
  return <Slide direction="left" {...props} />;
};
const TabContainer = (props) => (
  <Typography component="div" className="pa-0">
    {props.children}
  </Typography>
);
const TeacherTable = (props) => {
  const classes = useStyles();
  const { teachers } = props;
  const dispatch = useDispatch();
  // let history = useHistory();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const teacherObj = useSelector((state) => state.teacher);
  const { teacher, loading, error } = teacherObj;
  console.log(teacherObj);
  const [tab, setTab] = React.useState(0);
  const handleTabToggle = (event, tab) => setTab(tab);

  // DESTRUCTURE TEACHER OBJECT
  const {
    firstName,
    middleName,
    lastName,
    email,
    gender,
    dob,
    phone,
    idno,
    //photo,
    shortbio,
    stdclass,
    bloodgrp,
    created,
  } = teacher;
  // DESTRUCTURE TEACHER OBJECT
  // MODAL FUNCTION :::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(fetchSingleTeacher(id));
    // console.log(id);
    setOpen(true);
  };

  const handleClose = (id) => {
    dispatch(fetchSingleTeacher(id));
    setOpen(false);
  };
  // MODAL FUNCTION :::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // HANDLE FORM SUBMIT :::::::::::::::::::::::::::::::::::::::::
  const handleUpdate = (e) => {
    const userId = teacher.id;
    e.preventDefault();
    const formDetails = serializeForm(e.target, { hash: true });
    const userDetails = { ...formDetails, userId };
    dispatch(updateTeacher(userDetails));
    // console.log(userDetails);
  };
  // HANDLE FORM SUBMIT :::::::::::::::::::::::::::::::::::::::::

  //  TEACHER DELETE FUNCTION :::::::::::::::::::::::::::::::::::::::
  const handleCLickDelete = async (id) => {
    Swal.fire({
      title: `Are you sure ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "auto",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTeacher(id));
        // dispatch(fetchStudents());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  //  TEACHER DELETE FUNCTION :::::::::::::::::::::::::::::::::::::::

  //  TABLE INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::
  const columns = [
    { title: "id", field: "id", hidden: true },
    {
      title: "Avatar",
      render: (rowData) => (
        <Avatar
          maxInitials={1}
          size={40}
          round={true}
          name={rowData === undefined ? " " : rowData.firstName}
        />
      ),
    },
    { title: "Name", field: "firstName" },
    { title: "Surname", field: "lastName" },
    { title: "Phone", field: "phone" },
    { title: "ID", field: "idno" },
    { title: "Sex", field: "gender" },
    { title: "Email", field: "email" },
  ];
  //  TABLE INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::
  return (
    <React.Fragment>
      <MaterialTable
        title="TEACHERS LIST"
        columns={columns}
        data={teachers}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Teacher",
            onClick: (event, rowData) => handleClickOpen(rowData.id),
          },
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete Teacher",
            onClick: (event, rowData) => handleCLickDelete(rowData.id),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          filtering: false,
          sorting: true,
          headerStyle: {
            backgroundColor: "#EEE",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#292b2c",
            fontFamily: "Helvetica",
          },

          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#f7f7f7" : "#FFF",
            fontFamily: "Helvetica",
            fontSize: "0.89rem",
          }),
          exportButton: true,
        }}
      />
      {loading ? (
        <Dialog open={open} aria-labelledby="simple-dialog-title">
          {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}
          <DialogContent>
            <div className={classes.loader}>
              {" "}
              <CircularProgress className={classes.progress} size={60} />
              <Typography color="inherit" className="flexs={12}pacer">
                Loading...
              </Typography>
            </div>
          </DialogContent>
        </Dialog>
      ) : error ? (
        <Dialog open={open} aria-labelledby="simple-dialog-title">
          {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}

          <Snackbar open={true} onClick={handleClose}>
            <MySnackbarContentWrapper
              // onClose={this.handleClose}
              variant="error"
              message="Error , Please Check Your Connection"
            />
          </Snackbar>
        </Dialog>
      ) : (
        <React.Fragment>
          {/*  MODAL DIALOGUE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            // fullScreen
            maxWidth="xl"
            aria-labelledby="form-dialog-title"
          >
            <Card>
              <Wrapper>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="#!">
                    Teacher
                  </Link>
                  <Typography color="textPrimary">Teacher Profile</Typography>
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
                <Button
                  classes={{
                    root: classes.goback, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                  // onClick={() => history.goBack()}
                  // href="/dashboard/student/view"
                  onClick={handleClose}
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
                  role={teacher.role}
                  bio={shortbio}
                  idno={idno}
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
                                {teacher.role}
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
                        <form onSubmit={handleUpdate}>
                          <Card
                            className={classes.card}
                            style={{ marginTop: "5px", marginBottom: "20px" }}
                          >
                            <CardContent>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="firstName"
                                    className="grey-text font-weight-light"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    name="firstName"
                                    required
                                    defaultValue={firstName}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="middleName"
                                    className="grey-text font-weight-light"
                                  >
                                    Middle Name
                                  </label>
                                  <input
                                    type="text"
                                    id="middleName"
                                    className="form-control"
                                    defaultValue={middleName}
                                    name="middleName"
                                    required
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="lastName"
                                    className="grey-text font-weight-light"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    defaultValue={lastName}
                                    name="lastName"
                                    required
                                  />
                                </Grid>
                              </Grid>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="email"
                                    className="grey-text font-weight-light"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    defaultValue={email}
                                    name="email"
                                    required
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="dob"
                                    className="grey-text font-weight-light"
                                  >
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="text"
                                    id="dob"
                                    className="form-control"
                                    defaultValue={dob}
                                    name="dob"
                                    required
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="admissionId"
                                    className="grey-text font-weight-light"
                                  >
                                    ID
                                  </label>
                                  <input
                                    type="text"
                                    id="IDNO"
                                    className="form-control"
                                    defaultValue={idno}
                                    name="idno"
                                    required
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                      <label
                                        className="input-group-text"
                                        htmlFor="stdclass"
                                      >
                                        Class
                                      </label>
                                    </div>
                                    <select
                                      className="custom-select"
                                      id="stdclass"
                                      defaultValue={stdclass}
                                      name="stdclass"
                                    >
                                      <option value="STD 5">STD 5</option>
                                      <option value="STD 6">STD 6</option>
                                      <option value="STD 7">STD 7</option>
                                    </select>
                                  </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                      <label
                                        className="input-group-text"
                                        htmlFor="bloodgrp"
                                      >
                                        Blood Group
                                      </label>
                                    </div>
                                    <select
                                      className="custom-select"
                                      id="bloodgrp"
                                      name="bloodgrp"
                                      defaultValue={bloodgrp}
                                    >
                                      <option value="A+">A+</option>
                                      <option value="A-">A-</option>
                                      <option value="B+">B+</option>
                                      <option value="B-">B-</option>
                                      <option value="0+">O+</option>
                                      <option value="0-">O-</option>
                                    </select>
                                  </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                      <label
                                        className="input-group-text"
                                        htmlFor="gender"
                                      >
                                        Gender
                                      </label>
                                    </div>
                                    <select
                                      className="custom-select"
                                      id="gender"
                                      name="gender"
                                      defaultValue={gender}
                                    >
                                      <option defaultValue={gender}>
                                        {gender}
                                      </option>
                                      {gender === "Male" ? (
                                        <option value="Female">Female</option>
                                      ) : (
                                        <option value="Male">Male</option>
                                      )}
                                    </select>
                                  </div>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                  <label
                                    htmlFor="phone"
                                    className="grey-text font-weight-light"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    name="phone"
                                    defaultValue={phone}
                                    required
                                  />
                                </Grid>

                                <Grid item xs={12} sm={6} md={8} lg={8}>
                                  <label htmlFor="textarea">Your message</label>
                                  <textarea
                                    type="text"
                                    id="textarea"
                                    className="lg-textarea form-control rounded-0"
                                    name="shortbio"
                                    row="3"
                                    defaultValue={shortbio}
                                  ></textarea>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>

                          <Card>
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

            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                classes={{
                  root: classes.goback, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
          {/* MODAL DIALOGUE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TeacherTable;
