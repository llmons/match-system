import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Typography, useTheme} from "@mui/material";


// 文字轮播
const TTextCarousel = () => {
    const theme = useTheme()
    // 要轮播的文本列表
    const texts = ['创建新的项目', '寻找合适的项目成员', '管理项目信息'];
    const [index, setIndex] = useState(0);

    // 每隔3秒切换到下一个文本
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // 3秒切换一次
        return () => clearInterval(interval);
    }, []);

    // 动画配置
    const variants = {
        enter: {opacity: 0, y: -50}, // 进入前的位置和样式
        center: {opacity: 1, y: 0}, // 居中时的样式
        exit: {opacity: 0, y: 50}, // 退出后的样式
    };

    return (
        <div style={{position: 'relative', width: '300px', height: '50px', overflow: 'hidden'}}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index} // key 是 AnimatePresence 追踪的依据
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{duration: 0.3}} // 动画持续时间
                    style={{position: 'absolute', width: '100%', textAlign: 'center'}}
                >
                    <Typography variant="h5" color={'#FAA'}>
                        {texts[index]}
                    </Typography>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TTextCarousel;