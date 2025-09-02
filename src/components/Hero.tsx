// src/components/Hero.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

import mapBg from '../assets/images/Карта (Первая страница).png';
import {ImageCollage} from "./ImageCollage.tsx";

const Hero: React.FC = () => {
    return (
        <Box sx={{
            position: 'relative',
            py: { xs: 4, md: 8 },
            overflow: 'hidden',
            maxWidth: 1200, // Ограничиваем максимальную ширину здесь
            mx: 'auto',      // и центрируем
            px: { xs: 2, md: 3 } // Добавляем боковые отступы
        }}>
            <Box
                component="img"
                src={mapBg}
                alt=""
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '55%',
                    width: { xs: '150%', md: '90%' },
                    transform: 'translate(-50%, -50%)',
                    opacity: { xs: 0.7, md: 1 },
                    zIndex: 0,
                }}
            />

            <Box sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                // На мобильных - колонка, на десктопе - ряд
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { md: 8, xs: 4} // Замена <Grid spacing={4}>
            }}>

                {/* Левая колонка - теперь это просто Box */}
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                }}>
                    <Typography
                        component="h1"
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' }
                        }}
                    >
                        Олимпиада
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: '"Cormorant Infant", serif',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2,
                            mb: 3
                        }}
                    >
                        для школьников<br />и студентов
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 450,
                            mb: 4,
                            fontSize: '1.1rem'
                        }}
                    >
                        Олимпиада проводиться с целью выявить способных студентов и школьников, а также повысить интерес к экологии, туризму и географии
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        component={RouterLink}
                        to="/directions"
                        sx={{ px: 4, py: 1.5, borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold' }}
                    >
                        Участвовать
                    </Button>
                </Box>

                {/* Правая колонка - второй Box */}
                <ImageCollage />
            </Box>
        </Box>
    );
};

export default Hero;