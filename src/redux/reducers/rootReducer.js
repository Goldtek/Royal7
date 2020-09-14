import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import alert from "./alertReducer";
import {
  TeachersReducer,
  TeacherReducer,
  assignedTeacherReducer,
} from "./teachersReducer";
import { studentsReducer, singleStudentReducer } from "./studentReducer";
import { schoolClassReducers } from "./schoolClassReducer";
import { subjectReducers, assignedSubjectsReducers } from "./subjectReducer";
import { examSessioneReducer } from "./examReducers";
const rootReducer = combineReducers({
  authentication,
  alert,
  teachers: TeachersReducer,
  teacher: TeacherReducer,
  assignedTeachers: assignedTeacherReducer,
  assignedSubjects: assignedSubjectsReducers,
  students: studentsReducer,
  student: singleStudentReducer,
  schoolClasses: schoolClassReducers,
  subjects: subjectReducers,
  exams: examSessioneReducer,
  // examTimeTable: examTimeTableReducer,
});
export default rootReducer;
