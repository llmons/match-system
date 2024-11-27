import {Box, Divider, List, ListItemButton, ListItemText, Stack} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import React from "react";
import {useNavigate} from "react-router";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigate = useNavigate();

    return (
        <Box flex={1} height="100vh">
            <Stack direction="column" width="100%" height="100%">
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="10%"
                     p={2}>
                    <LogoDevIcon fontSize="large"/>
                </Box>
                <Box p={2}>
                    <List>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={() => {
                                setSelectedIndex(0)
                            }}
                            sx={{borderRadius: '10px', mt: 2, mb: 2}}
                        >
                            <ListItemText primary="项目管理" sx={{textAlign: 'center'}}/>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={() => {
                                setSelectedIndex(1)
                            }}
                            sx={{borderRadius: '10px', mt: 2, mb: 2}}
                        >
                            <ListItemText primary="学生管理" sx={{textAlign: 'center'}}/>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={() => {
                                setSelectedIndex(2)
                            }}
                            sx={{borderRadius: '10px'}}
                        >
                            <ListItemText primary="教师管理" sx={{textAlign: 'center'}}/>
                        </ListItemButton>
                        <Divider sx={{mt: 2, mb: 2}}/>
                        <ListItemButton onClick={() => {
                            navigate('/')
                        }} sx={{borderRadius: '10px', mt: 2, mb: 2}}
                        >
                            <ListItemText primary="退出登录" sx={{textAlign: 'center'}}/>
                        </ListItemButton>
                    </List>
                </Box>
            </Stack>
        </Box>
    )
}

export default Sidebar
