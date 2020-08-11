import React from "react";
import MaterialTable from "material-table";
import Avatar from "react-avatar";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

//

import axios from "axios";
import { Formik, Form } from "formik";

import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
// import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

import { toast } from "react-toastify";
// import { Role } from "../../_helpers";
import "react-toastify/dist/ReactToastify.css";

// const styles = (theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   menu: {
//     width: 200,
//   },

//   card: {
//     minWidth: 275,
//   },

//   root: {
//     flexGrow: 1,
//     paddingBottom: theme.spacing(1),
//   },

//   appBar: {
//     padding: "10px",
//   },
// });

const StudentsTable = (props) => {
  const { students } = props;

  let history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
        },
      ],
    });
  };
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
    { title: "Phone", field: "phone", type: "numeric" },
    { title: "Admission ID", field: "admissionID" },
    { title: "Class", field: "stdclass" },
    { title: "Email", field: "email" },
  ];
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">{"title"}</DialogTitle> */}
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Edit User
        </DialogTitle>
        <DialogContent dividers>
          <Formik
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              axios({
                method: "POST",
                url: `/users`,
                data: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phone: values.phone,
                  photo: values.file,
                  bio: values.bio,
                  bloodgrp: values.bloodgrp,
                  stdclass: values.stdclass,
                  admissionID: values.admissionID,
                  // role: Role.student,
                },
              })
                .then((response) => {
                  toast.success(`🚀 Student Added!`, {
                    position: "top-right",
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    onClose: () =>
                      history.push(`/dashboard/student/create`, true),
                  });
                  resetForm();
                })
                .catch((error) => {
                  toast.error(`Error Adding Studentt`, {
                    position: "top-right",
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  resetForm();
                });
            }}
            initialValues={{
              firstName: "",
              lastName: "",
              middleName: "",
              email: "",
              gender: "",
              dob: "",
              phone: "",
              religion: "",
              photo: "",
              address: "",
              bloodgrp: "",
              bio: "",
              stdclass: "",
              admissionID: "",
            }}
            // validationSchema={validationSchema}
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
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          label="First Name"
                          placeholder="First Name"
                          fullWidth
                          margin="normal"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.firstName && touched.firstName}
                          helperText={
                            errors.firstName &&
                            touched.firstName &&
                            errors.firstName
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          label="Middle Name"
                          placeholder="Middle Name"
                          fullWidth
                          margin="normal"
                          name="middleName"
                          value={values.middleName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.middleName && touched.middleName}
                          helperText={
                            errors.middleName &&
                            touched.middleName &&
                            errors.middleName
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          label="Last Name"
                          placeholder="Last Name"
                          fullWidth
                          margin="normal"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.lastName && touched.lastName}
                          helperText={
                            errors.lastName &&
                            touched.lastName &&
                            errors.lastName
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          id="date"
                          label="Birthday"
                          type="date"
                          defaultValue="2017-05-24"
                          margin="normal"
                          name="dob"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.dob && touched.dob}
                          helperText={errors.dob && touched.dob && errors.dob}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          label="Phone Number"
                          placeholder="Phone Number"
                          fullWidth
                          margin="normal"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.phone && touched.phone}
                          helperText={
                            errors.phone && touched.phone && errors.phone
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          type="email"
                          label="Email"
                          placeholder="Email"
                          fullWidth
                          margin="normal"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email && errors.email
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          id="stdclass"
                          select
                          label="Class"
                          margin="normal"
                          name="stdclass"
                          value={values.stdclass}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.stdclass && touched.stdclass}
                          helperText={
                            errors.stdclass && touched.roleId && errors.stdclass
                          }
                        >
                          <MenuItem value="4">Student</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          id="BloodGroup"
                          select
                          label="Blood Group"
                          margin="normal"
                          name="bloodgrp"
                          value={values.bloodgrp}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.bloodgrp && touched.bloodgrp}
                          helperText={
                            errors.bloodgrp &&
                            touched.bloodgrp &&
                            errors.bloodgrp
                          }
                        >
                          <MenuItem value="1">A+</MenuItem>
                          <MenuItem value="2">A-</MenuItem>
                          <MenuItem value="3">B+</MenuItem>
                          <MenuItem value="4">B-</MenuItem>
                          <MenuItem value="5">O+</MenuItem>
                          <MenuItem value="6">O-</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          multiline
                          rowsMax="4"
                          id="admissionID"
                          label="Admission ID"
                          margin="normal"
                          name="admissionID"
                          value={values.admissionID}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.admissionID && touched.admissionID}
                          helperText={
                            errors.admissionID &&
                            touched.admissionID &&
                            errors.admissionID
                          }
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          multiline
                          rowsMax="4"
                          id="bio"
                          label="Short BIO"
                          margin="normal"
                          name="bio"
                          value={values.bio}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.bio && touched.bio}
                          helperText={errors.bio && touched.bio && errors.bio}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          id="Gender"
                          name="gender"
                          select
                          label="Gender"
                          margin="normal"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.gender && touched.gender}
                          helperText={
                            errors.gender && touched.gender && errors.gender
                          }
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          type="file"
                          fullWidth
                          id="Photo"
                          label="Photo"
                          margin="normal"
                          name="photo"
                          value={values.photo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.photo && touched.photo}
                          helperText={
                            errors.photo && touched.photo && errors.photo
                          }
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    size="small"
                  >
                    Update
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    size="small"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="secondary"
            variant="contained"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>

      <MaterialTable
        title="STUDENT LIST"
        columns={columns}
        data={students}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Student",
            onClick: (event, rowData) => handleClickOpen(),
          },
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) => handleDelete(rowData.id),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          filtering: false,
          sorting: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
      />
    </React.Fragment>
  );
};

export default StudentsTable;
