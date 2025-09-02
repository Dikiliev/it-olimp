import { Box, Container, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
    galleryImages: string[];
}

export default function GallerySlider({ galleryImages }: Props) {
    return (
        <Container maxWidth="lg" sx={{ position: 'relative', mt: 5 }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                loop={true}
                centeredSlides
                breakpoints={{
                    0: { slidesPerView: 1.4, spaceBetween: 15 },
                    600: { slidesPerView: 2.5, spaceBetween: 20 },
                    900: { slidesPerView: 3, spaceBetween: 25 }, // убрал .5
                }}
            >
                {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="img"
                            src={img}
                            sx={{
                                width: '100%',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                borderRadius: 2,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопки */}
            <IconButton
                className="swiper-button-prev-custom"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: { xs: -20, sm: -28 },
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    '&:hover': { backgroundColor: 'white' },
                }}
            >
                <ArrowBackIosNewIcon sx={{ ml: '5px' }} />
            </IconButton>

            <IconButton
                className="swiper-button-next-custom"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: -20, sm: -28 },
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    '&:hover': { backgroundColor: 'white' },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Container>
    );
}
