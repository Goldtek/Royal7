import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TeacherClassTable = ({ teacherClassArr }) => {
  return (
    <MaterialTable
      title="Class Routine Table"
      columns={[
        { title: "Day", field: "day" },
        { title: "Class", field: "schoolClass" },
        { title: "Section", field: "section" },
        { title: "Time", field: "timeSlot" },
        { title: "Subject", field: "subject" },
        { title: "Session", field: "session" },
      ]}
      data={teacherClassArr}
      options={{
        headerStyle: {
          backgroundColor: "#EEE",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#292b2c",
          fontFamily: "Helvetica",
        },
      }}
      actions={[
        (rowData) => ({
          icon: "link",
          tooltip: "view more",
          onClick: (event, rowData) => alert(rowData.id),
        }),
      ]}
    />
  );
};

// ClassRoutineTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TeacherClassTable;
