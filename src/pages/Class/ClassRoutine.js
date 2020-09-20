import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchschoolClasses,
  fetchschoolClassRoutine,
} from "../../redux/actions/schoolClassActions";
import { fetchSchoolSubjects } from "../../redux/actions/subjectActions";
import { fetchTeachers } from "../../redux/actions/teachersAction";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CustomDialog from "../../containers/Dialogue/CustomModal";
import ClassRoutineTable from "./ClassTables/ClassRoutineTable";
import Slide from "@material-ui/core/Slide";
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
  classCode: Yup.string().required("required"),
  day: Yup.string().required("required"),
  section: Yup.string().required("required"),
  subjectName: Yup.string().required("required"),
  timeSlot: Yup.string().required("required"),
  teacherId: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const DialogTransition = (props) => {
  return <Slide direction="up" {...props} />;
};
const ClassRoutine = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.authentication);
  const schlClasses = useSelector((state) => state.schoolClasses.schoolClasses);
  const teachers = useSelector((state) => state.teachers.teachers);
  const subjects = useSelector((state) => state.subjects.subjects);
  const classRoutines = useSelector(
    (state) => state.classRoutines.classRoutines
  );
  const schoolID = userAuth.user.schoolId;
  const [isOpen, setIsOPen] = React.useState(false);
  //   console.warn(classRoutines);
  useEffect(() => {
    dispatch(fetchschoolClasses());
    dispatch(fetchschoolClassRoutine());
    dispatch(fetchSchoolSubjects());
    dispatch(fetchTeachers());
    return () => {
      dispatch(fetchschoolClasses());
    };
  }, [dispatch]);
  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };
  return (
    <Wrapper>
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/dashboard/">
              Class
            </Link>
            <Typography color="textPrimary">Class Routine</Typography>
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
            Create Routine Table
          </Button>
        </Typography>
      </AppBar>
      <ClassRoutineTable classRoutinesArr={classRoutines} />
      <CustomDialog
        OpenModal={isOpen}
        handleClose={handleDialogClose}
        title={"Create Class Routine Table"}
        dialogWidth="md"
        Transition={DialogTransition}
      >
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            axios({
              method: "POST",
              url: `${API_URL}/classRoutine`,
              data: {
                day: values.day,
                schoolClass: values.classCode,
                section: values.section,
                timeSlot: values.timeSlot,
                subject: values.subjectName,
                teacherId: values.teacherId,
                schoolId: schoolID,
              },
            })
              .then((response) => {
                cogoToast.success("Routine Created Successfully");
                dispatch(fetchschoolClassRoutine());
                resetForm();
                setSubmitting(true);
                // history.push(`/sent/${values.description}`, true);
              })
              .catch((error) => {
                cogoToast.error(`${error}`);
                resetForm();
                setSubmitting(true);
              });
          }}
          initialValues={{
            classCode: "",
            day: "",
            timeSlot: "",
            section: "",
            subjectName: "",
            teacherId: "",
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
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      label="Day"
                      select
                      placeholder="Day"
                      fullWidth
                      margin="normal"
                      name="day"
                      value={values.day}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.day && touched.day}
                      helperText={errors.day && touched.day && errors.day}
                    >
                      <MenuItem value="Monday">Monday</MenuItem>
                      <MenuItem value="Tuesday">Tuesday</MenuItem>
                      <MenuItem value="Wednesday">Wednesday</MenuItem>
                      <MenuItem value="Thursday">Thursday</MenuItem>
                      <MenuItem value="Friday">Friday</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextField
                      label="Time Slot"
                      placeholder="10.00 am-11.00 am"
                      fullWidth
                      name="timeSlot"
                      value={values.timeSlot}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.timeSlot && touched.timeSlot}
                      helperText={
                        errors.timeSlot && touched.timeSlot && errors.timeSlot
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      fullWidth
                      id="classCode"
                      select
                      label="Select Class"
                      margin="normal"
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
                    >
                      {schlClasses.map(({ classCode, id }) => (
                        <MenuItem
                          key={id}
                          value={classCode}
                        >{`${classCode}`}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      label="Section"
                      placeholder="eg Junior Section"
                      fullWidth
                      name="section"
                      value={values.section}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.section && touched.section}
                      helperText={
                        errors.section && touched.section && errors.section
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      fullWidth
                      id="subjectName"
                      select
                      label="Select Subject"
                      margin="normal"
                      name="subjectName"
                      value={values.subjectName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.subjectName && touched.subjectName}
                      helperText={
                        errors.subjectName &&
                        touched.subjectName &&
                        errors.subjectName
                      }
                    >
                      {subjects.map(({ name, id }) => (
                        <MenuItem key={id} value={name}>{`${name}`}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
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
                </Grid>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Create
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

// ClassRoutine.propTypes = {
//   classRoutines: PropTypes.array.isRequired,
// };

export default ClassRoutine;
