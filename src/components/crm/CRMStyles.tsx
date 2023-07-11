import {Box, Center, Flex, Grid, Image, Button, Text, Group, Highlight, Stack, Title, ThemeIcon} from "@mantine/core"
import {useMediaQuery} from "@mantine/hooks";

import Forms from "../../images/Forms.png";
import Automations from "../../images/Automations.png"
import PowerProspect from "../../images/PowerProspect.png";
import Communication from "../../images/CommunicationImage.png"
import ContactsTable from "../../images/ContactsTable.png"
import ContactsTableDrawer from "../../images/ContactsTableDrawer.png"
import {Fade, Slide} from "react-awesome-reveal";
import {
    IconAt,
    IconChecklist, IconDeviceMobileMessage, IconDroplet,
    IconGridDots,
    IconHeartHandshake, IconPhonePlus,
    IconReportAnalytics,
    IconTruckDelivery
} from "@tabler/icons";
import React from "react";
import YouTube from "react-youtube";
import {HeaderSimple} from "../header";
import {links} from "../../PortfolioPage";
import ReactPlayer from "react-player";
import FilePlayer from "react-player/file";

export function BoxShadowUtil({children} : {children: any}){
    return (
        <div style={{
            boxShadow: '0px 0px 50px 15px rgb(199,221,255,0.5)',
            WebkitBoxShadow:  'boxShadow: 0px 0px 200px 23px rgb(199,221,255,0.5)',
        }}>
            {children}
        </div>
    )
}

export function SkewedBox({children} : {children: any}){
    return (
        <Box bg={'blue.7'} h={'auto'} p={'lg'} pb={'xl'} style={{
            transform:'skewY(-1.8deg)',
            zIndex: 50,
            color: 'white',
            borderRadius: 10
        }}>
            <Box style={{border: '1px solid lightgray', borderRadius: 10}}>

            <Grid m={0} p={0} pt={'lg'} pb={'xl'} style={{
                transform: 'skewY(1.8deg)'
            }}>

                <Grid.Col span={12}>
                    {children}
                </Grid.Col>

            </Grid>

            </Box>

        </Box>
    )
}

export default function CRM(){

    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')


    return (
        <div style={{overflow: 'hidden'}}>
            <Stack spacing={0} p={'lg'} px={'10%'}>
                <Text size={25}><b>The Palm CRM</b> - <span style={{fontWeight: 300}}>Built for small business</span></Text>

                <Text>This is a project I have built for Palm Connectivity myself from scratch using the MERN Stack and some other cutting-edge technologies</Text>

                <br/>
                <Text>The motive for this project is creating solutions to problems we see our customers having daily. We do not focus on being the most robust or extensive CRM solution, instead we build a set of solutions for specific markets.</Text>
                <br/>

                <Text size={25} fw={700}>Technical details</Text>
                <Stack spacing={0}>
                    <Text size={'md'}>Our network is hosted on AWS where we host the backend and the database. The Express backend interacts with the database using the <a href={'https://sequelize.org/'}>Sequelize ORM</a>. All requests to the backend are verified with OAuth tokens determining your profile. The frontend is built with React and Vite. Most requests are made through <a href={'https://tanstack.com/query/v3/'}>react-query</a>. Live notifications and inbound calls are received through a WebSocket connection between the client and the server.</Text>
                </Stack>

                <Text pt={'md'} size={25} fw={500}>Video Demo:</Text>
                <Text color={'dimmed'} size={'sm'}>Disclaimer: All contacts and contact information in this video are fake</Text>

                <video autoPlay controls>
                    <source src={'https://palmconnectivity.com/videos/PalmCRM-DEMO.mp4'} type={'video/mp4'}/>
                </video>

                <Text pt={'md'} size={20} fw={500}>Sales Demo:</Text>
            </Stack>
                <Grid>
            <FeatureGrid/>
        <Grid.Col sm={12} md={6} my={50} xs={12}>
            <Flex justify={'flex-end'}>
                <Box w={'90%'} my={'xl'}>
                    <Stack spacing={0} my={'lg'}>
                        <Group>
                            <Text size={isTabletOrMobile ? 30 : 40} fw={900} color={'blue.4'} style={{verticalAlign: 'text-bottom'}}> Communication</Text>
                            <Title order={1} size={isTabletOrMobile ? 30 : 40} m={0} p={0} style={{verticalAlign: 'baseline'}}>and </Title>

                            <Text size={isTabletOrMobile ? 30 : 40} m={0} p={0} fw={900} color={'blue.4'} style={{verticalAlign: 'text-bottom'}}>Efficiency</Text>
                            {/*<ThemeIcon size={50} p={0} variant={'gradient'} color={'blue.8'}>*/}
                            {/*    <IconBarbell size={40} stroke={'1.2'}/>*/}
                            {/*</ThemeIcon>*/}
                        </Group>
                        <Text size={'md'}>The Palm CRM allows you to communicate effectively and efficiently with everyone.</Text>
                    </Stack>
                    <BoxShadowUtil>
                        <Image src={Communication}/>
                    </BoxShadowUtil>
                </Box>
            </Flex>
            <Group>
                {/*<Box w={'30%'}>*/}
                {/*    <Image src={CRMImage2}/>*/}
                {/*</Box>*/}
                {/*<Box w={'30%'}>*/}
                {/*    <Image src={CRMImage3}/>*/}
                {/*</Box>*/}
            </Group>
        </Grid.Col>

        </Grid>

        <FormBuilderAndPPCols/>
        </div>
    )


}

