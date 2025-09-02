// src/theme.ts
import { createTheme } from '@mui/material/styles';


const MAIN_COLOR = '#003300';
// Определяем основные цвета из макета
const theme = createTheme({
    palette: {
        primary: {
            main: MAIN_COLOR, // Темно-зеленый
        },
        secondary: {
            main: '#C5E580', // Светло-зеленый (подберите точнее пипеткой в Figma)
        },
        background: {
            default: '#ffffff', // Основной фон страницы
        },
        text: {
            primary: '#212121', // Основной цвет текста
            secondary: '#FFFFFF', // Белый текст
        }
    },
    typography: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif', // Пример, подберите шрифты из Figma
        h1: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            fontWeight: 700,
            color: MAIN_COLOR,
        },
        h2: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            fontWeight: 700,
            color: MAIN_COLOR,
        },
        h3: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            color: MAIN_COLOR,
        },
        h4: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            color: MAIN_COLOR,
        },
        h5: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            color: MAIN_COLOR,
        },
        h6: {
            fontFamily: '"Montserrat Alternates", sans-serif',
            color: MAIN_COLOR,
        },

        button: {
            textTransform: 'none', // Кнопки без верхнего регистра
            fontWeight: 600,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50, // Сильно скругленные кнопки
                },
            },
        },
    },
});

export default theme;