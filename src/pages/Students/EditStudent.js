import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { useHistory, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent } from "../../redux/actions/studentActions";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },

  cardimg: {
    maxWidth: 300,
    // margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
  // card: {
  //   maxWidth: "50%",
  //   margin: "auto",
  // },
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const EditStudentDetail = () => {
  // state = { expanded: false };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(true);
    // this.setState((state) => ({ expanded: !state.expanded }));
  };
  let history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  // console.log(student);
  let params = useParams();
  const {
    firstName,
    middleName,
    lastName,
    email,
    gender,
    dob,
    phone,
    photo,
    shortbio,
    admissionId,
    stdclass,
    bloodgrp,
  } = student;

  React.useEffect(() => {
    dispatch(fetchSingleStudent(params.id));
  }, [fetchSingleStudent, dispatch]);

  const submitForm = () => {
    axios({
      method: "POST",
      url: `${API_URL}/users`,
      data: {
        // firstName: values.firstName,
        // lastName: values.lastName,
        // email: values.email,
        // phone: values.phone,
        // dob: values.dob,
        // photo: values.file,
        // bio: values.bio,
        // bloodgrp: values.bloodgrp,
        // stdclass: values.stdclass,
        // admissionId: values.admissionId,
        // role: Role.Student,
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
          onClose: () => history.push(`/dashboard/student/create`, true),
        });
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
        // resetForm();
      });
  };
  return (
    <Wrapper>
      <ToastContainer />
      <Card className={classes.cardimg}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/unsplash/5.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
      <form>
        <Card
          className={classes.card}
          style={{ marginTop: "5px", marginBottom: "20px" }}
        >
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={firstName}
                    name="firstName"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    {" "}
                    First Name
                  </label> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={middleName}
                    name="middleName"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">Name</label> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={lastName}
                    name="lastName"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="email"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={email}
                    name="email"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={dob}
                    name="dob"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={admissionId}
                    name="admissionId"
                    required
                  />
                  {/* <label htmlFor="materialSubscriptionFormPasswords">
                    Name
                  </label> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <select className="browser-default custom-select mb-4" required>
                  <option defaultValue={stdclass}>{stdclass}</option>
                  <option value="2">Report a bug</option>
                  <option value="3">Feature request</option>
                  <option value="4">Feature request</option>
                </select>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <select
                  className="browser-default custom-select mb-4"
                  name="bloodgrp"
                >
                  <option defaultValue={bloodgrp}>{bloodgrp}</option>
                  <option value="">A+</option>
                  <option value="2">A-</option>
                  <option value="3">B+</option>
                  <option value="4">B-</option>
                  <option value="5">O+</option>
                  <option value="6">O-</option>
                </select>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <select className="browser-default custom-select mb-4">
                  <option defaultValue={gender}>{gender}</option>
                  {gender === "Male" ? (
                    <option value="Female">Female</option>
                  ) : (
                    <option value="Male">Male</option>
                  )}
                </select>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form">
                  <textarea
                    id="materialContactFormMessage"
                    className="form-control md-textarea"
                    // rows="1"
                    defaultValue={shortbio}
                  >
                    {shortbio}
                  </textarea>
                  {/* <label for="materialContactFormMessage">{shortbio}</label> */}
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="md-form mt-3">
                  <input
                    type="text"
                    id="materialSubscriptionFormPasswords"
                    className="form-control"
                    defaultValue={phone}
                    name="phone"
                  />
                </div>
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
              // disabled={isSubmitting}
            >
              {/* <SaveIcon className={classes.rightIcon} />  */}
              Save
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type="button"
              // onClick={() => getRandomString(6)}
            >
              {/* <DeleteIcon className={classes.rightIcon} /> */}
              Cancel
            </Button>
          </Wrapper>
        </Card>
      </form>
    </Wrapper>
  );
};

EditStudentDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(EditStudentDetail);
