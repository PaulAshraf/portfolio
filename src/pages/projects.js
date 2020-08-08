import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjCard from '../components/ProjCard'


import Imdb from '../components/imageComponents/imdb'
import Onion from '../components/imageComponents/onion'
import Music from '../components/imageComponents/music'
import Gafi from '../components/imageComponents/gafi'
import Game from '../components/imageComponents/game'
import Superhero from '../components/imageComponents/superhero'
import Grid from '../components/imageComponents/grid'

const Projects = () => {


  return(
  <Layout selected={2} >
    <SEO title="Projects" />

    <Panel>
    <Heading >Web Applications</Heading>
    <SubHeading>
        Frontend development experience using React in bulding static websites (Gatsby), client-side rendered websites (Create React App) and server-side rendered websites (Next). Also, light experience in using Angular and the .NET stack.
        Backend developement experience using Node, with slight experience in Python and Go.
    </SubHeading>
    </Panel>

    <ProjCard data={{
      name: 'Spotify to Youtube Converter',
      desc: 'A Node server to get the Youtube URL of a Spotify track. I\'m also currently developing a Chrome extension to automatically redirect spoidy links into their equivelant Youtube video. ',
      date: '2020',
      type: 'Personal',
      github: 'https://github.com/PaulAshraf/music-converter-backend',
      live: 'https://music-converter-backend.herokuapp.com/',
    }}>
      <Music />
    </ProjCard>

    <ProjCard data={{
      name: 'Is this the Onion?',
      desc: 'A simple game where you try to identify wether the given headline belongs to the onion or not, i.e. wether it is satirical or not. Built using React and Create React App (Client-side rendering) without a server and data collected from Reddit. Styled with Ant Design.',
      date: '2020',
      type: 'Personal',
      github: 'https://github.com/PaulAshraf/is-this-the-onion',
      live: 'https://isthistheonion.herokuapp.com/',
    }}>
      <Onion />
    </ProjCard>

    <ProjCard data={{
      name: 'IMDB\'s Top 250 Planner',
      desc: 'A website designed to make a customized schedule for completing IMDB\'s Top 250 movies. Built using React and Create React App (Client-side rendering) without a server. Styled with blueprintJS.',
      date: '2020',
      type: 'Personal',
      github: 'https://github.com/PaulAshraf/top-250-planner',
      live: 'https://top250planner.herokuapp.com/',
    }}>
      <Imdb />
    </ProjCard>

    <ProjCard data={{
      name: 'GAFI Website',
      desc: 'General Authority for Investment and Free Zones (GAFI) website built using Node, MongoDB and React.',
      date: '2019',
      type: 'University',
      github: 'https://github.com/SE-GUC/angry-nerds',
    }}>
      <Gafi />
    </ProjCard>

    <Panel>
    <Heading >Games and Desktop Applications</Heading>
    <SubHeading>
        Experience in Game Development using OpenGL (C++) and Desktop Applications development using Java and Python.
    </SubHeading>
    </Panel>

    <ProjCard data={{
      name: 'Star Wars Game',
      desc: 'A fully textured 3D game with a Star Wars theme. Built using OpenGL and C++.',
      date: '2020',
      type: 'University',
      github: 'https://github.com/PaulAshraf/star-wars-game',
      youtube: 'https://www.youtube.com/watch?v=YuC3pnFfHUM'
    }}>
      <Game />
    </ProjCard>

    <ProjCard data={{
      name: 'Superhero Chess',
      desc: 'A large scale Chess spinoff game with Superpowers to some peices and a Disney theme. Built with Java.',
      date: '2020',
      type: 'University',
      github: 'https://github.com/PaulAshraf/superhero-chess',
    }}>
      <Superhero />
    </ProjCard>
    
    <Panel>
    <Heading >Data Science Projects</Heading>
    <SubHeading>
      Machine Learning/Deep Learing + Data Engineering large scale projects uning Python with TensorFlow, Keras, and Scikit Learn.
    </SubHeading>
    </Panel>

    <ProjCard data={{
      name: 'EEG Emregncy Braking Detection',
      desc: 'This is a collaboration with INESC at the University of Porto, Portgual. It is a smart grid simulation with three prosumers each having access to solar energy, wind energy, EV cars and more. The grid is represented as Mixed Integer Optimisation problem and solved using GAMS and Python. This work was published in EEEIC 2020, an IEEE conference, and we are working now on expanding it to be published in an IEEE journal.',
      date: '2019-2020',
      type: 'Research',
      github: 'https://github.com/PaulAshraf/smart-grids',
      paper: 'https://ieeexplore.ieee.org/document/9160657',
    }}>
      <Grid />
    </ProjCard>

    <ProjCard data={{
      name: 'Smart Grids Optimisation',
      desc: 'This is a collaboration with INESC at the University of Porto, Portgual. It is a smart grid simulation with three prosumers each having access to solar energy, wind energy, EV cars and more. The grid is represented as Mixed Integer Optimisation problem and solved using GAMS and Python. This work was published in EEEIC 2020, an IEEE conference, and we are working now on expanding it to be published in an IEEE journal.',
      date: '2019-2020',
      type: 'Research',
      github: 'https://github.com/PaulAshraf/smart-grids',
      paper: 'https://ieeexplore.ieee.org/document/9160657',
    }}>
      <Grid />
    </ProjCard>

  </Layout>
  )
}

const Panel = styled.div`
    background-color: #00adb5;
    padding: 0.5em;
    margin-bottom: 2em;
`

const Heading = styled.h2`
  margin: 0.5em;
  font-size: 3em;
  text-align: center;
  font-family: 'Pacifico';
  color: #eeeeee;

`

const SubHeading = styled.p`
  text-align: center;
  font-family: 'Raleway';
  color: #eeeeee;


  @media (max-width: 992px){
    margin-left: 1em;
    margin-right: 1em;

  };
  margin-left: 5em;
  margin-right: 5em;
`

export default Projects
