import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/Факультет географии и геоэкологии (2).jpg'; // Убедитесь, что путь верный

const navItems = [
    { label: 'Олимпиады', path: '/directions' },
    { label: 'Подготовка', path: '/directions#preparation' },
    { label: 'Контакты', path: '/#contacts' },
];

const Header: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ py: 1 }}>
            <Container disableGutters maxWidth="lg">
                <Toolbar>
                    <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', mr: 2 }}>
                        <Box component="img" src={logo} alt="АТИ Олимп" sx={{ height: 48, mr: 1 }} />
                        {/* <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            АТИ Олимп
                        </Typography> */}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map(({ label, path }) => (
                            <Button
                                key={label}
                                component={RouterLink}
                                to={path}
                                sx={{ color: 'text.primary', mx: 1.5 }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
