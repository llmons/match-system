import {AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {useNavigate} from "react-router";
import PropTypes from "prop-types";

const Navigator = ({avatarAlpha, findProjPath, myProjPath}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [mode, setMode] = React.useState('light');
    const [anchorEl, setAnchorEl] = React.useState();

    return (
        <AppBar position="sticky">
            <Toolbar variant="regular" sx={{justifyContent: 'space-between', gap: 3}}>
                <Box flex={1}>
                    <IconButton onClick={() => navigate('/student')}>
                        <LogoDevIcon/>
                    </IconButton>
                </Box>
                <Button color="inherit" onClick={() => {
                    navigate(findProjPath)
                }}>项目广场</Button>
                <Button color="inherit" onClick={() => {
                    // navigate(myProjPath)
                }}>我的项目</Button>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    setMode(mode === 'light' ? 'dark' : 'light')
                }}>
                    {mode === 'light' ? <LightModeIcon/> : <DarkModeIcon/>}
                </IconButton>
                <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <Avatar
                        sx={{background: theme.palette.info.light}}>{avatarAlpha}</Avatar>
                </Button>

                <Menu
                    sx={{mt: '45px'}}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => {
                        setAnchorEl(null)
                    }}>
                        <Typography sx={{textAlign: 'center'}}>个人信息</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate('/')
                    }}>
                        <Typography sx={{textAlign: 'center'}}>退出登录</Typography>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>)
}

Navigator.propTypes = {
    avatarAlpha: PropTypes.string.isRequired,
    findProjPath: PropTypes.string.isRequired,
    myProjPath: PropTypes.string.isRequired,
}

export default Navigator;