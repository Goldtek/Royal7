import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import alert from "./alertReducer";
import teachers from "./teachersReducer";
import students from "./studentReducer";
const rootReducer = combineReducers({
  authentication,
  alert,
  teachers,
  students,
});
export default rootReducer;
