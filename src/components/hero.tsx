import {Avatar, Text, Burger, Group, Image, Header, Stack, Center, createStyles, Grid, Button} from "@mantine/core";
import {IconBrandGithub, IconMail, IconMapPin} from "@tabler/icons";
import AbstractShape from "../images/cool-abstract-shape.png"
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles"
import type {Container, Engine} from "tsparticles-engine";

import {useCallback} from "react";
import ReactFloaterJs from "react-floaterjs";
import {useMediaQuery} from "@mantine/hooks";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme)=>({
    links: {
        color: "black",
        textDecoration: "underline"
    },

    margin: {
        margin: "-50px",
        padding: "3%",
        backgroundImage: "../images/cool-background.svg"
    },
    particles: {
        position: "absolute",
        margin: "0 auto",
        height: "40%",
        width: "60%",
        zIndex: -1,
    }
}))

export function Hero() {

    const { classes, cx } = useStyles();
    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')
    const nav = useNavigate()


    return (

        <>
                <Grid id="home" align={"flex-start"} pt={50} pl={'md'} pr={'md'} grow  className={classes.margin}>

                    {/*<Particles id="tsparticles" url="js/bubbles.json" init={particlesInit} loaded={particlesLoaded} width={"auto"} className={classes.particles}/>
*/}
                    <Grid.Col md={6} sm={12} >
                        <Center style={{ height: 350 }}>
                            <Stack spacing={0} align={"flex-start"}>

                        <Text size={isTabletOrMobile ? 35 : 55} fw={900} variant="gradient"
                              gradient={{ from: 'blue.5', to: 'blue.9', deg: 45 }}>Michael Sylva</Text>

                        <Stack spacing={0}>
                        <Text size={30} fw={400} color={"blue.10"}>Software Engineer</Text>
                        <Group>
                            <IconMail size={20}/><a className={classes.links} href={"mailto:sylvamj@gmail.com"}>sylvamj@gmail.com</a>
                        </Group>
                        <Group>
                            <IconMapPin size={20}/><Text>Tempe, AZ</Text>
                        </Group>
                        <Group>
                            <IconBrandGithub size={20}/> <a className={classes.links} href={"https://github.com/MichaelS52"}>
                            https://github.com/MichaelS52
                        </a>
                        </Group>
                            <Button variant={'gradient'} onClick={()=>{
                                nav('/contact')
                            }} mt={'md'}>Contact Me</Button>
                        </Stack>

                    </Stack>
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6} sm={12}>
                    <Stack>
                        <ReactFloaterJs>
                        <Image src={AbstractShape} height={"350px"}></Image>
                        </ReactFloaterJs>
                    </Stack>
                    </Grid.Col>
                </Grid>
        </>
    );

}
