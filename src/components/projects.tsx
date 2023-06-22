import {Badge, Button, createStyles, Group, List, Paper, Space, Tabs, Text} from "@mantine/core";
import {
    IconBrandBooking, IconBrandBootstrap,
    IconBrandCss3,
    IconBrandHtml5, IconBrandJavascript, IconBrandMysql, IconBrandNpm, IconBrandPhp, IconBrandPython,
    IconBrandReact, IconCamera,
    IconCode, IconDatabase, IconDoor, IconFileCode, IconFileCode2, IconFileDatabase, IconGlass,
    IconMessageCircle,
    IconPhoto, IconUsers,
    IconSettings, IconSquare, IconWand, IconWebhook, IconWindow, IconDeviceDesktop, IconLayoutDashboard, IconApps
} from "@tabler/icons";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme)=>({
    large: {
        fontSize: "19px"
    },
    cardHover: {
        transform: "scale(1.02, 1.02)",
        transition: "0.05s",
        cursor:'pointer'
    },
    margin: {
        margin: "10px"
    }
}))

export function Projects() {

    const {classes, cx} = useStyles()
    const nav = useNavigate()

    const projectList = [
        {
            title: "Palm CRM",
            icon: <IconUsers/>,
            description: "A CRM project with a bunch of basic sales features",
            tags: ['React', "Express", "Node", "Sequelize", "MariaDB"],
            link: '/projects/palm_crm'
        },
        {
            title: "Palm Website",
            icon: <IconDeviceDesktop/>,
            description: "Website for Palm Connectivity and the CRM project",
            tags: ['React', "Vite"],
            link: '/projects/palm_website'
        },
        {
            title: "SoTellUs Dashboard",
            icon: <IconLayoutDashboard/>,
            description: "Dashboard for SoTellUs customers to interact with their accounts",
            tags: ['React', "Vite"],
            link: null
        }
    ]

    const legacyProjects = [
        {
            title: "Experience Hub",
            icon: <IconWand/>,
            description: "A web panel for users on McAmusement to experience additional features such as synced audio, achievements, and cosmetics.",
            tags: ["Java", "MySQL", "HTML", "JS", "PHP"],
            date: "May 2015"
        },
        {
            title: "Monty Hall Simulator",
            icon: <IconDoor/>,
            description: "Simple proof of the monty hall problem.",
            tags: ["Java"],
            date: "October 2018"
        },
        {
            title: "Smart Mirror",
            icon: <IconSquare/>,
            description: "A smart mirror I built from scratch as a means to test my software and hardware knowledge.",
            tags: ["Python", "Hardware"],
            date: "May 2016"
        },
        {
            title:  "Kinect Animatronics",
            icon: <IconCamera/>,
            description: "Records an animation of the position and rotation of your limbs using the Kinect SDK.",
            tags: ["C#", "Java"],
            date: "May 2015"
        }
    ]

    const [projects, setProjects] = useState(projectList);
    const [hover, setHover] = useState("")

    return (
        <div id={"projects"}>
            <Text size={40} fw={700} className={classes.margin} color={"blue.10"}>Projects</Text>
            {projects.map((proj)=>{
                return(
                <Paper key={proj.title} onClick={()=>{
                    if(proj.link){
                        nav(proj.link)
                    }
                }} className={hover!="" && hover==proj.title ? classes.cardHover : ""} onMouseOver={()=>setHover(proj.title)} onMouseOut={()=>setHover("")} withBorder shadow={"sm"} p={25} m={20} radius={"md"} bg={"white.3"}>
                    <Group>
                    <Text size={"xl"} fw={600}>{<span style={{verticalAlign: "middle"}}>{proj.icon}</span>} {proj.title}</Text>
                    </Group>
                    <Text size={"md"} fw={400}>{proj.description}</Text>
                    <Group spacing={5}>
                    {proj.tags.map((tag)=>{
                        return (
                            <Badge radius={5}>{tag}</Badge>
                        )
                    })}
                    </Group>
                    <Space my={"md"}/>

                    {proj.link ? <>
                    <Text size={"sm"} color={"dimmed"}>This project has a post associated</Text>

                    <Button variant={"outline"} size={"xs"} mt={10} onClick={()=>{
                        nav(proj.link)
                    }}>Read more</Button>
                        </>
                    : <></>}
                </Paper>
                )
            })}
        </div>
    )
}
