import {
    Box,
    Breadcrumbs,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid2,
    Input,
    Link,
    Pagination,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import {motion} from "motion/react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router";
import PropTypes from "prop-types";

const apis = {
    getIe: 'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
    getCompetition: 'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
    getGraduation: 'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus',
    getIeByName: 'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByName',
    getCompetitionByName: 'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByName',
    getGraduationByName: 'http://127.0.0.1:4523/m1/5504325-5180481-default/GraudationProj/findByName',
}

const Sidebar = () => {
    return (
        <Box flex={1}>
            <Stack direction="column" spacing={3}>
                <Box p={2}>
                    <Input placeholder="搜索..."
                           fullWidth
                           onKeyDown={() => {
                               const fetchData = async () => {

                               }
                               fetchData().then(null)
                           }}/>
                </Box>
                <FormControl>
                    <FormLabel>类别</FormLabel>
                    <FormControlLabel value='ie' control={<Checkbox defaultChecked/>} label='大创'/>
                    <FormControlLabel value='competition' control={<Checkbox defaultChecked/>} label='竞赛'/>
                    <FormControlLabel value='graduation' control={<Checkbox defaultChecked/>} label='毕设'/>
                </FormControl>
            </Stack>
        </Box>
    )
}

const CardDisplay = ({paginatedProj}) => {
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Grid2 container spacing={5}>
            {paginatedProj.map((proj, idx) => (
                <Grid2 size={4} key={idx}>
                    <motion.div
                        whileHover={{scale: 1.05, transition: {duration: 0.3, ease: "easeInOut"}}}>
                        <Card sx={{
                            height: "13.5rem",
                            '&:hover': {
                                border: '1px solid',
                                borderColor: theme.palette.info.light,
                                backgroundColor: 'white',
                            }
                        }}>
                            <CardActionArea
                                sx={{height: "100%"}}
                                onClick={() => {
                                    navigate(`/student/projDetail/${proj.category}/${proj.id}`)
                                }}
                            >
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
                    </motion.div>
                </Grid2>
            ))}
        </Grid2>
    )
}

CardDisplay.propTypes = {
    paginatedProj: PropTypes.array.isRequired,
}

const ProjPlaza = () => {
    const navigate = useNavigate()
    const [projList, setProjList] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const pageSize = 9

    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all([
                fetch(apis.getIe).then((res) => res.json()).then(json => json.data)
                    .catch(e => console.log(e)),
                fetch(apis.getCompetition).then((res) => res.json()).then(json => json.data)
                    .catch(e => console.log(e)),
                fetch(apis.getGraduation).then((res) => res.json()).then(json => json.data)
                    .catch(e => console.log(e)),
            ])
            setProjList(data.flat())
        }
        fetchData().then(() => {
            setLoading(false)
        })
    }, [])

    const paginatedProj = useMemo(() => projList.shuffle().slice((page - 1) * pageSize, page * pageSize), [projList, page, pageSize]);

    return (
        <Box
            sx={{
                pl: 15,
                pr: 15,
                pt: 15
            }}>
            <Breadcrumbs separator={<NavigateNextIcon/>}>
                <Link underline="hover" key="1" color="inherit" sx={{cursor: 'pointer'}} onClick={() => {
                    navigate('/student')
                }}>
                    首页
                </Link>
                <Typography key="2" sx={{color: 'text.primary'}}>
                    项目广场
                </Typography>
            </Breadcrumbs>

            <Box sx={{mt: 5, mb: 5}}>
                <Typography variant="h2" color="textPrimary">项目广场</Typography>
                <Typography variant="body"
                            color="textSecondary">这里有许多你想得到和你想不到的项目，快去寻找喜欢的项目加入吧！</Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{mt: 5}}>
                <Sidebar/>
                <Stack direction="column" flex={4} alignItems="center">
                    {loading ?
                        <CircularProgress/>
                        : <CardDisplay paginatedProj={paginatedProj}/>}

                    <Pagination
                        page={page}
                        count={Math.ceil(projList.length / pageSize)}
                        onChange={(_, p) => {
                            setPage(p)
                        }}
                        color="primary"
                        sx={{
                            mt: 5,
                            mb: 5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: "7%",
                            left: "45%"
                        }}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProjPlaza;