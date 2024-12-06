import {Box, Button, Input, Stack, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router";
import ProjDisplayBox from "./ProjDisplayBox.jsx";
import RecommendProj from "./RecommendProj.jsx";

const Search = () => {
    const navigate = useNavigate()

    return (
        <Box width="70%" height="15%" backgroundColor="white" borderRadius="10px" display="flex"
             justifyContent="center" alignItems="center" pl={2} pr={2}>
            <SearchIcon/>
            <Input placeholder="搜索..."
                   disableUnderline
                   fullWidth
                   sx={{margin: '10px'}}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                           navigate('/student/projPlaza')
                       }
                   }}/>
        </Box>
    )
}

export const getRandomProj = async () => {
    const apiArr = [
        "http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/get/",
        "http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/",
        "http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/get/"
    ]
    const [min, max] = [1, 1000]
    const randomIdx = Math.floor(Math.random() * 10) % 3;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min

    return await fetch(`${apiArr[randomIdx]}${randomId}`)
        .then(res => res.json())
        .then(json => json.data)
        .catch(err => console.log(err))
}

export default function Home() {
    const navigate = useNavigate()

    return (
        <Box>
            <Stack direction="column" spacing={5}>
                <Stack direction="row"
                       justifyContent="space-between"
                       alignItems="center"
                       spacing={5}
                       width="100%"
                       height="50%">
                    <Stack
                        direction="column"
                        spacing={5}>
                        <Typography variant="h2" color="textSecondary">寻找喜欢的项目</Typography>
                        <Search/>
                        <Button
                            variant="outlined"
                            sx={{width: "30%", height: "15%"}}
                            onClick={() => {
                                navigate('projPlaza')
                            }}>开始探索</Button>
                    </Stack>

                    <ProjDisplayBox></ProjDisplayBox>
                </Stack>
                <RecommendProj/>
            </Stack>
        </Box>
    )
}
