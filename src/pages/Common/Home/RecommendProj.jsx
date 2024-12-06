import {Box, Card, CardActionArea, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import {motion, useAnimation} from "motion/react";
import RefreshIcon from "@mui/icons-material/Refresh";
import {getRandomProj} from "./Home.jsx";
import {useEffect, useState} from "react";
import defaultProjs from "../../../json/defaultProjs.jsx";

export default function RecommendProj() {
    const [recommendProjs, setRecommendProjs] = useState([
        defaultProjs.ieProj, defaultProjs.competitionProj, defaultProjs.graduationProj,
    ]);
    const refreshCtrl = useAnimation()

    useEffect(() => {
        const fetchData = async () => {
            const recommend = await Promise.all(
                Array(3)
                    .fill({})
                    .map(() => getRandomProj().then(proj => proj)))
            setRecommendProjs(() => recommend)
        }
        fetchData().then(null)
    }, [])

    const refreshProjs = () => {
        const fetchData = async () => {
            const recommend = await Promise.all(
                Array(3)
                    .fill({})
                    .map(() => getRandomProj().then(proj => proj)))
            setRecommendProjs(recommend)
        }
        fetchData().then(() => {
            refreshCtrl.start({
                rotate: 360,
                transition: {duration: 0.5, ease: 'easeInOut'},
            }).then(() => {
                refreshCtrl.set({rotate: 0,})
            })
        })
    }

    return (
        <Box>
            <Stack direction="row" alignItems="center" sx={{pl: 25}}>
                <Typography variant="h6" p={2}>推荐项目</Typography>
                <motion.div animate={refreshCtrl}
                            style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <RefreshIcon onClick={refreshProjs} sx={{cursor: 'pointer'}}/>
                </motion.div>
            </Stack>

            <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
                {recommendProjs.map((proj, i) => (
                    <Card key={i} sx={{borderRadius: 'md'}}>
                        <CardActionArea>
                            <CardHeader title={proj.name.substring(0, 10)}/>
                            <CardContent>
                                <Stack direction="column">
                                    <Typography variant="body1" color="textSecondary">
                                        人数：{proj.current}/{proj.required}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        类别：{proj.category}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        专业：{proj.major}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        指导老师：{proj.instructor}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        申请截至日期：{proj.deadline.substring(0, 10)}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
}
