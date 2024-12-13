import {alpha, Box, Button, Card, Stack} from "@mui/material";
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate()
    // 定义一个10%透明度的蓝色
    const blueTransparent = alpha('#0000FF', 0.1); // 10% 透明度的蓝色
    // 定义一个红色的透明度和不透明度
    const redTransparent = alpha('#FF0000', 0.1); // 10% 透明度的红色
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh"
                 sx={{
                     background: `linear-gradient(
                     to right,white 0%,
                     ${blueTransparent} 50%,
                     ${redTransparent} 50%,
                     white 100%)`,
                 }}>
                <Card sx={{
                    width: '30%',
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}
                           sx={{width: '100%', height: '100%'}}>
                        <Button variant='outlined' sx={{width: '70%', height: '15%'}} onClick={() => {
                            navigate('/student')
                        }}>学生</Button>
                        <Button variant='outlined' sx={{width: '70%', height: '15%'}} onClick={() => {
                            navigate('/teacher')
                        }}>教师</Button>
                        <Button variant='outlined' sx={{width: '70%', height: '15%'}} onClick={() => {
                            navigate('/manager')
                        }}>管理员</Button>
                    </Stack>
                </Card>
            </Box>
        </>
    );
}

export default Login;