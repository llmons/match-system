import Navigator from "./Navigator.jsx";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const Teacher = () => {
    return (
        <Box>
            <Navigator/>
            <Outlet/>
        </Box>
    )
};

export default Teacher;