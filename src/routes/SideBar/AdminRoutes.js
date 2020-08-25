// Pages
import {
  Home,
  CreateTeachers,
  TeacherLists,
  CreateStudents,
  // CreateParent,
  StudentLists,
  CreateClass,
  // CreateSection,
  CreateSubject,
  ScheduleExams,
  CreateTimeTable,
  AssignTeachers,
} from "../../pages";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import SchoolIcon from "@material-ui/icons/School";
// import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import TableChartIcon from "@material-ui/icons/TableChart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import MessageIcon from "@material-ui/icons/Message";
// import GroupIcon from "@material-ui/icons/Group";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
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
      path: "/dashboard/subject",
      name: "Subjects",
      type: "submenu",
      icon: MenuBookIcon,
      children: [
        {
          path: "/create",
          name: "Add Subjects",
          component: CreateSubject,
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
      ],
    },
    {
      path: "/dashboard/teachers",
      name: "Teachers",
      type: "submenu",

      icon: AccountCircleIcon,
      children: [
        {
          path: "/create",
          name: "Add Teacher",
          component: CreateTeachers,
        },
        {
          path: "/view",
          name: "All Teachers",
          component: TeacherLists,
        },
        {
          path: "/assign",
          name: "Assign Teachers",
          component: AssignTeachers,
        },
      ],
    },

    {
      path: "/dashboard/student",
      name: "Students",
      type: "submenu",
      icon: SupervisedUserCircleIcon,
      roles: ["Student"],

      children: [
        {
          path: "/create",
          name: "Add Student",
          component: CreateStudents,
        },
        {
          path: "/view",
          name: "All Students",
          component: StudentLists,
        },

        {
          path: "/grade",
          name: "Grade",
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
          name: "Schedule Exam",
          component: ScheduleExams,
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
          name: "Create TimeTable",
          component: CreateTimeTable,
        },
        {
          path: "/view",
          name: "View TimeTable",
          component: CreateTimeTable,
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
    // {
    //   path: "/dashboard/:id/user",
    //   name: "Profile",
    //   type: "link",
    //   icon: PersonIcon,
    // },
  ],
};
