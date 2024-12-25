import { Box, styled, Typography } from '@mui/material';
import { motion } from 'motion/react';

// logo 和链接信息
const techData = [
  {
    name: 'Vite',
    logo: 'https://vitejs.dev/logo.svg',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'MUI',
    logo: 'https://mui.com/static/logo.png',
    link: 'https://mui.com/',
  },
  {
    name: 'Motion',
    logo: 'https://framerusercontent.com/images/FEF0Xp0qllCZsG1uilpmdZAzD8.png',
    link: 'https://motion.dev/',
  },
];

// 页脚的容器样式
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: '16px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

// 每一个 Logo + 名称的容器样式
const TechItem = styled(motion.a)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  margin: '0 16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

// Logo 样式
const LogoImage = styled('img')({
  width: '32px',
  height: '32px',
  marginRight: '8px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='body2' sx={{ marginRight: '32px' }}>
        Copyright © 2024 ljh
      </Typography>
      <Typography variant='body2' sx={{ marginRight: '16px' }}>
        Powered by
      </Typography>
      {techData.map((tech) => (
        <TechItem
          key={tech.name}
          href={tech.link}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoImage src={tech.logo} alt={`${tech.name} logo`} />
          <Typography variant='body2' fontWeight='bold'>
            {tech.name}
          </Typography>
        </TechItem>
      ))}
    </FooterContainer>
  );
};

export default Footer;
