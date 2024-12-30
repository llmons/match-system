import {
  Box,
  Container,
  Grid2,
  Grid2 as Grid,
  IconButton,
  InputBase,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  useTheme,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import HoverCard from './HoverCard.jsx';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

const apiArr = [
  'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
  'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
  'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus',
];

const Search = () => {
  const [category, setCategory] = useState('IE');
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();

  return (
    <Box width='100%' borderRadius='10px' p={3} sx={{ color: '#FFC0CB' }}>
      <Stack direction='row' spacing={2}>
        <Select
          variant='outlined'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value='IE'>大创项目</MenuItem>
          <MenuItem value='Competition'>竞赛项目</MenuItem>
          <MenuItem value='Graduation'>毕设项目</MenuItem>
        </Select>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Paper
            elevation={searchFocused ? 3 : 1}
            sx={{
              p: '2px 80px',
              display: 'flex',
              alignItems: 'center',
              border: searchFocused
                ? `1px solid ${theme.palette.primary.main}`
                : '1px solid transparent',
              transition: 'all 0.3s ease',
            }}
          >
            <InputBase
              sx={{ ml: 15, flex: 1 }}
              placeholder='搜索项目...'
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <IconButton sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </motion.div>
      </Stack>
    </Box>
  );
};
const CardDisplay = ({ paginatedProj }) => {
  return (
    <Grid2 container spacing={5}>
      {paginatedProj.map((proj, idx) => (
        <Grid2 size={4} key={idx}>
          <HoverCard
            imageUrl='/src/assets/ieproj.svg'
            title={proj.name}
            subtitle={proj.instructor}
            extraInfo={proj.major}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};
CardDisplay.propTypes = {
  paginatedProj: PropTypes.array.isRequired,
};

const ProjBoard = () => {
  const [projList, setProjList] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          apiArr.map((api) =>
            fetch(api)
              .then((res) => res.json())
              .then((json) => json.data)
          )
        );
        setProjList(data.flat());
      } catch (e) {
        console.log(e);
      }
    };

    fetchData().then(null);
  }, []);

  const paginatedProj = useMemo(
    () => projList.slice((page - 1) * pageSize, page * pageSize),
    [projList, page, pageSize]
  );

  return (
    <Container>
      <Stack direction='column' spacing={2}>
        <Search />
        <CardDisplay paginatedProj={paginatedProj} />
      </Stack>
      <Stack>
        <Pagination
          page={page}
          count={Math.ceil(projList.length / pageSize)}
          onChange={(_, p) => {
            setPage(p);
          }}
          color='#FFC0CB'
          sx={{
            mt: 5,
            ml: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: '7%',
            left: '45%',
          }}
        />
      </Stack>
    </Container>
  );
};

export default ProjBoard;
