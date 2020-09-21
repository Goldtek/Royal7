import React, { useEffect } from "react";
import MaterialTable from "material-table";
// import useMountEffect from "../../../mountEffect";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchExamTimeTable } from "../../../redux/actions/examActions.js";
const ExamSessionTable = () => {
  const { useState } = React;
  const dispatch = useDispatch();
  let params = useParams();
  const [selectedRow, setSelectedRow] = useState(null);
  const examTables = useSelector((state) => state.exams.examTimeTables);

  useEffect(() => {
    dispatch(fetchExamTimeTable(params.id));
    return () => {
      dispatch(fetchExamTimeTable(params.id));
    };
  }, [dispatch, params.id]);

  return (
    <React.Fragment>
      <MaterialTable
        title="Exam TimeTable"
        columns={[
          {
            title: "Class",
            field: "examClass",
            validate: (rowData) => rowData.examClass !== "",
          },
          {
            title: "Subject",
            field: "subject",
            validate: (rowData) => rowData.subject !== "",
          },
          {
            title: "Supervisor",
            field: "teacher",
            validate: (rowData) => rowData.teacher !== "",
          },

          {
            title: "SRT-Time",
            field: "startTime",
            validate: (rowData) => rowData.startTime !== "",
          },
          {
            title: "STP-Time",
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
