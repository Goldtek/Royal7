// GENERAL IMPORT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import React from "react";
import MaterialTable from "material-table";

// STYLES :::::::::::::::::::::::::::::::::::::::::::::::::::

const AssignedTeachersList = ({ assigned }) => {
  return (
    <MaterialTable
      title="Assigned Teachers"
      columns={[
        { title: "Name", field: "userId" },
        { title: "Class", field: "classId" },
        { title: "Subject", field: "subjectId" },
        { title: "Session", field: "session" },
      ]}
      data={assigned}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit Teacher",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete Teacher",
          onClick: (event, rowData) => alert(rowData.id),
          disabled: rowData.birthYear < 2000,
        }),
      ]}
      // options={{
      //   actionsColumnIndex: -1,
      // }}
      options={{
        headerStyle: {
          backgroundColor: "#EEE",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#292b2c",
          fontFamily: "Helvetica",
        },
      }}
    />
  );
};
export default AssignedTeachersList;
