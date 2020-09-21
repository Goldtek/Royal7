// Pages
import {
  Home,
  CreateStudents,
  CreateExamSession,
  CreateClass,
  AssignedSubject,
  ClassRoutine,
} from "../../pages";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import TableChartIcon from "@material-ui/icons/TableChart";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import MenuBookIcon from "@material-ui/icons/MenuBook";

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
      path: "/dashboard/subject",
      name: "Subjects",
      type: "submenu",
      icon: MenuBookIcon,
      children: [
        {
          path: "/view",
          name: "View Subjects",
          component: AssignedSubject,
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
          path: "/view",
          name: "View Class",
          component: CreateClass,
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
          name: "Exam TimeTable",
          component: CreateExamSession,
        },
      ],
    },
    {
      path: "/dashboard/timetable",
      name: "Class Routines",
      type: "submenu",
      icon: TableChartIcon,
      children: [
        {
          path: "/view",
          name: "View Routine",
          component: ClassRoutine,
        },
      ],
    },
  ],
};
