import {
    Avatar,
    Text,
    Burger,
    Container,
    Group,
    Image,
    Header,
    Stack,
    Center,
    createStyles,
    Grid,
    Paper, List, Space
} from "@mantine/core";
import {IconBrandGithub, IconMail, IconMapPin} from "@tabler/icons";
import AbstractShape from "../images/cool-abstract-shape.png"
import {useState} from "react";
import Spotify from "react-spotify-embed";


const useStyles = createStyles((theme)=>({
    links: {
        color: "#1a70b3"
    },

    margin: {
        margin: "15px"
    }
}))

interface ExperienceList{

}

export function Music() {

    const {classes} = useStyles()

    return (
<div id={"music"}>
        <Text size={40} fw={700} className={classes.margin} color={"blue.10"}>Music</Text>

    <Grid m={10}>
            <Grid.Col span={"content"}>
                    <Text size={"sm"} color={"dimmed"}>(Producer, Drums)</Text>
                <Center>
                    <Spotify link={"https://open.spotify.com/artist/5vAn0UxdU1ovz6g7WsFDHE?si=TBPM5Qj6QVm7pGN-Y-8NiA"}/>
                </Center>
            </Grid.Col>
            <Grid.Col span={"content"}>

                <Text size={"sm"} color={"dimmed"}>(Producer, Drums)</Text>
                <Center>
                <Spotify link={"https://open.spotify.com/artist/2e6rBejQPMCcdfE4V3AnBK?si=4Vj2PGyYQSK_HL69zzZE6A"}/>
                </Center>
            </Grid.Col>
        </Grid>
</div>
    )

}
