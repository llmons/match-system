import {
  Box,
  Checkbox,
  Chip,
  Collapse,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PropTypes from 'prop-types';

const FilterSection = ({ title, children, defaultExpanded = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Box>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
      >
        <Typography variant='subtitle1' fontWeight='bold'>
          {title}
        </Typography>
        <IconButton size='small'>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Stack>
      <Collapse in={expanded}>
        <Box sx={{ mt: 1 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
};

const FilterSidebar = () => {
  const theme = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    projectType: [],
    major: [],
    useCase: [],
    type: [],
  });

  // 处理复选框变化
  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  // 删除单个过滤器
  const handleDeleteFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

  // 清除所有过滤器
  const handleClearAll = () => {
    setSelectedFilters({
      projectType: [],
      major: [],
      useCase: [],
      type: [],
    });
  };

  // 获取所有已选择的过滤器
  const activeFilters = Object.entries(selectedFilters).flatMap(
    ([category, values]) => values.map((value) => ({ category, value }))
  );

  return (
    <Stack spacing={3} sx={{ width: 280 }}>
      {/* 搜索框 */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <Paper
          elevation={searchFocused ? 3 : 1}
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            border: searchFocused
              ? `1px solid ${theme.palette.primary.main}`
              : '1px solid transparent',
            transition: 'all 0.3s ease',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='搜索项目...'
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <IconButton sx={{ p: '10px' }}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </motion.div>

      {/* 已选择的过滤器标签 */}
      {activeFilters.length > 0 && (
        <Box>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            mb={1}
          >
            <Typography variant='body2' color='text.secondary'>
              已选择的过滤器
            </Typography>
            <Typography
              variant='body2'
              color='primary'
              sx={{ cursor: 'pointer' }}
              onClick={handleClearAll}
            >
              清除全部
            </Typography>
          </Stack>
          <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
            {activeFilters.map(({ category, value }, index) => (
              <Chip
                key={`${category}-${value}-${index}`}
                label={value}
                onDelete={() => handleDeleteFilter(category, value)}
                size='small'
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>
      )}

      {/* 项目类型过滤器 */}
      <FilterSection title='项目类型'>
        <Stack spacing={1}>
          {['大创', '竞赛', '毕设'].map((label) => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  size='small'
                  checked={selectedFilters.projectType.includes(label)}
                  onChange={() => handleCheckboxChange('projectType', label)}
                />
              }
              label={label}
            />
          ))}
        </Stack>
      </FilterSection>

      {/* 专业过滤器 */}
      <FilterSection title='专业'>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
          {[
            '计算机科学',
            '软件工程',
            '人工智能',
            '计算机类',
            '网络安全',
            '数字媒体技术',
            '土木工程',
            '机械电子',
            '通信工程',
            '生物科学',
            '法学',
            '经济学',
            '建筑学',
            '环境工程',
            '材料学',
            '化学',
            '工商管理',
            '电子信息工程',
            '心理学',
            '新闻传播学',
            '数学',
          ].map((label) => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  size='small'
                  checked={selectedFilters.major.includes(label)}
                  onChange={() => handleCheckboxChange('major', label)}
                />
              }
              label={label}
            />
          ))}
        </Stack>
      </FilterSection>
    </Stack>
  );
};

export default FilterSidebar;
