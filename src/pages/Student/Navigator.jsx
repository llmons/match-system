import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {useNavigate} from "react-router";


const Navigator = () => {
    const [mode, setMode] = React.useState('light');
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar variant="regular" sx={{justifyContent: 'space-between', gap: 3}}>
                <Box flex={1}>
                    <IconButton onClick={() => navigate('/')}>
                        <LogoDevIcon/>
                    </IconButton>
                </Box>
                <Button color="inherit" onClick={() => {
                    navigate('/student/findProj')
                }}>寻找项目</Button>
                <Button color="inherit" onClick={() => {
                    navigate('/student/myProj')
                }}>我的项目</Button>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    setMode(mode === 'light' ? 'dark' : 'light')
                }}>
                    {mode === 'light' ? <LightModeIcon/> : <DarkModeIcon/>}
                </IconButton>
                <Avatar>S</Avatar>
            </Toolbar>
        </AppBar>)
}

export default Navigator;