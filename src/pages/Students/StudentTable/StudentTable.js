import React from "react";
import MaterialTable from "material-table";
import Avatar from "react-avatar";

const StudentsTable = ({ students }) => {
  // console.log(students);
  const { useState, useEffect } = React;
  const [data, setData] = useState(undefined);

  console.log(data);
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
    <MaterialTable
      title="STUDENT LIST"
      columns={columns}
      data={students}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      options={{
        filtering: false,
        sorting: true,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
      }}
    />
  );
};

export default StudentsTable;
