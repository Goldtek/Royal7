import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import useMountEffect from "../../mountEffect";
import { fetchSchoolSubjects } from "../../redux/actions/subjectActions";
import { fetchschoolClasses } from "../../redux/actions/schoolClassActions";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
  appBar: {
    padding: "10px",
  },
}));
const validationSchema = Yup.object().shape({
  examClass: Yup.string().required("required"),
  session: Yup.string().required("required"),
  subject: Yup.string().required("required"),
  startTime: Yup.string().required("required"),
  stopTime: Yup.string().required("required"),
  examDate: Yup.string().required("required"),
  teacher: Yup.string().required("required"),
  description: Yup.string().nullable(),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const ScheduleExams = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.authentication);
  const subjects = useSelector((state) => state.subjects.subjects);
  const avalaibleClasses = useSelector(
    (state) => state.schoolClasses.schoolClasses
  );
  const schoolID = userAuth.user.schoolId;

  useMountEffect(() => {
    dispatch(fetchSchoolSubjects());
    dispatch(fetchschoolClasses());
  });
  return (
    <Wrapper>
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          axios({
            method: "POST",
            url: `${API_URL}/examSchedule`,
            data: {
              examClass: values.examClass,
              examDate: values.examDate,
              startTime: values.startTime,
              stopTime: values.stopTime,
              teacher: values.teacher,
              description: values.description,
              subject: values.subject,
              examTableId: props.id,
              schoolId: schoolID,
              created: Date.now(),
            },
          })
            .then(() => {
              cogoToast.success("Exams Schedule Successfully Created!");

              resetForm();
              setSubmitting(true);
              // history.push(`/sent/${values.description}`, true);
            })
            .catch((error) => {
              cogoToast.success("Error Occured,Please try again");
              resetForm();
              setSubmitting(true);
            });
        }}
        initialValues={{
          examClass: "",
          description: "",
          startTime: "",
          stopTime: "",
          session: "",
          examDate: "",
          subject: "",
          teacher: "",
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
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        id="examClass"
                        select
                        label="Select Class"
                        margin="normal"
                        name="examClass"
                        value={values.examClass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examClass && touched.examClass}
                        helperText={
                          errors.examClass && touched.roleId && errors.examClass
                        }
                      >
                        {avalaibleClasses.map(({ classCode, id }) => (
                          <MenuItem
                            key={id}
                            value={classCode}
                          >{`${classCode}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="time"
                        name="startTime"
                        label="Exam Start Time"
                        type="time"
                        // defaultValue="07:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        value={values.startTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.startTime && touched.startTime}
                        helperText={
                          errors.startTime &&
                          touched.startTime &&
                          errors.startTime
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="time"
                        label="Exam Stop Time"
                        type="time"
                        name="stopTime"
                        // defaultValue="07:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        value={values.stopTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.stopTime && touched.stopTime}
                        helperText={
                          errors.stopTime && touched.stopTime && errors.stopTime
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="date"
                        label="Exam Date"
                        type="date"
                        name="examDate"
                        // defaultValue="2017-05-24"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.examDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examDate && touched.examDate}
                        helperText={
                          errors.examDate && touched.examDate && errors.examDate
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Session"
                        select
                        placeholder="Session"
                        fullWidth
                        margin="normal"
                        name="session"
                        value={values.session}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.session && touched.session}
                        helperText={
                          errors.session && touched.session && errors.session
                        }
                      >
                        <MenuItem value="2010/2011">2010/2011</MenuItem>
                        <MenuItem value="2019/2020">2019/2020</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        id="subject"
                        select
                        label="Select Subject"
                        margin="normal"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subject && touched.subject}
                        helperText={
                          errors.subject && touched.subject && errors.subject
                        }
                      >
                        {subjects.map(({ name, id }) => (
                          <MenuItem key={id} value={name}>{`${name}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Teacher"
                        select
                        placeholder="Teacher"
                        fullWidth
                        margin="normal"
                        name="teacher"
                        value={values.teacher}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.teacher && touched.teacher}
                        helperText={
                          errors.teacher && touched.teacher && errors.teacher
                        }
                      >
                        <MenuItem value="STD5">Onah James</MenuItem>
                        <MenuItem value="STD6">Michael Joe</MenuItem>
                      </TextField>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={4} lg={4}>
<TextField
fullWidth
margin="normal"
label="Class Room"
name="classRoom"
value={values.classRoom}
onChange={handleChange}
onBlur={handleBlur}
error={errors.classRoom && touched.classRoom}
helperText={
errors.classRoom &&
touched.classRoom &&
errors.classRoom
}
/>
</Grid> */}
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Description"
                        placeholder="Description"
                        fullWidth
                        multiline
                        margin="normal"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.description && touched.description}
                        helperText={
                          errors.description &&
                          touched.description &&
                          errors.description
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
                    Schedule Exam
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
    </Wrapper>
  );
};

// ScheduleExams.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default ScheduleExams;
