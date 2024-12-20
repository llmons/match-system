import {Box, createTheme, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";
import Sidebar from "../Manager/Sidebar.jsx";
import React, {useContext} from "react";
import TopBar from "./TopBar.jsx";
import {LoadingContext, LoadingProvider} from "../../components/LoadingProvider.jsx";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";
import TFooter from "./Home/TFooter.jsx";

const theme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#FAA',
            },
            secondary: {
                main: '#FFC0CB77',
            }
        }
    }
);
const Teacher = () => {
    return (
        <LoadingProvider>
            <ThemeProvider theme={theme}>
                <TeacherContent/>
            </ThemeProvider>
        </LoadingProvider>
    );
};

const TeacherContent = () => {
    const {isLoading} = useContext(LoadingContext);

    return isLoading ? (
        <FullScreenLoader/>
    ) : (
        <>
            <TopBar/>
            <Outlet/>
            <TFooter/>
        </>
    );
};

export default Teacher;