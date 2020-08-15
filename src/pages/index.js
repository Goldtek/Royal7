// Home
import Home from "./Home/Home";
import IndexPage from "./Index/IndexPage";

// Authentication
import PasswordReset from "./Authentication/PasswordReset";
import Signin from "./Authentication/Signin";
// Error
import NotFound from "./Errors/NotFound";

//CUSTOM IMPORTS :::::::::::::::::::::::::::::::::::
// TEACHER
import CreateTeachers from "./Teachers/CreateTeacher";
import TeacherLists from "./Teachers/TeacherLists";
//STUDENT
import CreateStudents from "./Students/CreateStudent";
import StudentLists from "./Students/StudentLists";
import EditStudentDetail from "./Students/EditStudent";

//PARENT
import CreateParent from "./Parent/CreateParent";

//CLASS/SECTION
import CreateClass from "./Class/CreateClass";
import CreateSection from "./Class/CreateSection";

//SUBJECT ROUTES
import CreateSubject from "./Subject/CreateSubject";

// USER PROFILE
import UserProfile from "./Profile/UserProfile";
//EXAM ROUTES
import ExamSchedule from "./Exam/ExamSchedule";

//TIMETABLE ROUTES
import CreateTimeTable from "./TimeTable/CreateTimeTable";
// SCREENS
import CreateAccount from "./Screens/createAccount";
import ValidateEmail from "./Screens/validateEmail";
import EmailSent from "./Screens/emailSent";
import EmailConfirmation from "./Screens/emailConfirmation";
// sCUSTOM IMPORTS :::::::::::::::::::::::::::::::::::

export {
  Home,
  Signin,
  PasswordReset,
  NotFound,
  IndexPage,
  CreateTeachers,
  TeacherLists,
  CreateStudents,
  EditStudentDetail,
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  CreateParent,
  StudentLists,
  CreateClass,
  CreateSection,
  CreateSubject,
  ExamSchedule,
  CreateTimeTable,
  UserProfile,
};
