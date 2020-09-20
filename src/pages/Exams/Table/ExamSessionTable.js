import React from "react";
import MaterialTable from "material-table";
import useMountEffect from "../../../mountEffect";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateExamSessionTables,
  fetchExamSessionLists,
  deleteExamSessionTable,
} from "../../../redux/actions/examActions.js";
const ExamSessionTable = () => {
  const { useState } = React;
  const dispatch = useDispatch();
  let history = useHistory();
  const [selectedRow, setSelectedRow] = useState(null);
  const examTables = useSelector((state) => state.exams.examSessions);
  useMountEffect(() => {
    dispatch(fetchExamSessionLists());
  });
  return (
    <React.Fragment>
      <MaterialTable
        title="Exam Sessions TimeTable"
        columns={[
          {
            title: "School Term",
            field: "term",
            validate: (rowData) => rowData.term !== "",
          },
          {
            title: "Section",
            field: "section",
            validate: (rowData) => rowData.section !== "",
          },
          {
            title: "Session",
            field: "session",
            validate: (rowData) => rowData.session !== "",
          },
        ]}
        data={examTables}
        editable={{
          onRowUpdate: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(updateExamSessionTables(newData));
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(deleteExamSessionTable(oldData.id));
                // console.log(oldData.id);
                resolve();
              }, 1000);
            }),
        }}
        actions={[
          (rowData) => ({
            icon: "link",
            tooltip: "Add Time Table",
            onClick: (event, rowData) =>
              history.push(`/exam/${rowData.id}/schedule`),
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
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
      />
    </React.Fragment>
  );
};

export default ExamSessionTable;
