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
import {SkewedBox} from "./crm/CRMStyles";

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
        <Grid h={"auto"} mt={50} >
            <Grid.Col md={12} lg={12} sm={12} p={0} id={"about"}>
               <SkewedBox>
                <Box p={10}>
                    <Stack p={'lg'}>
                        <Text size={30} fw={900}>Hello!</Text>
                        <Text style={{fontSize: "17px"}}>My name is Michael. When I was 13 I started to teach myself software development as a means to be creative. my knowledge began by learning the ins-and-outs of Java programming for Minecraft. Eventually, my skills grew in other projects such as: designing UI and UX, setting up UNIX systems, and building fullstack web services. I am always excited to earn new opportunities to shape my Software Engineering career.</Text>
                    </Stack>
               </Box>
               </SkewedBox>
            </Grid.Col>

            <Grid.Col mt={'xl'} lg={12} sm={12} p={20} id={"skills"}>
            <Text size={40} fw={700} color={"blue.10"}>Skills</Text>
            <Tabs defaultValue="languages" style={{border: "1.5px solid #e2e2e2", borderRadius: "5px", paddingTop: "14px", paddingBottom: "10px"}}>
                <Tabs.List>
                    <Tabs.Tab value="languages" className={classes.large} icon={<IconCode size={14} />}>Languages</Tabs.Tab>
                    <Tabs.Tab value="frameworks" className={classes.large} icon={<IconBrandReact size={14} />}>Frameworks</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="languages" pt="xs">
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

                <Tabs.Panel value="frameworks" pt="xs">
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
