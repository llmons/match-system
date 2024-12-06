import {
    Box,
    Breadcrumbs,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Link,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import {useEffect, useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate} from "react-router";

const MyProjStudent = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const [projList, setProjList] = useState([])

    const apiArr = [
        'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
        'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
        'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus']

    useEffect(() => {
        apiArr.forEach((api) => {
            fetch(api)
                .then(res => res.json())
                .then(json => {
                    setProjList((prevProjList) => [...prevProjList, ...json.data]);
                })
                .catch(e => console.log(e));
        })
    }, [])

    return (
        <Box
            sx={{
                pt: 15,
                pl: 15,
                pr: 15
            }}>
            <Breadcrumbs separator={<NavigateNextIcon/>}>
                <Link underline="hover" key="1" color="inherit" sx={{cursor: 'pointer'}} onClick={() => {
                    navigate('/student')
                }}>
                    首页
                </Link>
                <Typography key="2" sx={{color: 'text.primary'}}>
                    我的项目
                </Typography>
            </Breadcrumbs>

            <Box sx={{mt: 5, mb: 5}}>
                <Stack direction='column' spacing={2}>
                    {projList.map((proj, idx) => (
                        <Card
                            key={idx}>
                            <CardActionArea
                                onClick={() => {
                                    navigate(`/student/projDetail/${proj.category}/${proj.id}`)
                                }}>
                                <CardHeader title={proj.name}/>
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
                                            申请截至日期：{proj.deadline}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default MyProjStudent;