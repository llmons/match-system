import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

const Manager = () => {

    return (
        <Box width="100%" height="100%" display="flex">
            <Header/>
            <Sidebar/>
            <Outlet/>
        </Box>
    )
}

export default Manager