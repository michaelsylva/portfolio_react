import {Box, Container, createStyles, Grid, Group, List, Paper, Space, Stack, Tabs, Text} from "@mantine/core";
import {
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript, IconBrandMysql, IconBrandNpm, IconBrandPhp,
    IconBrandPython,
    IconBrandReact,
    IconCode, IconDatabase, IconFileCode, IconFileCode2, IconFileDatabase, IconWebhook
} from "@tabler/icons";

const useStyles = createStyles((theme)=>({
    margin: {
        marginTop: "60px",
        marginBottom: "60px"
    },
    large: {
        fontSize: "19px"
    }
}))

export function AboutMe() {

    const {classes, cx} = useStyles();

    return (
        <Grid h={"auto"} mt={50}>
            <Grid.Col md={6} lg={6} sm={12} p={20}>
                <Text size={40} fw={700} color={"blue.10"}>About Me</Text>

                <Box className={classes.margin}>
                <p style={{fontSize: "17px"}}>Hello! My name is Michael. When I was 13 I started to teach myself software development as a means to be creative. my knowledge began by learning the ins-and-outs of Java programming for Minecraft. Eventually, my skills grew in other projects such as: designing UI and UX, setting up UNIX systems, and building fullstack web services. I am always excited to earn new opportunities to shape my Software Engineering career.</p>
            </Box>
            </Grid.Col>

            <Grid.Col lg={6} sm={12} p={20}>
            <Text size={40} fw={700} color={"blue.10"}>Skills</Text>
            <Tabs defaultValue="gallery">
                <Tabs.List>
                    <Tabs.Tab value="gallery" className={classes.large} icon={<IconCode size={14} />}>Languages</Tabs.Tab>
                    <Tabs.Tab value="messages" className={classes.large} icon={<IconBrandReact size={14} />}>Frameworks</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery" pt="xs">
                    <List spacing={"xs"} size={"lg"} withPadding>
                        <Grid>
                            <Grid.Col span={6}>
                        <List.Item icon={<IconBrandHtml5/>}>
                            HTML 5
                        </List.Item>
                        <List.Item icon={<IconBrandCss3/>}>
                            CSS
                        </List.Item>
                        <List.Item icon={<IconBrandJavascript/>}>
                            JS
                        </List.Item>
                        <List.Item icon={<IconBrandPython/>}>
                            Python
                        </List.Item>
                        <List.Item icon={<IconBrandPhp/>}>
                            PHP
                        </List.Item>
                        <List.Item icon={<IconBrandMysql/>}>
                            MYSQL
                        </List.Item>
                            </Grid.Col>
                            <Grid.Col span={6}>
                        <List.Item icon={<IconDatabase/>}>
                            SQL
                        </List.Item>
                        <List.Item icon={<IconDatabase/>}>
                            PostgreSQL
                        </List.Item>
                        <List.Item icon={<IconCode/>}>
                            Java
                        </List.Item>
                        <List.Item icon={<IconFileCode2/>}>
                            C#
                        </List.Item>
                        <List.Item icon={<IconFileCode/>}>
                            C
                        </List.Item>
                            </Grid.Col>
                        </Grid>
                    </List>
                </Tabs.Panel>

                <Tabs.Panel value="messages" pt="xs">
                    <List spacing={"xs"} size={"lg"} withPadding>
                        <List.Item icon={<IconBrandBootstrap/>}>
                            Bootstrap
                        </List.Item>
                        <List.Item icon={<IconBrandReact/>}>
                            React.js
                        </List.Item>
                        <List.Item icon={<IconBrandNpm/>}>
                            Node.js
                        </List.Item>
                        <List.Item icon={<IconFileDatabase/>}>
                            Pandas
                        </List.Item>
                        <List.Item icon={<IconWebhook/>}>
                            Django
                        </List.Item>
                    </List>
                </Tabs.Panel>

                <Tabs.Panel value="settings" pt="xs">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
            <Space m={50}></Space>
                </Grid.Col>
            </Grid>
    );
}