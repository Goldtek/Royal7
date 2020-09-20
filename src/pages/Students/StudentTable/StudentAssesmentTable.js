import React from "react";
import MaterialTable from "material-table";

import { toUpper } from "lodash";

const StudentAssesmentTable = ({ subj, stdAssment }) => {
  return (
    <React.Fragment>
      <MaterialTable
        title={`${toUpper(subj)} ASSESSMENT`}
        columns={[
          // { title: "Class", field: "classId" },
          // { title: "Name", field: "classId" },
          { title: "Type", field: "markType" },
          // { title: "Subject", field: "subjectId" },
          { title: "Score", field: "markObtained" },
          { title: "Max-Score", field: "maxScore" },
          { title: "Session", field: "session" },
          { title: "Remarks", field: "remarks" },
        ]}
        data={stdAssment}
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
            icon: "edit",
            tooltip: "Edit Record",
            onClick: (event, rowData) => alert(rowData.id),
          },
          {
            icon: "delete",
            tooltip: "Delete Record",
            onClick: (event, rowData) => alert(rowData.id),
          },
        ]}
      />
    </React.Fragment>
  );
};

// StudentAssesmentTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default StudentAssesmentTable;
