import { Box, Paper, Typography } from '@mui/material';

export enum ImagePosition {
    LEFT = 'left',
    RIGHT = 'right',
}

interface ResourceCardProps {
    title: string;
    description: string;
    image: string;
    imagePosition?: ImagePosition; // по умолчанию справа
}

export default function ResourceCard({
                                         title,
                                         description,
                                         image,
                                         imagePosition = ImagePosition.RIGHT,
                                     }: ResourceCardProps) {
    return (
        <Paper
            sx={{
                borderRadius: 4,
                backgroundColor: '#0b3d0b',
                color: '#fff',
                p: { xs: 2, md: 2 },
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: imagePosition === ImagePosition.RIGHT ? 'row' : 'row-reverse',
                },
                alignItems: 'stretch',
                gap: 2,
            }}
        >
            {/* Текстовая часть */}
            <Box
                sx={{
                    flex: { md: 2 },
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    align="center"
                    variant="h6"
                    sx={{
                        color: '#C5E580',
                        mb: { xs: 2, md: 2 },
                        fontFamily: '"Ruslan Display", serif',
                        fontWeight: 400,
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    sx={{ color: 'rgba(255,255,255,0.9)' }}
                >
                    {description}
                </Typography>
            </Box>

            {/* Картинка */}
            <Box
                sx={{
                    flex: { md: 1 },
                    width: { xs: '60%', sm: '40%', md: 'auto' },
                    mx: { xs: 'auto', md: 0 },
                    backgroundColor: 'white',
                    borderRadius: 3,
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        display: 'block',
                        width: '100%',
                        maxWidth: 180,
                        aspectRatio: '1 / 1',
                        objectFit: 'contain',
                    }}
                    borderRadius={4}
                />
            </Box>
        </Paper>
    );
}
