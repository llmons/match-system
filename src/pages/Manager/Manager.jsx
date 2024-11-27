import {Box, Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar.jsx";

const Manager = () => {

    return (
        <Box width="100%" height="100%">
            <Stack direction="row" spacing={2}>
                <Sidebar/>
                <Outlet/>
            </Stack>
        </Box>
    )
}

export default Manager