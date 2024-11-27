import {createHashRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Student from "./pages/Student/Student.jsx";
import Teacher from "./pages/Teacher/Teacher.jsx";
import Manager from "./pages/Manager/Manager.jsx";
import FindProj from "./pages/Student/FindProj/FindProj.jsx";
import MyProj from "./pages/Student/MyProj/MyProj.jsx";
import ProjDetail from "./pages/Student/ProjDetail/ProjDetail.jsx";
import Home from "./pages/Student/Home/Home.jsx";
import ManageProj from "./pages/Manager/ManageProj/ManageProj.jsx";
import ManageStudent from "./pages/Manager/ManageStudent.jsx";
import ManageTeacher from "./pages/Manager/ManageTeacher.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/student',
        element: <Student/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'findProj',
                element: <FindProj/>,
            },
            {
                path: 'myProj',
                element: <MyProj/>,
            },
            {
                path: 'projDetail/:name/:count/:sum/:msg',
                element: <ProjDetail/>,
            }
        ]
    },
    {
        path: 'teacher',
        element: <Teacher/>
    },
    {
        path: 'manager',
        element: <Manager/>,
        children: [
            {
                index: true,
                element: <ManageProj/>,
            },
            {
                path: 'manageStudent',
                element: <ManageStudent/>,
            },
            {
                path: 'manageTeacher',
                element: <ManageTeacher/>,
            }
        ]
    }
]);

export default router;