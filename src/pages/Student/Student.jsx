import {Box} from "@mui/material";
import Navigator from "../../components/Navigator.jsx";
import {Outlet} from "react-router-dom";

const Student = () => {
    return (
        <Box>
            <Navigator avatorAlpha="S" findProjPath="/student/findProj" myProjPath="/student/myProj"/>
            <Outlet/>
        </Box>
    );
};

export default Student;