export function FeatureGrid(){


    const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)')
    const isBigScreen = useMediaQuery('(min-width: 1824px)')
    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')
    const isPortrait = useMediaQuery('(orientation: portrait)' )
    const isRetina = useMediaQuery( '(min-resolution: 2dppx)')

    return (
        <Grid.Col md={6} sm={12}>
            <Stack>
                <Grid pt={isDesktopOrLaptop ? 200 : 30} px={'10%'}>

                    <Grid.Col md={4} lg={4} sm={6} mb={20}>
                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconPhonePlus color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Unlimited Calling</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6} mb={20}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconDeviceMobileMessage color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Unlimited SMS</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6} mb={20}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconAt color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Unlimited Email</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>

                    <Grid.Col md={4} lg={4} sm={6} mb={20}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconDroplet color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Drip Marketing</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconGridDots color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Analytics</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconHeartHandshake color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Deals</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>

                    <Grid.Col md={4} lg={4} sm={6}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconChecklist color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Task Management</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconReportAnalytics color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Sales Tracking</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={4} lg={4} sm={6}>

                        <Center>
                            <Stack>
                                <Center>
                                    <ThemeIcon size={60} variant={'light'}>
                                        <IconTruckDelivery color={'#4dabf7'} size={50}/>
                                    </ThemeIcon>
                                </Center>
                                <Text size={'lg'} pl={'sm'} fw={500}>Purchase Leads</Text>
                            </Stack>
                        </Center>

                    </Grid.Col>
                </Grid>


            </Stack>
        </Grid.Col>
    )
}


    export function FormBuilderAndPPCols(){

        const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)')
        const isBigScreen = useMediaQuery('(min-width: 1824px)')
        const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')
        const isPortrait = useMediaQuery('(orientation: portrait)' )
        const isRetina = useMediaQuery( '(min-resolution: 2dppx)')


        return (
            <Grid>

                <Grid.Col md={6} sm={12} pl={'10%'} my={70}>

                    <Stack style={{verticalAlign: 'baseline'}} my={'md'}  px={'5%'}>

                        <Center w={'100%'} h={'100%'}>

                            <Stack spacing={0}>

                                <Center w={'100%'} mb={'lg'}>
                                    <Stack spacing={0} w={'100%'}>
                                        <Group>
                                            <Title order={1} size={isTabletOrMobile ? 30 : 40} style={{verticalAlign: 'baseline'}}>Meet </Title>
                                            <Text size={isTabletOrMobile ? 30  :40} fw={900} color={'blue.4'} style={{verticalAlign: 'text-bottom'}}> Power Prospect</Text>
                                            {/*<ThemeIcon size={50} p={0} variant={'gradient'} color={'blue.8'}>*/}
                                            {/*    <IconBarbell size={40} stroke={'1.2'}/>*/}
                                            {/*</ThemeIcon>*/}
                                        </Group>

                                        <Highlight highlight={'Power Prospect'} highlightStyles={{
                                            color: 'blue',
                                            backgroundColor: 'transparent',
                                            padding: 2
                                        }} pr={'20%'} highlightColor={'blue.3'}>
                                            Power Prospect is a cutting-edge AI technology to assist you with obtaining contact information converting a few data points to many data points. As a demo, we let users try Power Prospect on themselves to understand the power.
                                        </Highlight>
                                    </Stack>
                                </Center>

                            </Stack>
                        </Center>

                    </Stack>
                </Grid.Col>

                <Grid.Col md={6} sm={12} xs={12} px={isTabletOrMobile ? '5%' : '10%'}>
                    <Fade triggerOnce style={{opacity : 0}}>
                        <Slide triggerOnce direction={'right'}>
                            <Image src={PowerProspect} style={{
                                marginLeft: isTabletOrMobile ? '25%' : 0
                            }}/>
                        </Slide>
                    </Fade>
                </Grid.Col>


                <Grid.Col md={6} sm={12} pr={isTabletOrMobile ? '10%' : '-10%'} my={isTabletOrMobile ? 10 : 70}>

                    <Stack style={{verticalAlign: 'baseline'}} my={'md'}  px={'0%'}>
                        <Center w={'100%'} h={'100%'}>
                            <Fade triggerOnce style={{opacity : 0}}>
                                <Slide triggerOnce direction={'left'}>
                                    <Image src={Forms} style={{filter: 'drop-shadow(2px 2px 5px rgb(0 0 0 / 0.2))'}}></Image>
                                </Slide>
                            </Fade>
                        </Center>
                    </Stack>

                </Grid.Col>

                <Grid.Col md={6} sm={12} pl={'10%'} my={isTabletOrMobile ? 20 : 70}>

                    <Stack style={{verticalAlign: 'baseline'}} my={isTabletOrMobile ? 0 : 'md'}  px={'5%'}>
                        <Center w={'100%'} h={'100%'}>

                            <Stack spacing={0} mx={'md'}>

                                <Center w={'100%'} mb={'lg'} pt={isTabletOrMobile ? 0 : 50}>
                                    <Stack spacing={5} w={'100%'} px={isTabletOrMobile ? 0 : 'xl'}>
                                        <Group>
                                            <Title order={1} size={isTabletOrMobile ? 30 : 40} style={{verticalAlign: 'baseline'}}>Palm </Title>
                                            <Text size={isTabletOrMobile ? 30 : 40} fw={900} color={'blue.4'} style={{verticalAlign: 'text-bottom'}}> Form Builder</Text>

                                        </Group>
                                        <Text size={'md'} mb={'lg'} fw={400}>Create high converting forms to collect customer info into your CRM. Capture every potential client with Ad conversion tracking and attribution</Text>

                                        <Text color={'green.5'} size={16} my={'5%'}>Increase Ad Conversion Rate by up to 20%!</Text>

                                        <Button variant={'filled'} w={250} onClick={()=>{}}>See in Action</Button>
                                    </Stack>
                                </Center>
                            </Stack>
                        </Center>
                    </Stack>

                </Grid.Col>

                <Grid.Col md={6} sm={12} pl={'10%'} pb={20} my={70}>

                    <Stack style={{verticalAlign: 'baseline'}} my={'md'}  px={'5%'}>

                        <Center w={'100%'} h={'100%'}>

                            <Stack spacing={0}>

                                <Center w={'100%'} mb={'lg'}>
                                    <Stack spacing={0} w={'100%'}>
                                        <Group>
                                            <Text size={40} fw={900} color={'blue.4'} style={{verticalAlign: 'text-bottom'}}>Marketing Automations</Text>
                                            {/*<ThemeIcon size={50} p={0} variant={'gradient'} color={'blue.8'}>*/}
                                            {/*    <IconBarbell size={40} stroke={'1.2'}/>*/}
                                            {/*</ThemeIcon>*/}
                                        </Group>

                                        <Center>
                                            <Highlight highlight={'Power Prospect'} highlightStyles={{
                                                color: 'blue',
                                                backgroundColor: 'transparent',
                                                padding: 2
                                            }} pr={'20%'} highlightColor={'blue.3'}>
                                                Automate your marketing flow with a simple editor to keep your leads thinking about you!
                                            </Highlight>
                                        </Center>
                                    </Stack>
                                </Center>

                            </Stack>
                        </Center>

                    </Stack>
                </Grid.Col>

                <Grid.Col md={6} sm={12} xs={12} px={isTabletOrMobile ? '5%' : '10%'}>
                    <Fade triggerOnce style={{opacity : 0}}>
                        <Slide direction={'right'} triggerOnce>
                            <Image src={Automations} style={{
                                marginLeft: isTabletOrMobile ? '25%' : 0
                            }}/>
                        </Slide>
                    </Fade>
                </Grid.Col>


            </Grid>
        )
}