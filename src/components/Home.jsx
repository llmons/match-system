import {alpha, Box, Card, CardContent, CardHeader, Input, Stack, Typography, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";
import defaultProjs from "../json/defaultProjs.jsx";

const Search = () => {
    return (
        <Box width="50%" height="10%" backgroundColor="white" borderRadius="10px" display="flex"
             justifyContent="center" alignItems="center" pl={2} pr={2}>
            <SearchIcon/>
            <Input placeholder="搜索..." disableUnderline fullWidth sx={{margin: '10px'}}/>
        </Box>
    )
}

const Home = () => {
    const theme = useTheme()
    const [recommendProjs, setRecommendProjs] = useState([
        defaultProjs.ieProj, defaultProjs.competitionProj, defaultProjs.graduationProj,
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const apiArr = [
                "http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/get/",
                "http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/",
                "http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/get/"
            ]
            const [min, max] = [1, 1000]
            const projs = await Promise.all(apiArr.map((api) => {
                    const random = min + Math.floor(Math.random() * (max - min + 1));
                    console.log(api + random)
                    return fetch(api + random)
                        .then((res) => res.json())
                        .then(json => {
                            // console.log(json);
                            return json.data
                        })
                        .catch(err => console.log(err))
                }
            ))
            // console.log(projs)
            setRecommendProjs(projs.flat())
        }
        fetchData()
    }, [])

    return (
        <Stack direction="column"
               spacing={2}
               sx={{
                   background: `linear-gradient(
                 to right,white 0%,
                 ${alpha(theme.palette.info.light, 0.1)} 30%,
                 ${alpha(theme.palette.info.light, 0.1)} 70%,
                 white 100%)`
               }}>
            <Box height="70vh" display="flex" justifyContent="center"
                 alignItems="center"
            >
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} width="100%"
                       height="100%">
                    <Typography variant="h2" color="textSecondary">寻找合适的项目</Typography>
                    <Search/>
                </Stack>
            </Box>
            <Box>
                <Typography variant="h6">推荐项目</Typography>
                <Stack direction="row" spacing={2}>
                    {recommendProjs.map((proj, i) => (
                        <Card key={i}>
                            <CardHeader title={proj.name}/>
                            <CardContent>
                                <Typography variant="body2">
                                    人数{proj.count}/{proj.sum}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Stack>
    )
}

export default Home