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
import AssignTeachers from "./Teachers/AssignTeachers";
// import EditTeacher from "./Teachers/EditTeacher";

//        <--  STUDENT ROUTES -->
import CreateStudents from "./Students/CreateStudent";
import StudentLists from "./Students/StudentLists";
// import ScheduleExams from "./Students/ScheduleExams";

//PARENT
import CreateParent from "./Parent/CreateParent";

//CLASS/SECTION
import CreateClass from "./Class/CreateClass";
import CreateSection from "./Class/CreateSection";

//SUBJECT ROUTES
import CreateSubject from "./Subject/CreateSubject";

// EXAMS
import ScheduleExams from "./Exams/ScheduleExams";

//TIMETABLE ROUTES
import CreateTimeTable from "./TimeTable/CreateTimeTable";

// USER PROFILE
import UserProfile from "./Profile/UserProfile";
//EXAM ROUTES

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
  AssignTeachers,
  TeacherLists,
  CreateStudents,
  ScheduleExams,
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  CreateParent,
  StudentLists,
  CreateClass,
  CreateSection,
  CreateSubject,
  CreateTimeTable,
  UserProfile,
};
