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
    Paper, List, Space, Timeline
} from "@mantine/core";
import {IconBrandGithub, IconCode, IconDots, IconMail, IconMapPin} from "@tabler/icons";
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
            years: "2016 - 2017",
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
            years: "2017 - 2022",
            position: "Full Stack Developer",
            description: "ASP.Net, HTML, JS, CSS",
            bullets: [
                "Converted legacy website with over 5,000 pages, to a smaller, updated, responsive website.",
                "Updated design and information on the site to fit company's image and products.",
                "Created a dashboard for account and project management on the cloud."
            ]
        },
        {
            title: "SoTellUs",
            logo: '../images/SoTellUs.png',
            years: "2022",
            position: 'Full Stack Developer',
            description: '',
            bullets: [
                "Helped build a new dashboard frontend and integrated into existing PHP backend.",
                "Updated Android app.",
                "Helped release a new review capture web application."
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
                "Helped engineer a LoRaWAN gateway design & prototype.",
                "Built dashboard for user and data management."
            ]
        }
        ]

    const {classes, cx} = useStyles()
    const [exp, setExp] = useState(experienceList)

    return (
        <div id={"experience"}>
            <Text size={40} className={classes.margin} fw={700} mb={50} color={"blue.10"}>Experience</Text>
            <Timeline active={exp.length} mt={'lg'} styles={{
                itemContent: {
                    position: 'relative',
                    top: -35
                }
            }}>
            {exp.map((experience) => {
            return(
                <Timeline.Item>
            <Paper shadow={"sm"} p={"md"} radius={"sm"} m={10} withBorder>
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
                </Timeline.Item>
            )
        })}
            </Timeline>
            <Space my={50}/>
        </div>
    )
}
