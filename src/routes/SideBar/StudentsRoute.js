// Pages
import {
  Home,
  CreateStudents,
  CreateClass,
  CreateSection,
  AssignedSubject,
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
