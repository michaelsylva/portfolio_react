import {HeaderSimple} from "./header";
import React from "react";
import {Footer} from "@mantine/core";
import {FooterSocial} from "./footer";

export default function ContactForm(){

    return (
        <>
            <HeaderSimple links={[]}></HeaderSimple>
        <div style={{width: '100%', height: 700}}>

        <iframe style={{outline:  'none', border: 'none'}} width={'100%'} height={700} src={'https://form-submission.com/?id=25529d74-8f7d-4f37-89c8-caa640ca915a'}>
        </iframe>
        </div>

            <FooterSocial/>
        </>
    )

}