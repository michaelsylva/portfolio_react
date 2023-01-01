import {createStyles, Container, Group, ActionIcon, Stack, Grid, Center, Box} from '@mantine/core';
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
    IconCode,
    IconBrandLinkedin,
    IconBrandSpotify, IconArrowLeft, IconBrandReact, IconCopyright
} from '@tabler/icons';
import { Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: "#228be6",
        color: "white",
        marginTop: 120,
        borderTop: `1.6px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        boxShadow: "0px -3px 15px rgba(0,0,0,0.3);"
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function FooterSocial() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Grid grow style={{width: "100%"}}>
                    <Grid.Col md={6} lg={6} sm={12}>
                        <Center>
                        <Stack>
                            <Group>
                                <Text color={"white"} size={"md"} fw={600} style={{textAlign: "left"}}>Mike Sylva</Text>
                            </Group>
                            <Box style={{textAlign: "left"}}>
                                    <Stack>
                                    <Text size={"sm"}>This site was built with React <IconBrandReact style={{verticalAlign: "middle"}}/></Text>
                                    <Text size={"xs"} color={"gray.5"}><IconCopyright size={10} style={{verticalAlign: 'super'}}/> 2023 Michael Sylva</Text>
                                    </Stack>
                            </Box>
                        </Stack>
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6} lg={6}  sm={12}>
                        <Center>
                        <ActionIcon size="lg" variant={'transparent'} onClick={()=>window.open("https://instagram.com/michael.sylva","_blank")}>
                            <IconBrandInstagram size={23} stroke={1.5} color={"white"} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant={'transparent'} onClick={()=>window.open("https://linkedin.com")}>
                            <IconBrandLinkedin size={23} stroke={1.5} color={"white"} />
                        </ActionIcon>
                        <ActionIcon variant={'transparent'} onClick={()=>window.open("https://open.spotify.com/user/michael_sylva?si=ae881d49e1884137")} size="lg">
                            <IconBrandSpotify size={23} stroke={1.5} color={"white"}/>
                        </ActionIcon>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}
