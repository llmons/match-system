import {Box} from "@mui/material";
import Navigator from "./Navigator.jsx";
import {Outlet} from "react-router-dom";

const Student = () => {
    return (
        <Box>
            <Navigator/>
            <Outlet/>
        </Box>
    );
};

export default Student;