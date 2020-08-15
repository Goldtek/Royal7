import React from "react";
import Avatar from "react-avatar";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../../redux/actions/studentActions";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const StudentsTable = (props) => {
  const { students } = props;
  const dispatch = useDispatch();
  let history = useHistory();
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleCLickDelete = async (id) => {
    Swal.fire({
      title: `Are you sure ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.value) {
        dispatch(deleteStudent(id));
        // dispatch(fetchStudents());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
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
    { title: "Phone", field: "phone" },
    { title: "Admission ID", field: "admissionId" },
    { title: "Class", field: "stdclass" },
    { title: "Email", field: "email" },
  ];
  return (
    <React.Fragment>
      <MaterialTable
        title="STUDENT LIST"
        columns={columns}
        data={students}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Student",
            onClick: (event, rowData) =>
              history.push(`/student/${rowData.id}/edit`),
          },
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) => handleCLickDelete(rowData.id),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          filtering: false,
          sorting: true,
          headerStyle: {
            backgroundColor: "#EEE",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#292b2c",
            fontFamily: "Helvetica",
          },

          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#f7f7f7" : "#FFF",
            fontFamily: "Helvetica",
            fontSize: "0.89rem",
          }),
          exportButton: true,
        }}
      />
    </React.Fragment>
  );
};

export default StudentsTable;
