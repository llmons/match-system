import { Box, Button, Card, Stack, IconButton, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  const navigate = useNavigate();
  const leftColor = 'rgb(233, 240, 241)';
  const rightColor = 'rgb(243, 237, 235)';

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Logo */}
      <Box
        component='img'
        src='/public/logoblack.ico'
        alt='Logo'
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          width: 32,
          height: 32,
        }}
      />

      {/* 主要内容 */}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        sx={{
          background: `linear-gradient(
            to right,
            white 0%,
            ${leftColor} 35%,
            ${rightColor} 65%,
            white 100%
          )`,
        }}
      >
        <Card
          sx={{
            width: '400px',
            padding: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          <Stack spacing={5}>
            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{
                color: 'white',
                px: 4,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
              }}
              onClick={() => navigate('/student')}
            >
              学生
            </Button>

            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{
                color: 'white',
                px: 4,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
              }}
              onClick={() => navigate('/teacher')}
            >
              老师
            </Button>

            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{
                color: 'white',
                px: 4,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
              }}
              onClick={() => navigate('/manager')}
            >
              管理员
            </Button>

            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{
                color: 'white',
                px: 4,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
              }}
              onClick={() => navigate('/notfound')}
            >
              404
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
