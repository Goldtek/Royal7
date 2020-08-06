// Pages
import {
  Home,
  CreateTeachers,
  ListTeachers,
  CreateStudents,
  CreateParent,
  ListStudents,
} from "../pages";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import TableChartIcon from "@material-ui/icons/TableChart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import MessageIcon from "@material-ui/icons/Message";
import GroupIcon from "@material-ui/icons/Group";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
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
      path: "/dashboard/teachers",
      name: "Teachers",
      type: "submenu",
      icon: AccountCircleIcon,
      children: [
        {
          path: "/create",
          name: "Add",
          component: CreateTeachers,
        },
        {
          path: "/view",
          name: "All Teachers",
          component: ListTeachers,
        },
        {
          path: "/assign",
          name: "Assign Teachers",
          component: CreateStudents,
        },
      ],
    },

    {
      path: "/dashboard/student",
      name: "Students",
      type: "submenu",
      icon: SupervisedUserCircleIcon,

      children: [
        {
          path: "/create",
          name: "Add",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "All Students",
          component: ListStudents,
        },
        {
          path: "/grade",
          name: "Grade",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/student",
      name: "Grade",
      type: "submenu",
      icon: ConfirmationNumberIcon,

      children: [
        {
          path: "/create",
          name: "Add",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "All Students",
          component: ListStudents,
        },
        {
          path: "/grade",
          name: "Grade",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/student",
      name: "Assignment",
      type: "submenu",
      icon: SchoolIcon,

      children: [
        {
          path: "/create",
          name: "Add",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "All Students",
          component: ListStudents,
        },
        {
          path: "/grade",
          name: "Grade",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/dashboard/parent",
      name: "Parents",
      type: "submenu",
      icon: GroupIcon,

      children: [
        {
          path: "/view",
          name: "All Parents",
          component: CreateParent,
        },
        {
          path: "/view",
          name: "Parent Details",
          component: CreateStudents,
        },
        {
          path: "/create",
          name: "Add Parents",
          component: CreateParent,
        },
      ],
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
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "Add Section",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "View Section",
          component: CreateStudents,
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
    {
      path: "/dashboard/report",
      name: "Reports",
      type: "submenu",
      icon: AssessmentIcon,
      children: [
        {
          path: "/create",
          name: "Attendance",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "Marks",
          component: CreateStudents,
        },
      ],
    },
    {
      path: "/anouncement",
      name: "Announcements",
      type: "link",
      icon: AnnouncementIcon,
    },
    {
      path: "/message",
      name: "Messages",
      type: "link",
      icon: MessageIcon,
    },
    {
      path: "/signin",
      name: "Sign out",
      type: "link",
      icon: ExitToAppIcon,
    },
  ],
};