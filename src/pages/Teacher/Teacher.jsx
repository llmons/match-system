import Navigator from "../../components/Navigator.jsx";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const Teacher = () => {
    return (
        <Box>
            <Navigator avatarAlpha="T" findProjPath="/teacher/projPlaza" myProjPath="/teacher/myProj"/>
            <Outlet/>
        </Box>
    )
};

export default Teacher;