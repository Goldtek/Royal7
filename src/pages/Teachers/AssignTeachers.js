import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTeachers,
  fetchAssignedTeachers,
} from "../../redux/actions/teachersAction";
import { fetchSchoolSubjects } from "../../redux/actions/subjectActions";
import { fetchschoolClasses } from "../../redux/actions/schoolClassActions";
import AssignedTeachersList from "./TeachersTables/AssignedTeachersTable";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Role } from "../../_helpers";
import CustomDialog from "../../components/Modal/CustomDialog";
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

  // appBar: {
  //   padding: "1px",
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
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
});

const validationSchema = Yup.object().shape({
  subjectId: Yup.string().required("required"),
  session: Yup.string().required("required"),
  classId: Yup.string().required("required"),
  teacherId: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;
const AssignTeachers = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.authentication);
  const teachers = useSelector((state) => state.teachers.teachers);
  const subjects = useSelector((state) => state.subjects.subjects);
  const Classes = useSelector((state) => state.schoolClasses.schoolClasses);
  const [isOpen, setIsOPen] = React.useState(false);
  const assignTeachersList = useSelector(
    (state) => state.assignedTeachers.assignedTeachers
  );

  const schoolID = userAuth.user.schoolId;

  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };

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
    dispatch(fetchAssignedTeachers());
  }, [dispatch]);
  return (
    <Wrapper>
      <Helmet>
        <title>Assign Teachers</title>
      </Helmet>

      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/teachers/view">
              Teachers
            </Link>
            <Typography color="textPrimary">Assign Teacher</Typography>
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
              root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            onClick={handleDialogOpen}
          >
            Create Subject
          </Button>
        </Typography>
      </AppBar>
      <AssignedTeachersList assigned={assignTeachersList} />
      <CustomDialog
        OpenModal={isOpen}
        handleClose={handleDialogClose}
        title={"Create Class Teachers"}
        dialogWidth="sm"
      >
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            axios({
              method: "POST",
              url: `${API_URL}/assignedTeachers`,
              data: {
                id: uuidv4(),
                userId: values.teacherId,
                classId: values.classId,
                subjectId: values.subjectId,
                session: values.session,
                schoolId: schoolID,
                role: Role.Teacher,
                created: Date.now(),
              },
            })
              .then(() => {
                cogoToast.success("Teacher Assigned Added Successfully!");
                resetForm();
                dispatch(fetchAssignedTeachers());
              })
              .catch((error) => {
                cogoToast.error(`error assigning teacher `);
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
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
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
                          value={`${id}`}
                        >{`${firstName} ${lastName}`}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
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
                          value={classCode}
                        >{`${classCode}`}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
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
                        <MenuItem key={id} value={name}>{`${name}`}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      fullWidth
                      id="Session"
                      name="session"
                      label="Current Session"
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
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Assign Teachers
                </Button>{" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  type="button"
                  // onClick={() => getRandomString(6)}
                  onClick={handleDialogClose}
                >
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

AssignTeachers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignTeachers);
