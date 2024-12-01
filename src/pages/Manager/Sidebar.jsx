import {Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Person4Icon from '@mui/icons-material/Person4';

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState();
    const navigate = useNavigate();
    const location = useLocation();

    const routeIdxMap = {
        '/manager': 0,
        '/manager/manageProj': 1,
        '/manager/ProjDetail': 1,
        '/manager/manageStudent': 2,
        '/manager/manageTeacher': 3,
    }

    useEffect(() => {
        setSelectedIndex(routeIdxMap[location.pathname] ?? 0);
    }, [location.pathname]);

    return (
        <Drawer variant="permanent" open sx={{width: "10vw"}}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="10%"
                p={2}>
                <LogoDevIcon fontSize="large"/>
            </Box>
            <Divider/>
            <Box p={2}>
                <List>
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={() => {
                            setSelectedIndex(0);
                            navigate('/manager');
                        }}
                        sx={{borderRadius: '10px', mt: 2, mb: 2}}
                    >
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="数据面板" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={() => {
                            setSelectedIndex(1);
                            navigate('manageProj');
                        }}
                        sx={{borderRadius: '10px', mt: 2, mb: 2}}
                    >
                        <ListItemIcon>
                            <DataObjectIcon/>
                        </ListItemIcon>
                        <ListItemText primary="项目管理" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={() => {
                            setSelectedIndex(2);
                            navigate('manageStudent');
                        }}
                        sx={{borderRadius: '10px', mt: 2, mb: 2}}
                    >
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="学生管理" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={() => {
                            setSelectedIndex(3);
                            navigate('manageTeacher');
                        }}
                        sx={{borderRadius: '10px'}}
                    >
                        <ListItemIcon>
                            <Person4Icon/>
                        </ListItemIcon>
                        <ListItemText primary="教师管理" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                    <Divider sx={{mt: 2, mb: 2}}/>
                    <ListItemButton
                        onClick={() => {
                            navigate('/')
                        }}
                        sx={{borderRadius: '10px', mt: 2, mb: 2}}
                    >
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary="退出登录" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar
