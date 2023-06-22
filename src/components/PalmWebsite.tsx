import {Box, Center, Stack, Text, Title} from "@mantine/core";
import React, {useEffect} from "react";
import CRM from "./crm/CRMStyles";
import {useLocation} from "react-router-dom";
import {links} from "../PortfolioPage";
import {HeaderSimple} from "./header";
import ImageGallery from 'react-image-gallery';
import WebsiteImage1 from '../images/PalmSite.png'
import WebsiteImage2 from '../images/PalmSite2.png'
import WebsiteImage3 from '../images/PalmSite3.png'
import WebsiteImage4 from '../images/PalmSite4.png'
import {useMediaQuery} from "@mantine/hooks";

export default function PalmWebsite(){

    const {pathname, hash} = useLocation()


    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        })

    }, [pathname, hash]);

    const items = [
        {
            original: WebsiteImage1,
            thumbnail: WebsiteImage1
        },
        {
            original: WebsiteImage2,
            thumbnail: WebsiteImage2
        },
        {
            original: WebsiteImage3,
            thumbnail: WebsiteImage3
        },
        {
            original: WebsiteImage4,
            thumbnail: WebsiteImage4
        }
    ]
    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')

    return (
        <Stack spacing={0} >
            <HeaderSimple links={[]}></HeaderSimple>
            <Box bg={'blue.4'} h={300}>
                <Center h={'100%'} >
                    <Stack spacing={0}>
                        <Text color={'white'} align={'center'} size={50} fw={800}>Palm Website</Text>



                    </Stack>
                    </Center>
            </Box>

            <Stack spacing={0} py={'lg'} px={'5%'}>
                <Center>
                <Box w={isTabletOrMobile ? '100%' : '50%'}>
                    <Text size={25}>Image Gallery</Text>
                    <ImageGallery items={items}/>
                </Box>
                </Center>
            </Stack>

        </Stack>
    )

}