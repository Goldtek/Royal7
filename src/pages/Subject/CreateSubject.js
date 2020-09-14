import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSchoolSubjects,
  deleteSubject,
} from "../../redux/actions/subjectActions";
import { fetchschoolClasses } from "../../redux/actions/schoolClassActions";
import { Helmet } from "react-helmet";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import CustomDialog from "./Modal/CustomDialog";
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
  name: Yup.string().required("required"),
  code: Yup.string().required("required"),
  classId: Yup.string().required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateSubject = () => {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.authentication);
  const schoolSubjects = useSelector((state) => state.subjects.subjects);
  const schClasses = useSelector((state) => state.schoolClasses.schoolClasses);
  const userID = userAuth.user.id;
  const schoolID = userAuth.user.schoolId;
  const [isOpen, setIsOPen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };
  useEffect(() => {
    dispatch(fetchSchoolSubjects());
    dispatch(fetchschoolClasses());
  }, [dispatch]);

  return (
    <Wrapper>
      <Helmet>
        <title>Create Subject</title>
      </Helmet>
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/subject/create">
              Subject
            </Link>
            <Typography color="textPrimary">Create Subject</Typography>
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
      <MaterialTable
        title="Subjects"
        columns={[
          { title: "Subject Name", field: "name" },
          { title: "Subject Code", field: "code" },
          { title: "Class", field: "schClass" },
        ]}
        data={schoolSubjects}
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
                dispatch(deleteSubject(oldData.id));
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
          rowStyle: () => ({
            fontFamily: "Helvetica",
            fontSize: "0.89rem",
          }),
          exportButton: true,
        }}
      />
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title={""}
        dialogWidth="sm"
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Formik
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                axios({
                  method: "POST",
                  url: `${API_URL}/schoolSubjects`,
                  data: {
                    name: values.name,
                    code: values.code,
                    schClass: values.classId,
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
                classId: "",
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
                    <Grid container>
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
                          {schClasses.map(({ classCode, id }) => (
                            <MenuItem
                              key={id}
                              value={classCode}
                            >{`${classCode}`}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      type="submit"
                    >
                      Create Subject
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

            <br />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
        </Grid>
      </CustomDialog>
    </Wrapper>
  );
};

// CreateSubject.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default CreateSubject;
