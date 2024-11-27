import {Box, Drawer, List, ListItem} from "@mui/material";

const Manager = () => {
    return (
        <Box>
            <Drawer>
                <List>
                    <ListItem button>管理项目</ListItem>
                    <ListItem button>管理学生</ListItem>
                    <ListItem button>管理教师</ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default Manager