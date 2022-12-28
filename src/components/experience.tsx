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

export function Experience() {

    const experienceList = [
        {
            title: "McAmusement",
            logo: "../images/mcamusementcircle_720.png",
            years: "2013-2016",
            position: "Server Systems / Software Lead / Founder",
            description: "Minecraft Community of over 10,000 unique visitors",
            bullets: [
                "Setup Unix system running CentOS with network security",
                "Managed over 40 staff members",
                "Built many of our custom software solutions to enhance the visitors experience"
            ]
        },
        {
            title: "Bomara",
            logo: "../images/Bomara.png",
            years: "2017 - Current",
            position: "Web Developer",
            description: "",
            bullets: [
                "Managed company's product pages, and updated design and user experience.",
                "Developed software to automatically generate new product pages based on provided data."
            ]
        },
        {
            title: "Visible Systems",
            logo: "../images/VisibleLogo.jpeg",
            years: "2017 - Current",
            position: "Web Developer",
            description: "",
            bullets: [
                "Converted legacy website with over 5,000 pages, to a smaller, updated, responsive website.",
                "Updated design and information on the site to fit company's image and products.",
                "Created a dashboard for account and project management on the cloud."
            ]
        },
        {
            title: "Palm Connectivity",
            logo: "../images/PalmConnect.PNG",
            years: "2021 - Current",
            position: "Software Lead",
            description: "",
            bullets: [
                "Built website UI and backend.",
                "Helped engineer a LoRaWAN gateway design & prototype",
                "Built dashboard for user and data management."
            ]
        }
        ]

    const [exp, setExp] = useState(experienceList)

    return (
        <>
            <Text size={40} fw={700} color={"blue.10"}>Experience</Text>
            {exp.map((experience) => {
            return(
            <Paper shadow={"sm"} p={"md"} radius={"sm"} m={20} withBorder>
                <Group>
                    <Image src={ (experience.logo) } height={40} width={40}/>
                    <Stack spacing={0}>
                        <Text size={"lg"} fw={600}>{experience.title}</Text>
                        <Text size={"md"}>({experience.years})</Text>
                    </Stack>

                </Group>
                <Container p={10}>
                    {experience.description ?
                        <Text size={"xs"} color={"dimmed"}>{experience.description}</Text>
                        : ""}
                    <List p={10}>
                        {experience.bullets.map((bullet)=>{
                            return (
                                <List.Item>
                                    <Text size={"sm"}>{bullet}</Text>
                                </List.Item>
                            )
                        })}
                    </List>
                </Container>
            </Paper>
            )
        })}
            <Space my={50}/>
        </>
    )
}