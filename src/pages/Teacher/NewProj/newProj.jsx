import {
    AppBar,
    Box,
    Breadcrumbs,
    Card,
    CardContent,
    CardHeader,
    Link,
    Stack, Tab, Tabs,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate} from "react-router";
import PropTypes from "prop-types";
import NewIEProj from "./NewIEProj.jsx";
import NewCompetitionProj from "./NewCompetitionProj.jsx";
import NewGraduationProj from "./NewGraduationProj.jsx";

const NewProj = () => {
    const [proj, setProj] = useState({
            "id": 791,
            "name": "可总也",
            "status": "valid",
            "sum": 6,
            "count": 3,
            "message": "这是一个大创项目",
            "information": "很少件包较准究眼求。维米存教单铁七。直门上气干物。\n在要放其。七百位县克三引子。目示太带十下通。\n相厂最物管将消团起周。流全况代。更容太真。\n管组以群度局开调养。式查断不百正系些。品育存向手达着。\n流史老使对照八。指支过安传指。专住指目。\n些斯水。铁应层员器组别色系。便见今交动省光质信。",
            "instructor": "塞婷婷",
            "research_direction": "度的听",
            "major": "列身志",
            "category": "创新类项目",
            "subjec_source": "更厂器",
            "fund_number": "120100196509086194",
            "deadline": "2025-07-18 00:52:46"
        }
    );
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/1")
                .then((res) => res.json())
                .then(json => json.data)
                .catch(err => console.log(err));
            setProj(data);
        }
    }, [])

    const TabPanel = ({children, value, index}) => {
        return (
            <Box width="100%">
                {value === index && <Box width="100%" height="100%">{children}</Box>}
            </Box>
        )
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        value: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
    }
    return (
        <Box flex={1} sx={{pt: 0, pb: 10}}>
            <AppBar position="static" sx={{ backgroundColor: '#FAA' }}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    {/* 左侧内容 */}
                    <Stack direction="row" spacing={5} sx={{ml: 0}}>
                        <Breadcrumbs sx={{color: '#FFFFFF'}} separator={<NavigateNextIcon />}>
                            <Link
                                underline='hover'
                                key='1'
                                color='inherit'
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate('/teacher');
                                }}
                            >
                                首页
                            </Link>
                            <Typography key='3' sx={{ color: '#FFFFFF' }}>
                                新建项目
                            </Typography>
                        </Breadcrumbs>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box flex={1}>
                <Box sx={{borderBottom: 1, borderColor: '#FFC0CB', pl: 5}}>
                    <Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs example">
                        <Tab sx={{color: '#FAA'}} label="新建大创项目"/>
                        <Tab sx={{color: '#FAA'}} label="新建竞赛项目"/>
                        <Tab sx={{color: '#FAA'}} label="新建毕设项目"/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <NewIEProj/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewCompetitionProj/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewGraduationProj/>
                </TabPanel>
            </Box>
        </Box>
    )
}

export default NewProj;