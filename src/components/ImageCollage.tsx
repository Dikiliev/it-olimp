// Вставьте это в ваш компонент Hero.tsx
// Не забудьте импортировать хуки и изображения.

import { Box, useTheme, useMediaQuery } from '@mui/material';
import globeImg from '../assets/images/глобус (Первая страница).jpg';
import handsImg from '../assets/images/зелень (Первая страница).jpg';
import hikersImg from '../assets/images/горы и туристы (Первая страница).jpg';

export const ImageCollage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // --- МОБИЛЬНАЯ ВЕРСИЯ: ТРИ МАЛЕНЬКИХ КВАДРАТА В РЯД, БЕЗ СКРОЛЛА ---
    if (isMobile) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1.5, // Небольшой промежуток между картинками
                    width: '100%',
                    mt: 4 // Отступ сверху на мобильных
                }}
            >
                {[hikersImg, globeImg, handsImg].map((imgSrc, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={imgSrc}
                        sx={{
                            // Магия: вычисляем ширину, чтобы три картинки и два промежутка идеально вписались
                            width: `calc((100% - ${theme.spacing(3)}) / 3)`,
                            aspectRatio: '1 / 1', // Идеальный квадрат
                            borderRadius: '16px', // Чуть менее круглые углы для маленьких элементов
                            objectFit: 'cover',
                            boxShadow: 3,
                        }}
                    />
                ))}
            </Box>
        );
    }

    // --- ДЕСКТОПНАЯ ВЕРСИЯ: АСИММЕТРИЧНЫЙ "ХАОС" ---
    return (
        <Box sx={{
            height: { sm: 400, md: 500 },
            display: 'flex',
            flexDirection: 'row',
            gap: 2.5, // Немного увеличим основной промежуток
            // Главный трюк для "хаоса": выравниваем колонки по нижнему краю
            alignItems: 'flex-end',
        }}>

            {/* Левая часть: укороченное изображение */}
            <Box
                component="img"
                src={globeImg}
                sx={{
                    width: '50%',
                    // Делаем его чуть короче, чем максимальная высота
                    height: '80%',
                    transform: 'translateY(-15%)',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    boxShadow: 3,
                }}
            />

            {/* Правая часть: колонка из двух изображений, занимает всю высоту */}
            <Box sx={{
                width: '50%',
                height: '100%', // Эта колонка задает максимальную высоту
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5, // Такой же промежуток, как и по горизонтали
            }}>
                <Box
                    component="img"
                    src={hikersImg}
                    sx={{
                        // Заставляем оба блока делить доступное пространство поровну
                        flex: 1,
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                        boxShadow: 3,
                        minHeight: 0, // Важный фикс для Flexbox, чтобы он мог сжимать элементы
                    }}
                />
                <Box
                    component="img"
                    src={handsImg}
                    sx={{
                        flex: 1, // Второй блок также занимает равную часть
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                        boxShadow: 3,
                        minHeight: 0,
                    }}
                />
            </Box>
        </Box>
    );
}