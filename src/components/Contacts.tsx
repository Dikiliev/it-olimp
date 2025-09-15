// src/components/Contacts.tsx
import React from 'react';
import { Box, Typography, Paper, TextField } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

// Иконки для контактной информации
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

// --- Создаем кастомный TextField в точности как на макете ---
const CustomTextField = styled(TextField)({
    // Стили для самого поля ввода
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',
        borderRadius: '25px', // Сильное скругление
        transition: 'all 0.3s',
        '&:hover': {
            boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.2)', // Легкое свечение при наведении
        },
        // Стили для рамки поля
        '& fieldset': {
            borderColor: 'transparent', // Убираем рамку по умолчанию
        },
        '&:hover fieldset': {
            borderColor: 'transparent', // Убираем рамку при наведении
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent', // Убираем рамку при фокусе
        },
    },
    // Стили для текста-лейбла (который работает как плейсхолдер)
    '& label': {
        color: '#757575', // Серый цвет для плейсхолдера
    },
    '& label.Mui-focused': {
        color: '#757575', // Оставляем серым при фокусе
    },
});

// Компонент для одного пункта контактной информации
const ContactItem = ({ icon, text }: { icon: React.ReactElement<SvgIconProps>, text: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, my: 3 }}>
        {/* ИСПРАВЛЕНИЕ: Иконки теперь черные */}
        {React.cloneElement(icon, { sx: { fontSize: 30, color: '#000' } })}
        <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#000' }}>{text}</Typography>
    </Box>
);

const ContactsSection: React.FC = () => {
    return (
        <Box id="contacts" sx={{
            py: { xs: 5, md: 8 },
            position: 'relative', // Нужно для наложения градиента
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* --- Фон (картинка + градиент) --- */}
            <Box sx={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: `linear-gradient(180deg, #00330059 0%, #00330099 100%), url('/images/лес и теман (Первая страница - контакты).jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1, // Помещаем фон на задний план
            }} />

            <Typography
                variant="h2"
                align="center"
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: { xs: 5, md: 8 },
                }}
            >
                Контакты
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'center',
                alignItems: { xs: 'center', lg: 'stretch' },
                gap: 5,
                maxWidth: '1200px',
                width: '90%',
            }}>

                {/* --- ЛЕВАЯ КОЛОНКА: КАСТОМНАЯ ФОРМА --- */}
                <Box sx={{
                    width: { xs: '100%', lg: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pr: { lg: 4 } // Небольшой отступ справа на десктопе
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>Остались вопросы?</Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>Напиши нам</Typography>

                    {/* Используем наш новый кастомный компонент */}
                    <CustomTextField label="ФИО" variant="outlined" sx={{ mb: 2.5 }} />
                    <CustomTextField label="Email" variant="outlined" sx={{ mb: 2.5 }} />
                    <CustomTextField
                        label="Сообщение"
                        variant="outlined"
                        multiline
                        rows={5}
                    />
                </Box>

                {/* --- ПРАВАЯ КОЛОНКА: ИНФОРМАЦИЯ --- */}
                <Paper
                    elevation={8}
                    sx={{
                        px: { xs: 3, md: 5 },
                        borderRadius: '25px',
                        width: { xs: '100%', lg: '50%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <ContactItem icon={<LocalPhoneOutlinedIcon />} text="+7 929 000 55 04" />
                    <ContactItem icon={<MailOutlineIcon />} text="fgig.chesu@yandex.ru" />
                    <ContactItem icon={<BusinessOutlinedIcon />} text="г. Грозный, ул. Льва Яшина, 31А" />
                    <ContactItem icon={<AccessTimeOutlinedIcon />} text="пн - пт, 9:00 - 17:00" />
                </Paper>
            </Box>
        </Box>
    );
};

export default ContactsSection;