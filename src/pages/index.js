import React from "react"
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'


import Layout from "../components/layout"
import SEO from "../components/seo"
import DrawTitle from '../components/DrawTitle'
import Paul from '../components/imageComponents/paul'
import cv from '../files/PaulAshrafCV.pdf'
import HomeButton from '../components/HomeButton'
import ScrollingTech  from '../components/ScrollingTech'
import ColaboratePanel  from '../components/colaboratePanel'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Margin>

      <Container>
        <Row>
        <Col lg>
          <Row><DrawTitle /></Row>

          <Row>
              <SubTitle>A Software Developer from the GUC with experience in
              <SubTitleBold> Full-Stack Web Developement</SubTitleBold>,{' '}
                <SubTitleBold>Data Engineering</SubTitleBold>{' '}and{' '}
                <SubTitleBold>Embedded Systems</SubTitleBold>. Check out my projects or download my CV.</SubTitle>
          </Row>

        <Row>
          <Col>
          <HomeButton data={{
              delay: 0.1,
              to: '/projects',
              text: 'Projects',
            }}/>
          </Col>
          <Col>
          <HomeButton data={{
              delay: 0.2,
              to: {cv},
              text: 'CV',
            }}/>
          </Col>
        </Row>
        
        </Col>
        
        <Col lg='auto'>
          <Row className='justify-content-center'>
          <ImageCont><Paul /></ImageCont>
          </Row>
        </Col>
        </Row>
        
        </Container>

        </Margin>

        <ScrollingTech />

        <ColaboratePanel />

  </Layout>
)

const ImageCont = styled.div`
  width: 15em;
`

const Margin = styled.div`
  /* width: 100%; */
  margin: 1em;
  color: #222831;
  text-decoration: none;
  text-align: center;
`

const SubTitle = styled.span`

  @media (max-width: 992px){
    font-size: 1em;

  };

  font-size: 1.1em;
  margin-top: 0.4em;

  text-align: center;
  font-family: 'Raleway';
`

const SubTitleBold = styled(SubTitle)`
  font-weight: bold;

`


export default IndexPage
