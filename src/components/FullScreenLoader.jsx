import {Box, CircularProgress, styled} from '@mui/material';
import {motion} from 'motion/react';

const FullScreenOverlay = styled(Box)(({theme}) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明背景
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300, // 保证在最上层
}));

const MotionLoader = styled(motion.div)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const FullScreenLoader = () => {
    return (
        <FullScreenOverlay>
            <MotionLoader
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    repeat: Infinity,
                }}
            >
                <CircularProgress
                    size={60}
                    sx={{
                        color: (theme) => theme.palette.primary.main
                    }}
                />
            </MotionLoader>
        </FullScreenOverlay>
    );
};

export default FullScreenLoader;
