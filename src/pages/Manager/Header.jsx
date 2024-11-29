import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, {useState} from "react";

const Header = () => {
    const [mode, setMode] = useState("light");

    return (
        <AppBar position="fixed">
            <Toolbar variant="regular" sx={{justifyContent: "space-between", gap: 3, marginLeft: "15%"}}>
                <Typography variant="h5" flex={1}>管理后台</Typography>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    setMode(mode === 'light' ? 'dark' : 'light')
                }}>
                    {mode === 'light' ? <LightModeIcon/> : <DarkModeIcon/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;