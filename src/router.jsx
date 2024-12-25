import { createHashRouter } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Student from './pages/Student/Student.jsx';
import Teacher from './pages/Teacher/Teacher.jsx';
import Manager from './pages/Manager/Manager.jsx';
import ProjPlaza from './pages/Common/ProjPlaza/ProjPlaza.jsx';
import MyProjStudent from './pages/Student/MyProj/MyProjStudent.jsx';
import ProjDetailStudent from './pages/Student/ProjDetail/ProjDetailStudent.jsx';
import Home from './pages/Common/Home/Home.jsx';
import ManageProj from './pages/Manager/ManageProj/ManageProj.jsx';
import ManageStudent from './pages/Manager/ManagerStudent/ManageStudent.jsx';
import ManageTeacher from './pages/Manager/ManagerTeacher/ManageTeacher.jsx';
import DashBoard from './pages/Manager/DashBoard/DashBoard.jsx';
import ProjDetailManager from './pages/Manager/ManageProj/ProjDetailManager.jsx';
import THome from './pages/Teacher/Home/THome.jsx';
import TeacherManager from './pages/Teacher/TeacherManage/TeacherManage.jsx';
import MyProjTeacher from './pages/Teacher/MyProj/MyProjTeacher.jsx';
import ProjDetailTeacher from './pages/Teacher/ProjDetail/ProjDetailTeacher.jsx';
import NewProj from './pages/Teacher/NewProj/newProj.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/student',
    element: <Student />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projPlaza',
        element: <ProjPlaza />,
      },
      {
        path: 'myProj',
        element: <MyProjStudent />,
      },
      {
        path: 'projDetail/:category/:id',
        element: <ProjDetailStudent />,
      },
    ],
  },
  {
    path: '/teacher',
    element: <Teacher />,
    children: [
      {
        index: true,
        element: <THome />,
      },
    ],
  },
  {
    path: '/teacherManage',
    element: <TeacherManager />,
    children: [
      {
        index: true,
        element: <TeacherManager />,
      },
      {
        path: 'myProj',
        element: <MyProjTeacher />,
      },
      {
        path: 'newProj',
        element: <NewProj />,
      },
      {
        path: 'projDetail/:category/:id',
        element: <ProjDetailTeacher />,
      },
    ],
  },
  {
    path: '/manager',
    element: <Manager />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'manageProj',
        element: <ManageProj />,
      },
      {
        path: 'ProjDetail',
        element: <ProjDetailManager />,
      },
      {
        path: 'manageStudent',
        element: <ManageStudent />,
      },
      {
        path: 'manageTeacher',
        element: <ManageTeacher />,
      },
    ],
  },
  {
    path: '/notfound',
    element: <NotFound />,
  },
]);

export default router;
