import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Person4Icon from '@mui/icons-material/Person4';
import {Link} from "react-router-dom";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState();
    const navigate = useNavigate();
    const location = useLocation();

    const routeIdxMap = {
        '/teacherManage/myProj': 0,
        '/teacherManage/newProj': 1,
    }

    useEffect(() => {
        setSelectedIndex(routeIdxMap[location.pathname] ?? 0);
    }, [location.pathname]);

    return (
        <Box width={170}>
            <Drawer variant="permanent" open anchor="left">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="10%"
                    p={2}>
                    <Link to="/teacher">
                        <img src="/public/logo1.ico"
                             alt="logo"
                             style={{borderRadius: '50%', cursor: 'pointer'}}/>
                    </Link>
                </Box>
                <Divider />
                <Box p={2}>
                    <List>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={() => {
                                setSelectedIndex(0);
                                navigate('/teacherManage/myProj');
                            }}
                            sx={{ borderRadius: '10px', mt: 2, mb: 2 }}
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="我的项目" sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={() => {
                                setSelectedIndex(1);
                                navigate('newProj');
                            }}
                            sx={{ borderRadius: '10px', mt: 2, mb: 2 }}
                        >
                            <ListItemIcon>
                                <DataObjectIcon />
                            </ListItemIcon>
                            <ListItemText primary="新建项目" sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <ListItemButton
                            onClick={() => {
                                navigate('/')
                            }}
                            sx={{ borderRadius: '10px', mt: 2, mb: 2 }}
                        >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="退出登录" sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Sidebar
