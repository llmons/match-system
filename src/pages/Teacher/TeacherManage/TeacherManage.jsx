import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../TSidebar.jsx";


const Manager = () => {

    return (
        <Stack direction={'row'} spacing={2}>
            <Sidebar />
            <Outlet />
        </Stack>
    )
}

export default Manager