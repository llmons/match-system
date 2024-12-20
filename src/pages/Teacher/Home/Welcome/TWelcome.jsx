import {Button, Stack, Typography, useTheme} from "@mui/material";
import SearchBar from "../../../Common/Home/Welcome/SearchBar.jsx";
import TTextCarousel from "./TTextCarousel.jsx";
import {useNavigate} from "react-router";

export default function Welcome() {
    const navigate = useNavigate()
    const theme = useTheme()
    return (
        <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            flex={2}
            width="100%"
            sx={{pt: 15}}>
            <Typography variant="h4">欢迎来到我们的平台！</Typography>
            <TTextCarousel/>
            <Typography variant="body1"
                        color="textSecondary" sx={{pr: 12}}>
                项目匹配撮合系统是一款专为校内学生设计的项目协作平台，
                旨在帮助学生高效对接教师项目资源，快速组建项目团队,
                打破了传统项目组建中信息不对称的壁垒。
            </Typography>
            <Button
                variant="contained"
                sx={{
                    width: '25%',
                    borderRadius: 3,
                    backgroundColor: theme.palette.primary.main,
                }}
                onClick={() => {
                    navigate('/teacherManage/myProj')
                }}>管理我的项目</Button>
        </Stack>
    )
}