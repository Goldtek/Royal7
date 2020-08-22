// Pages
import {
  Home,
  // CreateTeachers,
  // TeacherLists,
  CreateStudents,
  // CreateParent,
  // StudentLists,
  CreateClass,
  CreateSection,
} from "../../pages";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import SchoolIcon from "@material-ui/icons/School";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import TableChartIcon from "@material-ui/icons/TableChart";
// import AssessmentIcon from "@material-ui/icons/Assessment";
// import AnnouncementIcon from "@material-ui/icons/Announcement";
// import MessageIcon from "@material-ui/icons/Message";
// import GroupIcon from "@material-ui/icons/Group";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import MenuBookIcon from "@material-ui/icons/MenuBook";
// import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
// import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

export default {
  items: [
    {
      path: "/dashboard",
      name: "Home",
      type: "link",
      icon: DashboardIcon,
      component: Home,
    },

    {
      path: "/dashboard/class",
      name: "Classes",
      type: "submenu",
      icon: LocalLibraryIcon,
      children: [
        {
          path: "/create",
          name: "Add Class",
          component: CreateClass,
        },
        {
          path: "/section",
          name: "Add Section",
          component: CreateSection,
        },

        {
          path: "/view",
          name: "View Class",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/subject",
      name: "Subjects",
      type: "submenu",
      icon: MenuBookIcon,
      children: [
        {
          path: "/create",
          name: "Add Subjects",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "View Subjects",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/exam",
      name: "Exams",
      type: "submenu",
      icon: BorderColorIcon,
      children: [
        {
          path: "/schedule",
          name: "Exam Schedule",
          component: CreateStudents,
        },
        {
          path: "/grades",
          name: "Exam Grades",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/timetable",
      name: "TimeTables",
      type: "submenu",
      icon: TableChartIcon,
      children: [
        {
          path: "/create",
          name: "Create ",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "View ",
          component: CreateStudents,
        },
      ],
    },
  ],
};
