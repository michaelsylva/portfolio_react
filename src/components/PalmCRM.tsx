import {Box, Center, Stack, Text, Title} from "@mantine/core";
import React, {useEffect} from "react";
import CRM from "./crm/CRMStyles";
import {useLocation} from "react-router-dom";
import {links} from "../PortfolioPage";
import {HeaderSimple} from "./header";
import {FooterSocial} from "./footer";

export default function PalmCRM(){

    const {pathname, hash} = useLocation()


    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        })

    }, [pathname, hash]);

    return (
        <Stack spacing={0} >
            <HeaderSimple links={[]}></HeaderSimple>
            <Box bg={'blue.4'} h={300}>
                <Center h={'100%'} >
                    <Stack spacing={0}>
                        <Text color={'white'} align={'center'} size={50} fw={800}>Palm CRM</Text>
                       </Stack>
                    </Center>
            </Box>

            <CRM/>

            <FooterSocial/>

        </Stack>
    )

}