import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import CustomDialog from "../Modal/CustomDialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/PersonOutline";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchStudentInClasses } from "../../../redux/actions/schoolClassActions";
import { toLower } from "lodash";

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

const AssignedSubjectTable = ({ subjects }) => {
  const [isOpen, setIsOPen] = React.useState(false);
  const [stdSubject, setstdSubject] = React.useState(null);
  const subjStds = useSelector((state) => state.classStudents);
  const studArr = subjStds.classStudents;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDialogOpen = (id, subject) => {
    dispatch(fetchStudentInClasses(id));
    setstdSubject(subject);
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };

  return (
    <React.Fragment>
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
          (rowData) => ({
            icon: "link",
            tooltip: "view more",
            onClick: (event, rowData) =>
              handleDialogOpen(rowData.classId, rowData.subjectId),
          }),
        ]}
      />

      {subjStds.loading ? (
        <CustomDialog isOpen={isOpen} dialogWidth="xs">
          <div className={classes.loader}>
            <CircularProgress />
            <Typography color="inherit" className="flexs={12}pacer">
              Loading...
            </Typography>
          </div>
        </CustomDialog>
      ) : (
        <CustomDialog
          isOpen={isOpen}
          dialogWidth="xs"
          subj={` Students Offering  ${stdSubject}`}
        >
          {Array.isArray(studArr) && !studArr.length ? (
            "No Data Found"
          ) : (
            <List className={classes.root}>
              <li className={classes.listSection}>
                <ul className={classes.ul}>
                  {studArr.map((std) => (
                    <ListItem button key={`${std.id}`}>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <Link
                        to={`/student/${std.id}/${toLower(
                          stdSubject
                        )}/assessment`}
                      >
                        <ListItemText
                          inset
                          primary={` ${std.firstName}  ${std.lastName}`}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </li>
            </List>
          )}
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={handleDialogClose}
            >
              Close
            </Button>
          </DialogActions>
        </CustomDialog>
      )}
    </React.Fragment>
  );
};

// AssignedSubjectTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default AssignedSubjectTable;
