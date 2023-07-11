import {Box, Center, Stack, Text, Title} from "@mantine/core";
import React, {useEffect} from "react";
import CRM from "./crm/CRMStyles";
import {useLocation} from "react-router-dom";
import {links} from "../PortfolioPage";
import {HeaderSimple} from "./header";
import ImageGallery from 'react-image-gallery';
import ZipCodeAPI from '../images/ZipCodeAPI.png'
import ZipCodeAPIDocs from '../images/ZipCodeAPI-DOCS.png'
import ZipCodeAPIExamples from '../images/ZipCodeAPI-Example.png'
import {useMediaQuery} from "@mantine/hooks";
import {FooterSocial} from "./footer";

export default function ZipCode(){

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
            original: ZipCodeAPI,
            thumbnail: ZipCodeAPI
        },
        {
            original: ZipCodeAPIDocs,
            thumbnail: ZipCodeAPIDocs
        },
        {
            original: ZipCodeAPIExamples,
            thumbnail: ZipCodeAPIExamples
        },
    ]
    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')

    return (
        <Stack spacing={0} >
            <HeaderSimple links={[]}></HeaderSimple>
            <Box bg={'blue.4'} h={300}>
                <Center h={'100%'} >
                    <Stack spacing={0}>
                        <Text color={'white'} align={'center'} size={50} fw={800}>US ZIP Code API</Text>
                        <Text color={'white'} size={'lg'} align={'center'}>July 2023</Text>



                    </Stack>
                    </Center>
            </Box>

            <Stack spacing={0} py={'lg'} px={'5%'}>
                <Center>
                <Box w={isTabletOrMobile ? '100%' : '50%'}>
                    <Text size={25} mb={'lg'}><a href={'https://zipcode-api.com'}>Live Demo</a></Text>

                    <Text size={25}>Image Gallery</Text>
                    <ImageGallery items={items}/>
                </Box>
                </Center>
            </Stack>
<FooterSocial/>
        </Stack>
    )

}