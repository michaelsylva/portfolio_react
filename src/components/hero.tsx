import {Avatar, Text, Burger, Group, Image, Header, Stack, Center, createStyles, Grid} from "@mantine/core";
import {IconBrandGithub, IconMail, IconMapPin} from "@tabler/icons";
import AbstractShape from "../images/cool-abstract-shape.png"
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles"
import type {Container, Engine} from "tsparticles-engine";

import {useCallback} from "react";

const useStyles = createStyles((theme)=>({
    links: {
        color: "#1a70b3"
    },

    margin: {
        margin: "-50px",
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

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <>
                <Grid align={"flex-start"} grow  className={classes.margin}>

                    {/*<Particles id="tsparticles" url="js/bubbles.json" init={particlesInit} loaded={particlesLoaded} width={"auto"} className={classes.particles}/>
*/}
                    <Grid.Col md={6} sm={12} >
                        <Center style={{ height: 350 }}>
                            <Stack spacing={0} align={"flex-start"}>

                        <Text size={55} fw={900} variant="gradient"
                              gradient={{ from: 'blue.5', to: 'blue.9', deg: 45 }}>Michael Sylva</Text>
                        <Text size={40} fw={700} color={"blue.10"}>Software Engineer</Text>
                        <Group>
                            <IconMail size={20}/><a href={"mailto:sylvamj@gmail.com"}>sylvamj@gmail.com</a>
                        </Group>
                        <Group>
                            <IconMapPin size={20}/><Text>Tempe, AZ</Text>
                        </Group>
                        <Group>
                            <IconBrandGithub size={20}/> <a href={"https://github.com/MichaelS52"}>
                            https://github.com/MichaelS52
                        </a>
                        </Group>

                    </Stack>
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6} sm={12}>
                    <Stack>
                        <Image src={AbstractShape} height={"350px"}></Image>
                    </Stack>
                    </Grid.Col>
                </Grid>
        </>
    );

}