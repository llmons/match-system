import { Box, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const NotFound = () => {
  const navigate = useNavigate();
  const leftColor = 'rgb(233, 240, 241)';
  const rightColor = 'rgb(243, 237, 235)';

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(
          to right,
          white 0%,
          ${leftColor} 35%,
          ${rightColor} 65%,
          white 100%
        )`,
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
      <Typography
        variant='h3'
        component='h1'
        sx={{
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        抱歉，页面失踪了
      </Typography>
      <Typography
        color='text.secondary'
        sx={{
          mb: 1,
        }}
      >
        找不到页面
      </Typography>
      请查看url是否正确
      <Typography
        color='text.secondary'
        sx={{
          mb: 5,
        }}
      ></Typography>
      {/* 404图片 */}
      <Box
        component='img'
        src='/src/assets/not_found.svg'
        alt='404'
        sx={{
          width: '400px',
          maxWidth: '100%',
          mb: 5,
        }}
      />
      <Button
        variant='contained'
        onClick={() => navigate('/')}
        sx={{
          color: 'white',
          px: 4,
          py: 1,
          borderRadius: '8px',
          textTransform: 'none',
        }}
      >
        返回登录页
      </Button>
    </Box>
  );
};

export default NotFound;
