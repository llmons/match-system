import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Grid2,
  Link,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import HoverCard from './HoverCard.jsx';
import { Container } from '@mui/material';
import FilterSidebar from './FilterSidebar';

const apis = {
  getIe: 'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
  getCompetition:
    'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
  getGraduation:
    'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus',
  getIeByName:
    'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByName',
  getCompetitionByName:
    'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByName',
  getGraduationByName:
    'http://127.0.0.1:4523/m1/5504325-5180481-default/GraudationProj/findByName',
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
            link={`/student/projDetail/${proj.category}/${proj.id}`}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

CardDisplay.propTypes = {
  paginatedProj: PropTypes.array.isRequired,
};

export default function ProjPlaza() {
  const navigate = useNavigate();
  const [projList, setProjList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const fetchData = async ({ search = '', filters = {} } = {}) => {
    setLoading(true);
    try {
      // 构建查询参数
      const queryParams = new URLSearchParams();
      if (search) queryParams.append('search', search);
      if (filters.projectType?.length) queryParams.append('types', filters.projectType.join(','));
      if (filters.major?.length) queryParams.append('majors', filters.major.join(','));

      const urls = [
        `${apis.getIe}?${queryParams}`,
        `${apis.getCompetition}?${queryParams}`,
        `${apis.getGraduation}?${queryParams}`,
      ];

      const data = await Promise.all(
        urls.map(url =>
          fetch(url)
            .then(res => res.json())
            .then(json => json.data)
            .catch(e => {
              console.error(e);
              return [];
            })
        )
      );

      setProjList(data.flat());
    } catch (error) {
      console.error('Error fetching data:', error);
      setProjList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const paginatedProj = useMemo(
    () => projList.shuffle().slice((page - 1) * pageSize, page * pageSize),
    [projList, page, pageSize]
  );

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
        <Typography key='2' sx={{ color: 'text.primary' }}>
          项目广场
        </Typography>
      </Breadcrumbs>

      <Box sx={{ mt: 5, mb: 5 }}>
        <Typography variant='h2' color='textPrimary'>
          项目广场
        </Typography>
        <Typography variant='body' color='textSecondary'>
          这里有许多你想得到和你想不到的项目，快去寻找喜欢的项目加入吧！
        </Typography>
      </Box>

      <Stack direction='row' spacing={3} sx={{ mt: 5 }}>
        <FilterSidebar fetchData={fetchData} setLoading={setLoading} />
        <Stack direction='column' flex={1} alignItems='center'>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <CardDisplay paginatedProj={paginatedProj} />
          )}

          <Pagination
            page={page}
            count={Math.ceil(projList.length / pageSize)}
            onChange={(_, p) => {
              setPage(p);
            }}
            color='primary'
            sx={{
              mt: 5,
              mb: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: '7%',
              left: '45%',
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
