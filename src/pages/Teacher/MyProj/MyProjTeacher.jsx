import {
  AppBar,
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProjBoard from './ProjBoard.jsx';
import AuditProj from './AuditProj.jsx';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';
import FailProj from './FailProj.jsx';

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

const MyProjTeacher = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box flex={1} sx={{ pt: 0, pb: 10 }}>
      <AppBar position='static' sx={{ backgroundColor: '#FAA' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* 左侧内容 */}
          <Stack direction='row' spacing={5} sx={{ ml: 0 }}>
            <Breadcrumbs
              sx={{ color: '#FFFFFF' }}
              separator={<NavigateNextIcon />}
            >
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
              <Typography key='3' sx={{ color: '#FFFFFF' }}>
                我的项目
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box flex={1}>
        <Box sx={{ borderBottom: 1, borderColor: '#FFC0CB', pl: 5 }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            aria-label='basic tabs example'
          >
            <Tab sx={{ color: '#FAA' }} label='项目列表' />
            <Tab sx={{ color: '#FAA' }} label='审核中的项目' />
            <Tab sx={{ color: '#FAA' }} label='未通过审核的项目' />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ProjBoard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AuditProj />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FailProj />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default MyProjTeacher;
