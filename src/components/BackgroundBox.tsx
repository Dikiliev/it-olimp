import React from 'react';
import { Box } from '@mui/material';
import sectionBg from '../assets/images/лес и туман (Первая страница - Об олимпиаде).jpg';

interface BackgroundBoxProps {
  children?: React.ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BackgroundBox: React.FC<BackgroundBoxProps> = ({ 
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
        backgroundImage: `linear-gradient(180deg, #ffffff 00%, #ffffff20 50%, #ffffff 100%), url("${sectionBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: offset ? `center ${offset}px` : 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative',
        ...style
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundBox;