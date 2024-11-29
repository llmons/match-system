import {Box, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";
import ProjBoard from "./ProjBoard.jsx";
import AuditProj from "./AuditProj.jsx";

const TabPanel = ({children, value, index}) => {
    return (
        <Box>
            {value === index && <Box>{children}</Box>}
        </Box>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

const ManageProj = () => {
    const [value, setValue] = useState(0);

    return (
        <Box flex={4} sx={{padding: "5% 10%"}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs example">
                    <Tab label="项目列表"/>
                    <Tab label="项目审核"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProjBoard/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AuditProj/>
            </TabPanel>
        </Box>
    )
}

export default ManageProj;