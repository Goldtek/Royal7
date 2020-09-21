import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchschoolClasses,
  deleteClass,
} from "../../redux/actions/schoolClassActions";
import CustomDialog from "../../containers/Dialogue/CustomModal";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import cogoToast from "cogo-toast";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },

  card: {
    minWidth: 275,
  },

  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(1),
  },
  // appBar: {
  //   padding: "10px",
  // },
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
const validationSchema = Yup.object().shape({
  sessionName: Yup.string().required("required"),
  stdClass: Yup.string().required("required"),
  classCode: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateClass = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getClasses = useSelector((state) => state.schoolClasses.schoolClasses);
  const userAuth = useSelector((state) => state.authentication);
  const [isOpen, setIsOPen] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const schoolID = userAuth.user.schoolId;
  // const currDate = Date.now().format("MMMM Do YYYY");
  console.log(disable);
  // const mymon = Moment(currDate).format("dddd, MMMM Do YYYY, h:mm:ss a");

  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };
  useEffect(() => {
    dispatch(fetchschoolClasses());
    setDisable(userAuth.user.role);
  }, [dispatch, userAuth.user.role]);

  return (
    <Wrapper>
      <Helmet>
        <title>Create Class</title>
      </Helmet>
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/class/create">
              Class
            </Link>
            <Typography color="textPrimary">Create Class</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Typography
          color="inherit"
          className={`${classes.typo} flexs={12}pacer`}
        >
          {disable === "Admin" ? (
            <Button
              classes={{
                root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
              onClick={handleDialogOpen}
            >
              Create Class
            </Button>
          ) : (
            <Button></Button>
          )}
        </Typography>
      </AppBar>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {userAuth.user.role === "Admin" && (
            <MaterialTable
              title="View Classes"
              columns={[
                { title: "Class", field: "stdClass" },
                { title: "Class Code", field: "classCode" },
                { title: "Session", field: "sessionName" },
                { title: "Created", field: "created" },
              ]}
              data={getClasses}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      // const dataUpdate = [...data];
                      // const index = oldData.tableData.id;
                      // dataUpdate[index] = newData;
                      // setData([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      dispatch(deleteClass(oldData.id));
                      resolve();
                    }, 1000);
                  }),
              }}
              options={{
                headerStyle: {
                  backgroundColor: "#EEE",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#292b2c",
                  fontFamily: "Helvetica",
                },
              }}
            />
          )}
          {userAuth.user.role === "Teacher" && (
            <MaterialTable
              title="View Classes"
              columns={[
                { title: "Class", field: "stdClass" },
                { title: "Class Code", field: "classCode" },
                { title: "Session", field: "sessionName" },
                { title: "Created", field: "created" },
              ]}
              data={getClasses}
              options={{
                headerStyle: {
                  backgroundColor: "#EEE",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#292b2c",
                  fontFamily: "Helvetica",
                },
              }}
            />
          )}
        </Grid>
      </Grid>
      <CustomDialog
        OpenModal={isOpen}
        handleClose={handleDialogClose}
        title={"Create School Classes"}
        dialogWidth="sm"
      >
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            axios({
              method: "POST",
              url: `${API_URL}/schoolClasses`,
              data: {
                stdClass: values.stdClass,
                sessionName: values.sessionName,
                classCode: values.classCode,
                schoolId: schoolID,
                created: Date.now(),
              },
            })
              .then(() => {
                cogoToast.success("Class Created Successfully");
                resetForm();
                setSubmitting(true);
                // history.push(`/sent/${values.email}`, true);
                dispatch(fetchschoolClasses());
              })
              .catch((error) => {
                cogoToast.error(`${error}`);
                resetForm();
                setSubmitting(true);
              });
          }}
          initialValues={{
            stdClass: "",
            classCode: "",
            sessionName: "",
          }}
          validationSchema={validationSchema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              // isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      label="Class"
                      placeholder="Class"
                      fullWidth
                      margin="normal"
                      name="stdClass"
                      value={values.stdClass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.stdClass && touched.stdClass}
                      helperText={
                        errors.stdClass && touched.stdClass && errors.stdClass
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="classCode"
                      label="Class Code"
                      placeholder="Class Code"
                      name="classCode"
                      value={values.classCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.classCode && touched.classCode}
                      helperText={
                        errors.classCode &&
                        touched.classCode &&
                        errors.classCode
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      label="Session"
                      placeholder="Session"
                      fullWidth
                      margin="normal"
                      name="sessionName"
                      value={values.sessionName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.sessionName && touched.sessionName}
                      helperText={
                        errors.sessionName &&
                        touched.sessionName &&
                        errors.sessionName
                      }
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Create Class
                </Button>{" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  type="button"
                  onClick={handleDialogClose}
                >
                  {" "}
                  Close
                </Button>
              </Form>
            );
          }}
        </Formik>
      </CustomDialog>
    </Wrapper>
  );
};

export default CreateClass;
