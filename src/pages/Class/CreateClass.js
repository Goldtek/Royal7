import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchschoolClasses,
  deleteClass,
} from "../../redux/actions/schoolClassActions";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
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
  appBar: {
    padding: "10px",
  },
}));
const validationSchema = Yup.object().shape({
  sessionName: Yup.string().required("required"),
  stdClass: Yup.string().required("required"),
  classCode: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateClass = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getClasses = useSelector((state) => state.schoolClasses.schoolClasses);
  // const currDate = Date.now().format("MMMM Do YYYY");
  // console.log(currDate);
  // const mymon = Moment(currDate).format("dddd, MMMM Do YYYY, h:mm:ss a");

  // REMOVE CLASS FUNCTION ::::::::::::::::::::::::::::::::
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
        dispatch(deleteClass(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  // REMOVE CLASS FUNCTION ::::::::::::::::::::::::::::::::

  useEffect(() => {
    dispatch(fetchschoolClasses());
  }, [dispatch]);

  return (
    <Wrapper>
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
              <br />

              <Card>
                <Wrapper>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/dashboard/class">
                      Class
                    </Link>
                    <Typography color="textPrimary">New Class</Typography>
                  </Breadcrumbs>
                </Wrapper>
              </Card>

              <Card
                className={classes.card}
                style={{ marginTop: "5px", marginBottom: "20px" }}
              >
                <AppBar
                  position="static"
                  color="primary"
                  className={classes.appBar}
                >
                  <Typography color="inherit" className="flexs={12}pacer">
                    Create New Class
                  </Typography>
                </AppBar>

                <CardContent>
                  <Grid container spacing={3}>
                    {/* <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="Gender"
                        name="gender"
                        select
                        label="Choose Department"
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.gender && touched.gender}
                        helperText={
                          errors.gender && touched.gender && errors.gender
                        }
                      >
                        <MenuItem value="male">Science</MenuItem>
                        <MenuItem value="female">Arts</MenuItem>
                        <MenuItem value="female">Commercial</MenuItem>
                      </TextField>
                    </Grid> */}

                    <Grid item xs={12} sm={12} md={4} lg={4}>
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

                    <Grid item xs={12} sm={12} md={4} lg={4}>
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
                    <Grid item xs={12} sm={12} md={4} lg={4}>
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
                </CardContent>
              </Card>

              <Card>
                <Wrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    Create Class
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="reset"
                  >
                    {" "}
                    Cancel
                  </Button>
                </Wrapper>
              </Card>
            </Form>
          );
        }}
      </Formik>
      <br />
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MaterialTable
            title="View Classes"
            columns={[
              { title: "Class", field: "stdClass" },
              { title: "Class Code", field: "classCode" },
              { title: "Session", field: "sessionName" },
              { title: "Created", field: "created" },
            ]}
            data={getClasses}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit Class",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
              {
                icon: "delete",
                tooltip: "Delete Class",
                onClick: (event, rowData) => handleCLickDelete(rowData.id),
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#3f51b5",
                color: "#FFF",
              },
            }}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CreateClass;
