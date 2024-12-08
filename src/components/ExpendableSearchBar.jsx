import {useState} from 'react';
import {Box, IconButton, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {AnimatePresence, motion} from 'framer-motion';

const ExpandableSearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // 动画控制的样式
    const containerVariants = {
        collapsed: {width: 40}, // 折叠时的宽度
        expanded: {width: 300}, // 展开时的宽度
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {/* 搜索框的容器 */}
            <motion.div
                initial="collapsed"
                animate={isExpanded ? 'expanded' : 'collapsed'}
                variants={containerVariants}
                transition={{duration: 0.5, type: 'spring', stiffness: 100}}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '24px',
                    padding: '4px 8px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                }}
            >
                {/* 搜索图标 */}
                <IconButton
                    onClick={() => setIsExpanded((prev) => !prev)}
                    sx={{p: 0.5}}
                >
                    <SearchIcon/>
                </IconButton>

                {/* 搜索输入框，只有展开时才显示 */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{width: 0, opacity: 0}}
                            animate={{width: '100%', opacity: 1}}
                            exit={{width: 0, opacity: 0}}
                            transition={{duration: 0.3}}
                            style={{flex: 1}}
                        >
                            <InputBase
                                onBlur={() => setIsExpanded(false)}
                                placeholder="搜索..."
                                sx={{ml: 1, flex: 1}}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </Box>
    );
};

export default ExpandableSearchBar;
