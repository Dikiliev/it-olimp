// src/components/About.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

import universityInCard  from '../assets/images/университет (первая страница).png';
import BackgroundBox from './BackgroundBox';
import theme from "../theme.ts";

const AboutSection: React.FC = () => {
    return (
        <BackgroundBox offset={0}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, md: 4 },
                    width: '100%',
                }}
            >
                <Typography
                    variant="h2"
                    align="center"
                    color={theme.palette.primary.main}
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Об олимпиаде
                </Typography>

                {/* Информационная карточка */}
                <Paper
                    elevation={8}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: '35px',
                        maxWidth: '1100px',
                        width: '90%',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                            {/* Текст... */}
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontFamily: '"Cormorant Infant", serif' }}>
                                Кто проводит?
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                Олимпиада по экологии, географии и туризму 
                                ежегодно проходит на базе Чеченского 
                                государственного университета...
                            </Typography>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontFamily: '"Cormorant Infant", serif' }}>
                                Зачем проводят?
                            </Typography>
                            <Typography variant="body1">
                                А проводят ее для вас! В ней могут участвовать 
                                студенты вузов и ссузов, а также школьники 
                                9-11 классов...
                            </Typography>
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                            <Box
                                component="img"
                                src={universityInCard} // <-- Картинка для карточки
                                alt="Чеченский государственный университет"
                                sx={{ width: '100%', borderRadius: '20px', display: 'block' }}
                            />
                        </Box>
                    </Box>
                </Paper>

                {/* Видео-блок */}
                {/* TODO: Заменить YouTube ссылку на официальное видео олимпиады */}
                {/* <Box
                    sx={{
                        position: 'relative',
                        maxWidth: '1100px',
                        width: '90%',
                        aspectRatio: '16 / 9',
                        borderRadius: '35px',
                        overflow: 'hidden',
                        boxShadow: '0px 10px 30px rgba(0,0,0,0.4)',
                        cursor: 'pointer',
                    }}
                >

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Ta7qnktzIxo?list=RDTa7qnktzIxo" // TODO ЗАМЕНИТЬ ССЫЛКУ!
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box> */}
            </Box>
        </BackgroundBox>
    );
};

export default AboutSection;