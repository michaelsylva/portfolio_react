import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderSimple} from "./components/header";
import {Hero} from "./components/hero";
import {Center, Container, Group, MantineProvider} from "@mantine/core";
import {AboutMe} from "./components/aboutme";
import {Skills} from "./components/skills";
import {Experience} from "./components/experience";
import {Projects} from "./components/projects";
import {Music} from "./components/music";


const links = [{link: "", label: "Home"}, {link: "", label: "About"}, {link: "", label: "Skills"}, {link: "", label: "Experience"}, {link: "", label: "Projects"} ,{link: "", label: "Music"}]

function App() {
  return (
    <div className="App">
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            fontFamily: 'Work Sans, sans-serif',
            fontFamilyMonospace: 'Monaco, Courier, monospace',
            headings: { fontFamily: 'Work Sans, sans-serif' },
        }}>
          <HeaderSimple links={links}></HeaderSimple>
            <Container>
                    <Hero/>
                  <AboutMe/>
                <Experience/>
                <Projects/>
                <Music/>
            </Container>
        </MantineProvider>
    </div>
  );
}

export default App;
