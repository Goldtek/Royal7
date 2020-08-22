import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import alert from "./alertReducer";
import { allTeachersReducer, singleTeacherReducer } from "./teachersReducer";
import { studentsReducer, singleStudentReducer } from "./studentReducer";
import { schoolClassReducers } from "./schoolClassReducer";
import { subjectReducers } from "./subjectReducer";
const rootReducer = combineReducers({
  authentication,
  alert,
  teachers: allTeachersReducer,
  teacher: singleTeacherReducer,
  students: studentsReducer,
  student: singleStudentReducer,
  schoolClasses: schoolClassReducers,
  subjects: subjectReducers,
});
export default rootReducer;
