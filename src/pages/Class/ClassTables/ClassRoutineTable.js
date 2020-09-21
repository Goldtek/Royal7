import React from "react";
// import PropTypes from "prop-types";

import MaterialTable from "material-table";

const ClassRoutineTable = ({ classRoutinesArr }) => {
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
      data={classRoutinesArr}
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

export default ClassRoutineTable;
