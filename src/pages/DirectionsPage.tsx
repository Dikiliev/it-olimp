// src/pages/DirectionsPage.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GallerySlider from "../components/GallerySlider.tsx";
import PreparationSection from "../components/PreparationSection.tsx";

// --- Данные ---
const directions = [
    {
        title: 'ТУРИЗМ',
        description: 'Туризм - это важное направление, которое играет ключевую роль для развития экономики Чеченской Республики',
        image: '/images/горы и озеро (туризм - вторая страница).jpg',
        href: 'https://forms.yandex.ru/cloud/686bb81884227c9fe883407c',
    },
    {
        title: 'ГЕОГРАФИЯ',
        description: 'География - это важная наука, которая играет ключевую роль для развития экономики Чеченской Республики',
        image: '/images/глобус (география - вторая страница).jpg',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeZgXmKTexRld_debc9JYnvrufHP2f2AGdhxG4y5SqB_UGYkw/viewform?usp=header',
    },
    {
        title: 'ЭКОЛОГИЯ',
        description: 'Экология - это направление, которое играет ключевую роль для сохранения природы Чеченской Республики',
        image: '/images/знак экологии (экология - вторая страница).jpg',
        href: 'https://forms.yandex.ru/u/687be476068ff01402320b9a',
    },
];

const galleryImages = Array.from({ length: 6 }, (_, i) => `/gallery/${i + 1}.jpeg`);

// --- ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ ---
const DirectionsPage: React.FC = () => {
    return (
        <Box>
            {/* ======================================================================= */}
            {/* =================== СЕКЦИЯ 1: ВЫБОР НАПРАВЛЕНИЯ =================== */}
            {/* ======================================================================= */}
            <Box
                sx={{
                    py: { xs: 5, md: 8 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    overflow: 'hidden',
                }}
            >
                {/* --- Фоновое изображение с градиентным переходом в белый --- */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1) 100%), url('/images/лес (выбор направления - вторая страница).jpg')`,
                    backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1,
                }} />

                <Box sx={{ textAlign: {xs: 'left', md: 'center'}, px: 2 }}>
                    <Typography variant="h2" component="h1" sx={{ fontSize: {xs: '2.5rem', md: '3.5rem'} }}>
                        Выбор направления
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: 700, mt: 2, color: 'text.primary' }}>
                        Олимпиада проводится по трем направлениям: география, туризм и экология. Каждое направление играет важную роль при формирование различных компетенцией у студентов и школьников
                    </Typography>
                </Box>

                {/* --- НОВЫЕ КАРТОЧКИ НАПРАВЛЕНИЙ --- */}
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, px: 2 }}>
                    {directions.map((dir) => (
                        <Paper
                            key={dir.title}
                            component="a"
                            href={dir.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            elevation={8}
                            sx={{
                                position: 'relative',
                                width: { xs: '100%', sm: 320, md: 320 },
                                height:  { xs: 240, md: 480 },
                                borderRadius: '35px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0px 20px 40px rgba(0,0,0,0.2)',
                                },
                                textDecoration: 'none',
                                cursor: 'pointer',
                                // Устанавливаем изображение как фон самой карточки
                                backgroundImage: `url('${dir.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end', // Прижимаем контент к низу
                            }}
                        >
                            {/* Градиентное наложение для текста */}
                            <Box sx={{
                                width: '100%',
                                p: 3,
                                color: 'white',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 20%, transparent 100%)',
                            }}>
                                <Typography variant="h4" component="h3" align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                                    {dir.title}
                                </Typography>
                                <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.85)', mt: 1.5 }}>
                                    {dir.description}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>

            {/* ======================================================================= */}
            {/* =================== СЕКЦИЯ 2: ПРОШЛЫЕ ОЛИМПИАДЫ =================== */}
            {/* ======================================================================= */}
            <Box sx={{ py: { xs: 5, md: 8 }, overflow: 'hidden' }}>

                <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: {xs: '2.5rem', md: '3.5rem'}, textAlign: {xs: 'left', md: 'center'} }}>
                        Прошлые олимпиады
                    </Typography>
                    <Box sx={{
                        display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'start', gap: { xs: 3, md: 5 }, mb: 8
                    }}>
                        <Box sx={{ flex: '1 1 50%' }}>


                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Каждый год мы собираем огромное количество студентов и школьников для проведения этого масштабного мероприятия. Данные олимпиады проводятся с 2020 года на базе Чеченского государственного университета имени А.А. Кадырова факультете географии и геоэкологии.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Каждый год мы собираем огромное количество студентов и школьников для проведения этого масштабного мероприятия.
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            src="/gallery/3.jpeg"
                            sx={{ display: {xs: 'none', md: 'block'}, flex: '1 1 50%', width: '100%', maxWidth: '350px', borderRadius: '20px', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>

                <GallerySlider galleryImages={galleryImages}/>
            </Box>

            <PreparationSection/>
        </Box>
    );
};

export default DirectionsPage;