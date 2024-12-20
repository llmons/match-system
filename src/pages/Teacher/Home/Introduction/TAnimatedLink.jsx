import {Link, Typography, useTheme} from '@mui/material';
import {motion} from 'motion/react';
import PropTypes from "prop-types";
import {Link as RouterLink} from 'react-router-dom';
import {ArrowForward} from "@mui/icons-material";

const TAnimatedLink = ({href, children}) => {
    const theme = useTheme();
    return (
        <Link
            component={RouterLink}
            to={href}
            underline="none"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                color: theme.palette.secondary,
                textDecoration: 'none',
                position: 'relative',
                fontWeight: 500,
                '&:hover': {color: theme.palette.primary}
            }}
        >
            {/* 文字部分 */}
            <motion.div
                whileHover="hover"
                initial="initial"
                style={{position: 'relative', display: 'inline-block'}}
            >
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        color: theme.palette.secondary,
                        position: 'relative',
                        zIndex: 1,
                        '&:hover': {color: theme.palette.primary}
                    }}
                >
                    {children}
                </Typography>

                {/* 下划线动画 */}
                <motion.div
                    variants={{
                        initial: {width: 0},
                        hover: {width: '100%'}
                    }}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    style={{
                        position: 'absolute',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        bottom: 0,
                        left: 0,
                    }}
                />
            </motion.div>

            <ArrowForward/>
        </Link>
    );
};

TAnimatedLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default TAnimatedLink;