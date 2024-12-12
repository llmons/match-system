import React, {useState} from 'react';
import {AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, useTheme} from '@mui/material';
import {DarkMode, Info, Notifications, WbSunny} from '@mui/icons-material'; // MUI 图标
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router"; // 如果你需要导航
import ChatIcon from '@mui/icons-material/Chat';

const TopBar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    // 主题切换状态
    const [darkMode, setDarkMode] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // 控制头像的菜单
    const open = Boolean(anchorEl);

    // 切换 Light/Dark 模式
    const handleToggleTheme = () => setDarkMode(!darkMode);

    // 头像菜单控制
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFC0CB' }}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                {/* 左侧内容 */}
                <Stack direction="row" spacing={5} sx={{ml: 30}}>
                    <Box sx={{pr: 4}}>
                        <Link to="/teacher">
                            <img src="/public/logo1.ico"
                                 alt="logo"
                                 style={{borderRadius: '50%', cursor: 'pointer'}}/>
                        </Link>
                    </Box>

                    <Button
                        color="inherit"
                        component={Link}
                        to="/teacher/myProj"
                        sx={{textTransform: 'none',color: '#FFFFFF'}}
                    >
                        管理项目
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        sx={{textTransform: 'none',color: '#FFFFFF'}}
                    >
                        获取帮助
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        sx={{textTransform: 'none',color: '#FFFFFF'}}
                    >
                        关于我们
                    </Button>
                </Stack>

                {/* 右侧内容 */}
                <Stack direction="row" spacing={2}>
                    {/* 站内信图标 */}
                    <IconButton color="#FFFFFF">
                        <ChatIcon/>
                    </IconButton>

                    {/* 信息图标 */}
                    <IconButton color="FFFFFF">
                        <Info/>
                    </IconButton>

                    {/* 提醒图标 */}
                    <IconButton color="#FFFFFF">
                        <Notifications/>
                    </IconButton>

                    {/* 主题切换按钮 */}
                    <IconButton color="FFFFFF" onClick={handleToggleTheme}>
                        {darkMode ? <WbSunny/> : <DarkMode/>}
                    </IconButton>

                    {/* 头像 */}
                    <IconButton onClick={handleMenuOpen} sx={{p: 0}}>
                        <Avatar alt="Avatar" src="/src/assets/avator.svg"/>
                    </IconButton>

                    {/* 头像菜单 */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        onClick={handleMenuClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    backgroundColor: '#FFC0CB',
                                    overflow: 'visible',
                                    mt: 1.5,
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        backgroundColor: 'rgb(204, 242, 246)',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>查看个人资料</MenuItem>
                        <MenuItem>设置</MenuItem>
                        <MenuItem onClick={() => navigate('/')}>退出登录</MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
