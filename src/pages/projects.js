import React, { useRef } from "react"
import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaCode, FaMicrochip } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { RiGamepadLine } from 'react-icons/ri'


import Layout from "../components/layout"
import SEO from "../components/seo"

const scrollTo = (ref) => () => window.scrollTo({
  top: ref.current.offsetTop - 25,
  left: 0,
  behavior: 'smooth'
})

const Projects = () => {

  const webRef   = useRef(null)
  const dataRef  = useRef(null)
  const gameRef  = useRef(null)
  const embedRef = useRef(null)
  const otherRef = useRef(null)

  return(
  <Layout selected={2} >
    <SEO title="Projects" />

    <Container>
      <Row>
      <Row className='justify-content-center'>
        <ButtonStyle><Button onClick={scrollTo(webRef)}   className='nav-bar' variant='link'><FaCode /> Web Developement</Button></ButtonStyle>
        <ButtonStyle><Button onClick={scrollTo(dataRef)}  className='nav-bar' variant='link'><FiDatabase /> Data Engineering</Button></ButtonStyle>
        <ButtonStyle><Button onClick={scrollTo(gameRef)}  className='nav-bar' variant='link'><RiGamepadLine /> Game Developement</Button></ButtonStyle>
        <ButtonStyle><Button onClick={scrollTo(embedRef)} className='nav-bar' variant='link'><FaMicrochip /> Embedded Systems</Button></ButtonStyle>
        <ButtonStyle><Button onClick={scrollTo(otherRef)} className='nav-bar' variant='link'><BsThreeDots /> Other</Button></ButtonStyle>
        </Row>
      </Row>
    </Container>
    <br />

    <Heading ref={webRef}>Web Developement</Heading>


    <Heading ref={dataRef}>Data Engineering</Heading>


    <Heading ref={embedRef}>Embedded Systems</Heading>


    <Heading ref={otherRef}>Other</Heading>


  </Layout>
  )
}


const ButtonStyle = styled.div`
  margin: 1em;
  text-decoration: none;
  border: 2px solid white;
  border-radius : 50px;
`

const Heading = styled.h2`
  font-family: 'Arima Madurai';
`

export default Projects
