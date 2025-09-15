// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';

// Иконки соцсетей
import TelegramIcon from '@mui/icons-material/Telegram';
// ВАЖНО: В стандартном пакете MUI нет иконок VK и OK.
// Их нужно добавлять как кастомные SVG иконки.
// Здесь я использую заглушки, чтобы показать структуру.
import CircleIcon from '@mui/icons-material/Circle';
import {VkIcon} from "../assets/icons/VkIcon.tsx";
import {OkIcon} from "../assets/icons/OkIcon.tsx"; // Заглушка для VK/OK

import { SlSocialVkontakte } from "react-icons/sl";


const Footer: React.FC = () => {
    return (
        <Box sx={{
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            backgroundColor: '#1A1A1A', // Очень темный фон
            color: 'rgba(255, 255, 255, 0.7)',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                gap: 4,
                maxWidth: '1200px',
                mx: 'auto',
                mb: 4,
            }}>

                {/* --- Левая колонка: Полезные ссылки --- */}
                <Box>
                    <Typography variant="h6" gutterBottom color={'secondary'}>Полезные ссылки</Typography>
                    <Link  href="https://www.chesu.ru/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                        Официальный сайт ЧГУ им. А.А. Кадырова
                    </Link>
                    <Link href="https://chechentourism.ru/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                        Министерство Чеченской Республики по туризму
                    </Link>
                    <Link href="https://mpr-chr.ru/" color="inherit" underline="hover" sx={{ display: 'block' }}>
                        Министерство природных ресурсов и охраны окружающей среды
                    </Link>
                </Box>

                {/* --- Правая колонка: Социальные сети --- */}
                <Box>
                    <Typography variant="h6" color={'secondary'} gutterBottom>Социальные сети</Typography>
                    <Box>
                        <IconButton href="https://vk.com/chesu_ru" sx={{ color: 'white' }}>
                            <SlSocialVkontakte size={24} />
                        </IconButton>
                        {/*<IconButton href="https://ok.ru/chesu" sx={{ color: 'white' }}>*/}
                        {/*    <SlSocialOdnoklassniki size={24} />*/}
                        {/*</IconButton>*/}
                        <IconButton href="https://t.me/chesuofficial" sx={{ color: 'white' }}>
                            <TelegramIcon />
                        </IconButton>
                    </Box>

                </Box>
            </Box>

            {/* --- Нижняя строка с копирайтом --- */}
            <Box
                sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    pt: 3,
                    maxWidth: '1200px',
                    mx: 'auto',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" sx={{ mb: 1 }}>
                    Все права сайта защищены и принадлежат ЧГУ им. А.А. Кадырова ©
                </Typography>
                <Typography variant="caption" color="rgba(255, 255, 255, 0.5)">
                    Замечания и предложения по работе сайта просим отправлять на почтовый ящик <Link href="mailto:fgig.chesu@yandex.ru" color="inherit">fgig.chesu@yandex.ru</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;