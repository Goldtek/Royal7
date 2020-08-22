import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeachers } from "../../redux/actions/teachersAction";
import { fetchSchoolSubjects } from "../../redux/actions/subjectActions";
import { fetchschoolClasses } from "../../redux/actions/schoolClassActions";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Role } from "../../_helpers";
import cogoToast from "cogo-toast";

const styles = (theme) => ({
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
  },
});

const validationSchema = Yup.object().shape({
  subjectId: Yup.number().required("required"),
  session: Yup.string().required("required"),
  classId: Yup.string().required("required"),
  teacherId: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;
const AssignTeachers = (props) => {
  const { classes } = props;
  const userAuth = useSelector((state) => state.authentication);
  const teachers = useSelector((state) => state.teachers.teachers);
  const subjects = useSelector((state) => state.subjects.subjects);
  const Classes = useSelector((state) => state.schoolClasses.schoolClasses);
  const dispatch = useDispatch();
  const schoolID = userAuth.user.schoolId;
  // console.log(teachers);
  // const [randPassWord, setRandPassword] = useState("")

  // const getRandomString = (length) => {
  //   const randomChars =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let result = "";
  //   for (let i = 0; i < length; i++) {
  //     result += randomChars.charAt(
  //       Math.floor(Math.random() * randomChars.length)
  //     );
  //   }

  //   // this.setState({ random: result });
  //   // console.log(this.state.random);
  // };

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchSchoolSubjects());
    dispatch(fetchschoolClasses());
  }, [dispatch]);
  return (
    <Wrapper>
      <Helmet>
        <title>Assign Teachers</title>
      </Helmet>
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          axios({
            method: "POST",
            url: `${API_URL}/users`,
            data: {
              id: uuidv4(),
              schoolId: schoolID,
              role: Role.Student,
              created: Date.now(),
            },
          })
            .then(() => {
              cogoToast.success("Student Added Successfully!");
              resetForm();
            })
            .catch((error) => {
              cogoToast.error(error);
              resetForm();
            });
        }}
        initialValues={{
          teacherId: "",
          classId: "",
          subjectId: "",
          session: "",
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <br />
              <br />
              <Card>
                <Wrapper>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/dashboard/teachers/view">
                      Teachers
                    </Link>
                    <Typography color="textPrimary">Teacher List</Typography>
                  </Breadcrumbs>
                </Wrapper>
              </Card>
              <AppBar
                position="static"
                color="primary"
                className={classes.appBar}
              >
                {/* <Typography color="inherit" className="flexs={12}pacer">
          TEACHERS LIST
        </Typography> */}
              </AppBar>
              <Card
                className={classes.card}
                style={{ marginTop: "5px", marginBottom: "20px" }}
              >
                {/* <AppBar
                  position="static"
                  color="primary"
                  className={classes.appBar}
                >
                  <Typography
                    color="inherit"
                    className={`${classes.typo} flexs={12}pacer`}
                  >
                    FILL STUDENT INFO
                  </Typography>
                </AppBar> */}
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="Teacher"
                        select
                        label="Select Teacher"
                        margin="normal"
                        name="teacherId"
                        value={values.teacherId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.teacherId && touched.teacherId}
                        helperText={
                          errors.teacherId &&
                          touched.teacherId &&
                          errors.teacherId
                        }
                      >
                        {teachers.map(({ firstName, lastName, id }) => (
                          <MenuItem
                            key={id}
                            value={id}
                          >{`${firstName} ${lastName}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="classId"
                        select
                        label="Select Class"
                        margin="normal"
                        name="classId"
                        value={values.classId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.classId && touched.classId}
                        helperText={
                          errors.classId && touched.roleId && errors.classId
                        }
                      >
                        {Classes.map(({ classCode, id }) => (
                          <MenuItem
                            key={id}
                            value={id}
                          >{`${classCode}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="subjectId"
                        select
                        label="Select Subject"
                        margin="normal"
                        name="subjectId"
                        value={values.subjectId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subjectId && touched.subjectId}
                        helperText={
                          errors.subjectId &&
                          touched.subjectId &&
                          errors.subjectId
                        }
                      >
                        {subjects.map(({ name, id }) => (
                          <MenuItem key={id} value={id}>{`${name}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="Session"
                        name="session"
                        label="Current Session"
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                        value={values.session}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.session && touched.session}
                        helperText={
                          errors.session && touched.session && errors.session
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
                    disabled={isSubmitting}
                  >
                    Assign Teachers
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="reset"
                    // onClick={() => getRandomString(6)}
                  >
                    Cancel
                  </Button>
                </Wrapper>
              </Card>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

AssignTeachers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignTeachers);
