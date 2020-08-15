import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import alert from "./alertReducer";
import { allTeachersReducer, singleTeacherReducer } from "./teachersReducer";
import { studentsReucer, singleStudentReducer } from "./studentReducer";
const rootReducer = combineReducers({
  authentication,
  alert,
  teachers: allTeachersReducer,
  teacher: singleTeacherReducer,
  students: studentsReucer,
  student: singleStudentReducer,
});
export default rootReducer;
