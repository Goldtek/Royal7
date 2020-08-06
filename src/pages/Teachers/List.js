import React from "react";
import PropTypes from "prop-types";
// import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
// import TeacherTables from "./TeachersTables";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import DeleteIcon from "@material-ui/icons/Delete";
// import SaveIcon from "@material-ui/icons/Save";

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
});

class ListTeachers extends React.Component {
  render() {
    // const { classes } = this.props;
    return <Wrapper>List of Teachers</Wrapper>;
  }
}

ListTeachers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListTeachers);
