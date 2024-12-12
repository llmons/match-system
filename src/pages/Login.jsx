import {Box, Button, Card, Stack} from "@mui/material";
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate()

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
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