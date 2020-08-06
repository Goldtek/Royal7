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
import CreateTeachers from "./Teachers/Create";
import ListTeachers from "./Teachers/List";
//STUDENT
import CreateStudents from "./Students/Create";
import ListStudents from "./Students/List";

//PARENT
import CreateParent from "./Parent/Create";

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
  ListTeachers,
  CreateStudents,
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  CreateParent,
  ListStudents,
};
