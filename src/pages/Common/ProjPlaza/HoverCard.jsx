import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function HoverCard({
  imageUrl,
  title,
  subtitle,
  extraInfo,
  link,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(link)}
      style={{ cursor: 'pointer' }}
    >
      <Card
        sx={{
          maxWidth: 300,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
          position: 'relative',
        }}
      >
        {/* 图片部分 */}
        <CardMedia component='img' height='160' image={imageUrl} alt={title} />

        {/* 遮罩 + 额外信息（在 hover 上展示） */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '160px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <Typography variant='body1'>{extraInfo}</Typography>
        </motion.div>

        {/* 文字部分 */}
        <CardContent>
          <Typography variant='h6' component='div' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

HoverCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  extraInfo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
