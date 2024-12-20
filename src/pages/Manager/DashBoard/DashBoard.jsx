import { Container, Grid2, Paper, Typography, Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react';
import { red, green, blue, purple } from '@mui/material/colors';
import { alpha } from '@mui/material';
import { useEffect } from 'react';
import DrawIcon from '@mui/icons-material/Draw';
import Groups3Icon from '@mui/icons-material/Groups3';
import SchoolIcon from '@mui/icons-material/School';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const dashboradApi =
  'http://127.0.0.1:4523/m1/5504325-5180481-default/Project/getData';

const DashBoard = () => {
  // 模拟数据
  const [cardData, setCardData] = useState([
    {
      title: '大创',
      value: '70',
      percent: '+2%',
      icon: <DrawIcon sx={{ fontSize: 40, color: red[400] }} />,
      bgColor: red[50],
    },
    {
      title: '竞赛',
      value: '70',
      percent: '+2%',
      icon: <Groups3Icon sx={{ fontSize: 40, color: green[400] }} />,
      bgColor: green[50],
    },
    {
      title: '毕设',
      value: '70',
      percent: '+2%',
      icon: <SchoolIcon sx={{ fontSize: 40, color: blue[400] }} />,
      bgColor: blue[50],
    },
    {
      title: '所有项目',
      value: '210',
      percent: '+2%',
      icon: <PlaylistAddIcon sx={{ fontSize: 40, color: purple[400] }} />,
      bgColor: purple[50],
    },
  ]);

  const [pieData, setPieData] = useState([
    { value: 70, label: '大创', color: red[300] },
    { value: 70, label: '竞赛', color: green[300] },
    { value: 70, label: '毕设', color: blue[300] },
  ]);

  const [lineData, setLineData] = useState({
    大创: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
    竞赛: [20, 25, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    毕设: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    months: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
  });

  const [barData, setBarData] = useState({
    student: [40, 30, 20, 35, 65, 65, 35, 20, 50, 60, 60, 70],
    teacher: [50, 65, 45, 65, 40, 35, 20, 70, 20, 30, 30, 40],
    months: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
  });

  useEffect(() => {
    (async () => {
      const data = await fetch(dashboradApi)
        .then((res) => res.json())
        .then((json) => json.data)
        .catch((err) => console.log(err));

      // cardData
      setCardData((prev) => {
        return prev.map((card, index) => {
          switch (index) {
            case 0: {
              const percentVal =
                (data.timeData.at(-1).ieProjNum -
                  data.timeData.at(-2).ieProjNum) /
                data.timeData.at(-2).ieProjNum;
              return {
                ...card,
                value: data.timeData.at(-1).ieProjNum,
                percent:
                  percentVal >= 0
                    ? `+${percentVal.toFixed(2)}%`
                    : `${percentVal.toFixed(2)}%`,
              };
            }
            case 1: {
              const percentVal =
                (data.timeData.at(-1).competitionProjNum -
                  data.timeData.at(-2).competitionProjNum) /
                data.timeData.at(-2).competitionProjNum;
              return {
                ...card,
                value: data.timeData.at(-1).competitionProjNum,
                percent:
                  percentVal >= 0
                    ? `+${percentVal.toFixed(2)}%`
                    : `${percentVal.toFixed(2)}%`,
              };
            }
            case 2: {
              const percentVal =
                (data.timeData.at(-1).graduationProjNum -
                  data.timeData.at(-2).graduationProjNum) /
                data.timeData.at(-2).graduationProjNum;
              return {
                ...card,
                value: data.timeData.at(-1).graduationProjNum,
                percent:
                  percentVal >= 0
                    ? `+${percentVal.toFixed(2)}%`
                    : `${percentVal.toFixed(2)}%`,
              };
            }
            case 3: {
              const prevSum =
                data.timeData.at(-2).ieProjNum +
                data.timeData.at(-2).competitionProjNum +
                data.timeData.at(-2).graduationProjNum;
              const currSum =
                data.timeData.at(-1).ieProjNum +
                data.timeData.at(-1).competitionProjNum +
                data.timeData.at(-1).graduationProjNum;
              return {
                ...card,
                value: currSum,
                percent:
                  (((currSum - prevSum) / prevSum) * 100).toFixed(2) + '%',
              };
            }
            default:
              return card;
          }
        });
      });

      // pieData
      setPieData((prev) => {
        return prev.map((pie, index) => {
          switch (index) {
            case 0:
              return { ...pie, value: data.timeData.at(-1).ieProjNum };
            case 1:
              return { ...pie, value: data.timeData.at(-1).competitionProjNum };
            case 2:
              return { ...pie, value: data.timeData.at(-1).graduationProjNum };
            default:
              return pie;
          }
        });
      });

      const ieArr = [];
      const competitionArr = [];
      const graduationArr = [];
      const studentVisitArr = [];
      const teacherVisitArr = [];
      data.timeData.forEach(
        ({
          ieProjNum,
          competitionProjNum,
          graduationProjNum,
          studentVisitNum,
          teacherVisitNum,
        }) => {
          ieArr.push(ieProjNum);
          competitionArr.push(competitionProjNum);
          graduationArr.push(graduationProjNum);
          studentVisitArr.push(studentVisitNum);
          teacherVisitArr.push(teacherVisitNum);
        }
      );
      // lineData
      setLineData((prev) => {
        return {
          ...prev,
          大创: ieArr,
          竞赛: competitionArr,
          毕设: graduationArr,
        };
      });

      // barData
      setBarData((prev) => {
        return {
          ...prev,
          student: studentVisitArr,
          teacher: teacherVisitArr,
        };
      });
    })();
  }, []);

  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant='h4' sx={{ mb: 4 }}>
        欢迎回来！
      </Typography>

      <Grid2 container spacing={3}>
        {/* 数据卡片 */}
        {cardData.map((card, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: alpha(card.bgColor, 0.3),
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  right: -20,
                  top: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: card.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {card.icon}
              </Box>
              <Typography variant='subtitle2' color='text.secondary'>
                {card.title}
              </Typography>
              <Typography variant='h4' sx={{ my: 1 }}>
                {card.value}
              </Typography>
              <Typography
                variant='body2'
                color={
                  card.percent.startsWith('+') ? 'success.main' : 'error.main'
                }
              >
                {card.percent}
              </Typography>
            </Paper>
          </Grid2>
        ))}

        {/* 图表 */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              项目类型分布
            </Typography>
            <PieChart
              series={[
                {
                  data: pieData,
                  innerRadius: 40,
                  outerRadius: 120,
                  paddingAngle: 2,
                  cornerRadius: 5,
                },
              ]}
              height={300}
            />
          </Paper>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              项目增长趋势
            </Typography>
            <LineChart
              xAxis={[
                {
                  data: lineData.months,
                  scaleType: 'point',
                },
              ]}
              series={[
                {
                  data: lineData.大创,
                  label: '大创',
                  color: red[300],
                  curve: 'natural',
                  showMark: false,
                },
                {
                  data: lineData.竞赛,
                  label: '竞赛',
                  color: green[300],
                  curve: 'natural',
                  showMark: false,
                },
                {
                  data: lineData.毕设,
                  label: '毕设',
                  color: blue[300],
                  curve: 'natural',
                  showMark: false,
                },
              ]}
              height={300}
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 2,
                },
              }}
            />
          </Paper>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              网站使用人数
            </Typography>
            <BarChart
              xAxis={[
                {
                  data: barData.months,
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: barData.student,
                  label: '学生',
                  color: '#00bcd4',
                },
                {
                  data: barData.teacher,
                  label: '老师',
                  color: '#faa',
                },
              ]}
              height={300}
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default DashBoard;
