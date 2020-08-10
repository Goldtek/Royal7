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

//PARENT
import CreateParent from "./Parent/CreateParent";

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
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  CreateParent,
  StudentLists,
};
