// Home
import Home from "./Home/Home";
import IndexPage from "./Index/IndexPage";

// Authentication
import PasswordReset from "./Authentication/PasswordReset";
import Login from "./Authentication/Signin";
// Error ------------------------------------>>>>
import NotFound from "./Errors/NotFound";
// Error ------------------------------------>>>>

// TEACHER ------------------------------------>>>>
import CreateTeachers from "./Teachers/CreateTeacher";
import TeacherLists from "./Teachers/TeacherLists";
import AssignTeachers from "./Teachers/AssignTeachers";

// TEACHER ------------------------------------>>>>

// STUDENT ------------------------------------->>>>
import CreateStudents from "./Students/CreateStudent";
import StudentLists from "./Students/StudentLists";
// STUDENT ------------------------------------->>>>

//PARENT
import CreateParent from "./Parent/CreateParent";

//CLASS/SECTION
import CreateClass from "./Class/CreateClass";
import CreateSection from "./Class/CreateSection";
import ClassRoutine from "./Class/ClassRoutine";

//SUBJECT ROUTES
import CreateSubject from "./Subject/CreateSubject";
import AssignedSubject from "./Subject/AssignedSubjects";

import CreateExamSession from "./Exams/CreateExamSession";

// SCREENS
import CreateAccount from "./Screens/createAccount";
import ValidateEmail from "./Screens/validateEmail";
import EmailSent from "./Screens/emailSent";
import EmailConfirmation from "./Screens/emailConfirmation";

// sCUSTOM IMPORTS :::::::::::::::::::::::::::::::::::

export {
  Home,
  Login,
  PasswordReset,
  NotFound,
  IndexPage,
  // TEACHERS ---->
  CreateTeachers,
  AssignTeachers,
  TeacherLists,
  AssignedSubject,
  // TeacherClasses,
  // TEACHERS ---->

  CreateStudents,
  CreateExamSession,
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  CreateParent,
  StudentLists,
  CreateClass,
  ClassRoutine,
  CreateSection,
  //  <----SUBJECT COMP------>
  CreateSubject,
  //  <----SUBJECT COMP------>
  // CreateTimeTable,
};
