import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import ResourceCard, {ImagePosition} from "./ResourceCard.tsx";
import theme from "../theme.ts";

export default function PreparationSection() {
    return (
        <Box component="section" id="preparation" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                {/* Заголовки */}
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{ fontFamily: 'Montserrat Alternates', fontWeight: 700 }}
                >
                    Подготовка
                </Typography>
                <Typography align="center" variant={'h4'} sx={{ mb: 6, fontFamily: '"Cormorant Infant", serif' }} >
                    Полезные ресурсы для подготовки к олимпиаде
                </Typography>

                <Grid container spacing={4}>
                    {/* Левая большая карточка */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            sx={{
                                borderRadius: 2,
                                border: '2px solid',
                                borderColor: theme.palette.primary.main,
                                height: '100%',
                                p: { xs: 3, md: 4 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/IPR smart лого (вторая страница).png"
                                alt="IPR SMART"
                                sx={{ maxHeight: 170, mb: 3 }}
                            />
                            <Typography fontSize={'1.6rem'} sx={{ mb: 2 }}>
                                Цифровой образовательный ресурс <b style={{ color: theme.palette.primary.main }}>IPR SMART</b> — современная цифровая библиотека с
                                удобными сервисами для преподавания и обучения на одной платформе.
                            </Typography>
                            <Typography fontSize={'1.6rem'}>
                                При желании Вы можете запросить у вашего вуза пароль и логин для входа в личный кабинет
                                и полного доступа к книгам.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Правая часть */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12 }}>
                                <ResourceCard
                                    title="ВСЕРОССИЙСКИЙ ЭКОЛОГИЧЕСКИЙ ПОРТАЛ"
                                    description="Некоммерческий общообразовательный информационный сайт, посвящённый экологической тематике и вопросам здоровья"
                                    image="/images/эко портал вся экология - лого (вторая страница).png"
                                    imagePosition={ImagePosition.RIGHT}
                                />
                            </Grid>

                            {/* 2 */}
                            <Grid size={{ xs: 12 }}>
                                <ResourceCard
                                    title="КОНКУРСЫ И ОЛИМПИАДЫ ПО ГЕОГРАФИИ"
                                    description="На данном сайте можно принять участие в конкурсах, олимпиадах и викторинах, созданных специально для проекта «Эрудит.Онлайн»"
                                    image="/images/эрудит онлайн - лого (вторая страница).png"
                                    imagePosition={ImagePosition.RIGHT}
                                />
                            </Grid>

                            {/* 3 */}
                            <Grid size={{ xs: 12 }}>
                                <ResourceCard
                                    title="ТУРИСТИЧЕСКИЕ МАРШРУТЫ ЧЕЧНИ"
                                    description="Список туристических маршрутов Чеченской Республики, опубликованных на официальном сайте Министерства ЧР по туризму"
                                    image="/images/мин туризма - лого (вторая страница).png"
                                    imagePosition={ImagePosition.RIGHT}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
