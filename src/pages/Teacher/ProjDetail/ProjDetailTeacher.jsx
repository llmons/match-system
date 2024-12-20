import {
    AppBar,
    Box,
    Breadcrumbs,
    Button, Card, CardContent, CardHeader,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Link,
    Snackbar,
    SnackbarContent,
    Stack,
    Tab,
    Tabs,
    TextField, Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Grid from "@mui/material/Grid2";

const TabPanel = ({ children, value, index }) => {
    return (
        <Box width='100%'>
            {value === index && (
                <Box width='100%' height='100%'>
                    {children}
                </Box>
            )}
        </Box>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

const ProjDetailTeacher = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { category, id } = useParams();
    const [Project, setProject] = useState({});
    const [value, setValue] = useState(0);
    const [applied, setApplied] = useState(false);
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [nopen, setNOpen] = useState(false);

    useEffect(() => {
        let api;
        switch (category) {
            case '大创':
                api = `http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/get/${id}`;
                break;
            case '竞赛':
                api = `http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/${id}`;
                break;
            case '毕设':
                api = `http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/get/${id}`;
                break;
        }
        const fetchData = async () => {
            const data = await fetch(api)
                .then((res) => res.json())
                .then((json) => json.data);
            console.log(data);
            setProject(data);
        };
        fetchData().then(null);
        return () => {
            setSuccess(false);
        };
    }, [category, id]);


    const handleClickOpen = () => {
        setNOpen(true);
    };

    const handleClose = () => {
        setNOpen(false);
        setSuccess(false);
    };

    const handleConfirm = () => {
        setSuccess(true);
        setTimeout(() => {
            navigate('/teacherManage/myProj');
            setSuccess(false);
        }, 1000);
    };

    const handleConfirm1 = () => {
        setSuccess(true);
        setNOpen(false);
        setTimeout(() => {
            setSuccess(false);
        }, 1500);
    };

    return (
        <Box
            flex={1}
            sx={{
                pt: 0,
                pb: 10,
            }}
        >
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
                            <Link
                                underline='hover'
                                key='2'
                                color='inherit'
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate('/teacherManage/myProj');
                                }}
                            >
                                我的项目
                            </Link>
                            <Typography key='3' sx={{ color: '#FFFFFF' }}>
                                {Project.name}
                            </Typography>
                        </Breadcrumbs>
                    </Stack>
                </Toolbar>
            </AppBar>


            <Box sx={{ borderBottom: 1, borderColor: 'divider', pl: 5}}>
                <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    aria-label='basic tabs example'
                >
                    <Tab sx={{color: '#FAA'}} label='项目详情' />
                    <Tab sx={{color: '#FAA'}} label='修改项目信息' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Stack
                    direction='column'
                    width='90%'
                    height='100%'
                    spacing={3}
                    sx={{mt: 5, ml: 5}}
                >
                    <Typography variant='h3'>{Project.name}</Typography>
                    <Typography variant='body1'>项目类型：{Project.category}</Typography>
                    <Typography variant='body1'>当前人数：{Project.current}</Typography>
                    <Typography variant='body1'>
                        项目所需总人数：{Project.required}
                    </Typography>
                    <Typography variant='body1'>专业限制：{Project.major}</Typography>
                    <Typography variant='body1'>简介：{Project.brief}</Typography>
                    <Typography variant='body1'>
                        指导老师：{Project.instructor}
                    </Typography>
                    <Typography variant='body1'>项目负责人：{Project.leader}</Typography>
                    <Typography variant='body2' color='textSecondary'>
                        详细描述：{Project.detail}
                    </Typography>
                </Stack>
                <Box sx={{pt: 3, pl: 130}}>
                    <Button variant="contained" color="error" onClick={handleClickOpen}>
                        删除项目
                    </Button>
                    <Dialog
                        open={nopen}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"确定要删除该项目吗"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                您确定要删除这个项目吗？此操作不可撤销。
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>取消</Button>
                            <Button onClick={handleConfirm} autoFocus color="error">
                                确定
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar
                        variant='success'
                        open={success}
                        autoHideDuration={2000}
                        onClose={() => {
                            setOpen(false);
                            setTimeout(() => {
                                setApplied(true);
                            }, 500);
                        }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <SnackbarContent
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: theme.palette.success.light,
                                color: 'white',
                            }}
                            message="删除成功"
                        />
                    </Snackbar>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box p={3}>
                <Card>
                    <CardHeader title="修改项目信息"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid size={5}>
                                <TextField required={true} multiline defaultValue={Project.name}
                                           label="项目名称" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={5}>
                                <TextField disabled={true} multiline defaultValue={Project.category} required
                                           label="项目类型" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={3}>
                                <TextField required={true} multiline defaultValue={Project.required}
                                           label="项目所需人数" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={3}>
                                <TextField multiline defaultValue={Project.current} required={true}
                                           label="项目当前人数" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={3}>
                                <TextField required={true} multiline defaultValue={Project.major}
                                           label="专业限制" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={10}>
                                <TextField required={true} multiline defaultValue={Project.brief}
                                           label="项目简介" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={5}>
                                <TextField disabled multiline defaultValue={Project.instructor} required
                                           label="指导老师" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={5}>
                                <TextField multiline defaultValue={Project.leader}
                                    label="项目负载人" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={12}>
                                <TextField required={true} multiline defaultValue={Project.detail}
                                           label="项目详情" fullWidth={true}>
                                </TextField>
                            </Grid>
                            <Grid size={5}>
                                <TextField required={true} multiline defaultValue={Project.deadline}
                                           label="申请截止时间" fullWidth={true}>
                                </TextField>
                            </Grid>
                        </Grid>
                        <Box sx={{pt: 5, pl: 65}}>
                            <Button variant="contained" color="inherit" onClick={handleClickOpen}>
                                保存
                            </Button>
                            <Dialog
                                open={nopen}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"是否确认保存更改"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        您确定要保存您的修改吗？
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>取消</Button>
                                    <Button onClick={handleConfirm1} autoFocus color="error">
                                        确定
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Snackbar
                                variant='success'
                                open={success}
                                autoHideDuration={2000}
                                onClose={() => {
                                    setOpen(false);
                                    setTimeout(() => {
                                        setApplied(true);
                                    }, 500);
                                }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            >
                                <SnackbarContent
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: theme.palette.success.light,
                                        color: 'white',
                                    }}
                                    message="保存成功"
                                />
                            </Snackbar>
                        </Box>
                    </CardContent>
                </Card>
                </Box>
            </TabPanel>
        </Box>
    );
};

export default ProjDetailTeacher;
