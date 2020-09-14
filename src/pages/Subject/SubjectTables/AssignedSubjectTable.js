import React from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

const AssignedSubjectTable = ({ subjects }) => {
  const history = useHistory();
  return (
    <MaterialTable
      title="Assigned Subjects"
      columns={[
        { title: "Class", field: "classId" },
        { title: "Subject", field: "subjectId" },
        { title: "Session", field: "session" },
      ]}
      data={subjects}
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
        {
          icon: "link",
          tooltip: "View More",
          onClick: (event, rowData) =>
            history.push(`/exam/${rowData.id}/schedule`),
        },
      ]}
    />
  );
};
export default AssignedSubjectTable;
