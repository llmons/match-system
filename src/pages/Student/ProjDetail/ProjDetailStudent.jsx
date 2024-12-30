import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Snackbar,
  SnackbarContent,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

const ProjDetailStudent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { category, id } = useParams();
  const [Project, setProject] = useState({});
  const [value, setValue] = useState(0);
  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);
  const textRef = useRef(null);
  const [text, setText] = useState('');

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
  }, [category, id]);

  return (
    <Container
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Breadcrumbs separator={<NavigateNextIcon />}>
        <Link
          underline='hover'
          key='1'
          color='inherit'
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/student');
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
            navigate('/student/projPlaza');
          }}
        >
          项目广场
        </Link>
        <Typography key='3' sx={{ color: 'text.primary' }}>
          {Project.name}
        </Typography>
      </Breadcrumbs>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 5, mb: 5 }}>
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          aria-label='basic tabs example'
        >
          <Tab label='项目详情' />
          <Tab label='申请' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack
          direction='column'
          width='100%'
          height='100%'
          spacing={3}
          sx={{ mt: 5 }}
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack sx={{ mt: 5 }} height='50vh' spacing={3}>
          <TextField
            ref={textRef}
            label='申请信息'
            multiline
            rows={6}
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant='contained'
            onClick={() => {
              if (text === '') {
                return;
              }
              setOpen(true);
            }}
          >
            立即申请
          </Button>
          <Snackbar
            variant='success'
            open={open}
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
              message={applied ? '已申请' : '申请成功'}
            />
          </Snackbar>
        </Stack>
      </TabPanel>
    </Container>
  );
};

export default ProjDetailStudent;
