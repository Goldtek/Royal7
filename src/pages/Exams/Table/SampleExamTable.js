import React from "react";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import useMountEffect from "../../../mountEffect";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExamSessionTables,
  updateExamTimeTable,
  deleteExamTimeTable,
} from "../../../redux/actions/examActions";
import { Wrapper } from "../../../components";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "440",
  },
  typo: {
    fontSize: "1rem",
  },
  appBar: {
    padding: "10px",
  },
  progress: {
    // margin: theme.spacing(1) * 2,
    margin: "auto",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
  },
}));

const ExamTable = () => {
  const classes = useStyles();
  const examTables = useSelector((state) => state.examsTableReducer.examTable);
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(null);
  useMountEffect(() => {
    dispatch(fetchExamSessionTables());
  });

  const handleCLickDelete = async (id) => {
    Swal.fire({
      title: `Are you sure ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "auto",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.value) {
        dispatch(deleteExamTimeTable(id));
        // dispatch(fetchStudents());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <Wrapper>
      <Helmet>
        <title>Teachers List</title>
      </Helmet>
      <br />
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/student/view">
              Exam
            </Link>
            <Typography color="textPrimary">Exam Time Table</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>

      <AppBar position="static" className={classes.appBar}>
        <Typography color="inherit" className="flexs={12}pacer"></Typography>
      </AppBar>
      <MaterialTable
        title="Exam Time Table"
        columns={[
          {
            title: "Exam Name",
            field: "examName",
            validate: (rowData) => rowData.examName !== "",
          },
          {
            title: "Subject",
            field: "subject",
            validate: (rowData) => rowData.subject !== "",
          },
          {
            title: "Teacher",
            field: "teacher",
            validate: (rowData) => rowData.teacher !== "",
          },
          {
            title: "Class",
            field: "examClass",
            validate: (rowData) => rowData.examClass !== "",
          },
          {
            title: "Start Time",
            field: "startTime",
            validate: (rowData) => rowData.startTime !== "",
          },
          {
            title: "Stop Time",
            field: "stopTime",
            validate: (rowData) => rowData.stopTime !== "",
          },
          {
            title: "Date",
            field: "examDate",
            validate: (rowData) => rowData.examDate !== "",
          },
        ]}
        data={examTables}
        editable={{
          onRowUpdate: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataUpdate = [...data];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                // setData(dataUpdate);
                console.log(newData);
                dispatch(updateExamTimeTable(newData));
                resolve();
              }, 1000);
            }),
        }}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        actions={[
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete Exam",
            onClick: (event, rowData) => handleCLickDelete(rowData.id),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          // actionsColumnIndex: -1,
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
    </Wrapper>
  );
};
export default ExamTable;
