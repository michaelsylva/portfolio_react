import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderSimple} from "./components/header";
import {Hero} from "./components/hero";
import {Center, Container, Group, MantineProvider, Text} from "@mantine/core";
import {AboutMe} from "./components/aboutme";
import {Skills} from "./components/skills";
import {Experience} from "./components/experience";
import {Projects} from "./components/projects";
import {Music} from "./components/music";
import {FooterSocial} from "./components/footer";


export const links = [
    {link: "home", label: "Home"},
    {link: "about", label: "About"},
    {link: "skills", label: "Skills"},
    {link: "experience", label: "Experience"},
    {link: "projects", label: "Projects"} ,
    {link: "music", label: "Music"}]

export default function PortfolioPage() {
  return (
    <div className="App" style={{overflowX: "hidden"}}>
          <HeaderSimple links={links}></HeaderSimple>
            <Container>
                    <Hero/>
                  <AboutMe/>
                <Experience/>
                <Projects/>
                <Text size={40} fw={700} color={"blue.10"}>Other Interests</Text>
                <Text size={20}><a href='/music'>Music</a></Text>
            </Container>
            <FooterSocial/>
    </div>
  );
}