import React from 'react';
import { Box } from '@mui/material';
import sectionBg from '../assets/images/лес и туман (Первая страница - Об олимпиаде).jpg';

interface SectionBackgroundProps {
  children: React.ReactNode;
  offset?: number; // 控制背景位置的偏移量
  className?: string;
  style?: React.CSSProperties;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  children, 
  offset = 0,
  className,
    style
}) => {
  return (
    <Box
      className={className}
      sx={{
        py: { xs: 5, md: 8 },
        backgroundImage: `linear-gradient(180deg, #ffffff 0%, #ffffff00 50%, #ffffff 100%), url("${sectionBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        transform: offset ? `translateY(${offset}px)` : 'none',
        ...style
      }}
    >
      {children}
    </Box>
  );
};

export default SectionBackground;