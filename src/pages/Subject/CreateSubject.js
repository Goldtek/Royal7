import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSchoolSubjects,
  deleteSubject,
} from "../../redux/actions/subjectActions";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
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
  name: Yup.string().required("required"),
  code: Yup.string().nullable(),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateSubject = () => {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.authentication);
  const schoolSubjects = useSelector((state) => state.subjects.subjects);
  const userID = userAuth.user.id;
  const schoolID = userAuth.user.schoolId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchoolSubjects());
  }, [dispatch]);

  //  SUBJECT DELETE FUNCTION :::::::::::::::::::::::::::::::::::::::
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
        dispatch(deleteSubject(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  //  SUBJECT DELETE FUNCTION :::::::::::::::::::::::::::::::::::::::
  return (
    <Wrapper>
      <br />
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/teachers/view">
              Subject
            </Link>
            <Typography color="textPrimary">Create Subject</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>
      <AppBar position="static" color="primary" className={classes.appBar}>
        {/* <Typography color="inherit" className="flexs={12}pacer">
          TEACHERS LIST
        </Typography> */}
      </AppBar>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Formik
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              axios({
                method: "POST",
                url: `${API_URL}/subjects`,
                data: {
                  name: values.name,
                  code: values.code,
                  schoolId: schoolID,
                  userId: userID,
                  created: Date.now(),
                },
              })
                .then(() => {
                  cogoToast.success("Subject Created Successfully");
                  dispatch(fetchSchoolSubjects());
                  resetForm();
                  setSubmitting(true);
                  // history.push(`/sent/${values.description}`, true);
                })
                .catch((error) => {
                  cogoToast.error("Error Creating  Subject");
                  resetForm();
                  setSubmitting(true);
                });
            }}
            initialValues={{
              name: "",
              code: "",
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
                  <Card
                    className={classes.card}
                    style={{ marginTop: "5px", marginBottom: "20px" }}
                  >
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={12} lg={12}>
                          <TextField
                            label="Subject Name"
                            placeholder="Subject Name"
                            fullWidth
                            margin="normal"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.name && touched.name}
                            helperText={
                              errors.name && touched.name && errors.name
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={12} lg={12}>
                          <TextField
                            label="Subject Code"
                            placeholder="Subject Code"
                            fullWidth
                            margin="normal"
                            name="code"
                            value={values.code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.code && touched.code}
                            helperText={
                              errors.code && touched.code && errors.code
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
                        Create Subject
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
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MaterialTable
            title="Subjects"
            columns={[
              { title: "Subject Name", field: "name" },
              { title: "Subject Code", field: "code" },
            ]}
            data={schoolSubjects}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit Subject",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
              {
                icon: "delete",
                tooltip: "Delete Subject",
                onClick: (event, rowData) => handleCLickDelete(rowData.id),
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#EEE",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#292b2c",
                fontFamily: "Helvetica",
              },
              rowStyle: () => ({
                fontFamily: "Helvetica",
                fontSize: "0.89rem",
              }),
              exportButton: true,
            }}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

// CreateSubject.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default CreateSubject;
