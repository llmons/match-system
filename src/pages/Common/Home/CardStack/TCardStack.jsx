import {useContext, useEffect, useState} from 'react';
import {alpha, Box, Card, CardContent, Stack, styled, Typography} from '@mui/material';
import {motion} from 'framer-motion'; // 确保这里导入的是 framer-motion
import {getRandomProj} from '../Home.jsx';
import {LoadingContext} from '../../../../components/LoadingProvider.jsx';
import {useNavigate} from "react-router";

// 定义卡片的样式
const CardContainer = styled(motion.div)(({theme, hovered}) => ({
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    border: hovered ? `4px solid ${'#FFC0CB'}` : 'none',
    overflow: 'hidden',
    transition: 'border 0.3s ease',
    cursor: 'pointer',
    zIndex: hovered ? 3 : 1, // 使 hover 的卡片 zIndex 最大
}));

// 遮罩层，用来做前景的遮罩效果
const Overlay = styled(Box)(({theme, hovered}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: hovered ? `${alpha('#FFC0CB', 0.5)}` : 'transparent',
    transition: 'background-color 0.3s ease',
}));

// 显示的提示文字层
const HoverText = styled(Typography)(({theme, hovered}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: hovered ? theme.palette.info.contrastText : 'transparent',
    fontSize: '24px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    zIndex: 10, // 确保文字在卡片的最上方
}));

const TCardStack = () => {
    const navigate = useNavigate()
    const {startLoading, stopLoading} = useContext(LoadingContext);
    const [hoveredCard, setHoveredCard] = useState(null); // 记录当前悬浮的卡片
    const [popularProj, setPopularProj] = useState([]);
    const svgUrl = ['/src/assets/ieproj.svg', '/src/assets/competition.svg', '/src/assets/graduation.svg']

    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all(
                [0, 1, 2].map(() => getRandomProj().then(proj => proj))
            )
            console.log(data)
            setPopularProj(data);
        };
        startLoading();
        fetchData().then(null);
        stopLoading();
    }, []);

    return (
        <Box
            flex={1}
            sx={{
                display: 'flex',
                justifyContent: 'start',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '500px',
                    height: '250px',
                }}
            >
                {[0, 1, 2].map((cardId, index) => (
                    <CardContainer
                        key={cardId}
                        hovered={hoveredCard === cardId ? 1 : 0}
                        style={{
                            top: `${index * 150}px`, // 卡片的位移，A、B、C 逐渐下移
                            right: `${index === 1 ? index * 100 : 0}px`, // 控制遮挡关系
                        }}
                        initial={{opacity: 0, x: 200}} // 初始状态：从右侧（x: 200）并不可见（opacity: 0）
                        animate={{opacity: 1, x: 0}} // 进入时：完全可见，并且位移到左侧（x: 0）
                        transition={{
                            delay: index * 0.3, // 延迟时间：依次弹出
                            duration: 1, // 动画时长
                            type: 'spring', // 弹性动画效果
                        }}
                        whileHover={{
                            scale: 1.05, // 悬浮时的放大效果
                            transition: { // 在 hover 时独立的 transition 设置
                                duration: 0.3, // 确保hover动画不被延迟
                            },
                        }}
                        onMouseEnter={() => setHoveredCard(cardId)} // 悬浮时触发
                        onMouseLeave={() => setHoveredCard(null)} // 离开时恢复
                        onClick={() => navigate('/teacher/myProj')}
                    >
                        {/* 悬浮文字 */}
                        <HoverText hovered={hoveredCard === cardId ? 1 : 0}>
                            点击查看更多
                        </HoverText>

                        <Overlay hovered={hoveredCard === cardId ? 1 : 0}/>

                        <Card sx={{width: '100%', height: '100%'}}>
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <>
                                        <Typography variant="h6">{popularProj[index]?.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {popularProj[index]?.major}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {popularProj[index]?.instructor}
                                        </Typography>
                                    </>
                                    {popularProj[index]?.category === '大创' ? (
                                            <img src="/src/assets/ieproj.svg" alt="svg"/>)
                                        : popularProj[index]?.category === '竞赛' ? (
                                                <img src="/src/assets/competition.svg" alt="svg"/>)
                                            : (<img src="/src/assets/graduation.svg" alt="svg"/>)}
                                </Stack>
                            </CardContent>
                        </Card>
                    </CardContainer>
                ))}
            </Box>
        </Box>
    );
};

export default TCardStack;
