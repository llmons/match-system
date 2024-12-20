import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select, Snackbar, SnackbarContent,
    TextField, Typography, useTheme
} from "@mui/material";
import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid2";
import {useNavigate} from "react-router";

const NewCompetitionProj = () => {
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

    const [category, setCategory] = useState("1");
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const [applied, setApplied] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        return () => {
            setSuccess(false);
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSuccess(false);
    };

    const handleConfirm = () => {
        setSuccess(true);
        setTimeout(() => {
            navigate('/teacherManage/myProj');
            setSuccess(false);
        }, 1000);
    };

    return (
        <Box p={3}>
            <Card>
                <CardHeader title="新建竞赛项目"/>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={5}>
                            <TextField required={true}
                                       label="项目名称" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={5}>
                            <TextField disabled={true} multiline defaultValue="大创项目" required
                                       label="项目类型" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={3}>
                            <TextField required={true}
                                       label="项目所需人数" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={3}>
                            <TextField multiline defaultValue="0" required={true}
                                       label="项目当前人数" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={3}>
                            <TextField required={true}
                                       label="专业限制" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={10}>
                            <TextField required={true}
                                       label="项目简介" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={5}>
                            <TextField disabled={true} multiline defaultValue="某某老师" required
                                       label="指导老师" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={5}>
                            <TextField
                                label="项目负载人" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <Grid size={12}>
                            <TextField required={true}
                                       label="项目详情" fullWidth={true}>
                            </TextField>
                        </Grid>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">所属竞赛</InputLabel>
                            <Select style={{width: '300px'}} variant='outlined' value={category}
                                    onChange={(e) => setCategory(e.target.value)}>
                                <MenuItem value="1">ACM国际大学生程序设计竞赛</MenuItem>
                                <MenuItem value="2">蓝桥杯全国软件和信息技术专业人才大赛</MenuItem>
                                <MenuItem value="3">全国大学生软件创新大赛</MenuItem>
                                <MenuItem value="4">全国大学生电子设计竞赛嵌入式系统专题竞赛</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid size={5}>
                            <TextField required={true}
                                       label="申请截止时间" fullWidth={true}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Box sx={{pt: 5, pl: 60}}>
                        <Button variant="contained" color="inherit" onClick={handleClickOpen}>
                            提交申请
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"是否确认提交申请"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    您确定要提交该申请吗？
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
                                    backgroundColor: applied
                                        ? theme.palette.error.light
                                        : theme.palette.success.light,
                                    color: 'white',
                                }}
                                message="申请提交成功"
                            />
                        </Snackbar>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default NewCompetitionProj;