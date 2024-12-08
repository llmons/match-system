import {Stack, Typography} from "@mui/material";
import SearchBar from "./SearchBar.jsx";
import TextCarousel from "./TextCarousel.jsx";


export default function Welcome() {
    return (
        <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            flex={2}
            width="100%"
            sx={{pt: 15}}>
            <Typography variant="h4">欢迎来到我们的平台！</Typography>
            <TextCarousel/>
            <Typography variant="body1"
                        color="textSecondary" sx={{pr: 12}}>
                项目匹配撮合系统是一款专为校内学生设计的项目协作平台，
                旨在帮助学生高效对接教师项目资源，快速组建项目团队,
                打破了传统项目组建中信息不对称的壁垒。
            </Typography>
            <SearchBar/>
        </Stack>
    )
}