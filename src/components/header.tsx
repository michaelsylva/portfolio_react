import { useState } from 'react';
import {createStyles, Header, Container, Group, Burger, Image, Avatar, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import {IconArrowLeft, IconDoorEnter} from "@tabler/icons";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0] && links[0].link ? links[0].link : "#");
    const { classes, cx } = useStyles();

    const nav = useNavigate()


    return (
        <Header height={60}>


        <Container style={{cursor: 'pointer'}} onClick={()=>{
            nav('/')
        }} className={classes.header}>
            <Group>

        <Avatar color={"blue"}>MS</Avatar>
                <h2 style={{color: 'gray'}}>Online Resume</h2>
            </Group>
        <Group spacing={5} className={classes.links}>
            {links && links.length>0 ? links.map((link) => (
                <a
                    key={link.label}
                    href={"#"+link.link}
                    className={cx(classes.link, { [classes.linkActive]: active === link.link })}
                    onClick={(event) => {
                        setActive(link.link);
                    }}
                >
                    {link.label}
                </a>
            )) :

                <></>
            }
            </Group>

        </Container>
        </Header>
);
}
