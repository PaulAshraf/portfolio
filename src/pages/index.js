import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

import {Container, Row, Col, Button} from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import DrawTitle from '../components/DrawTitle'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Margin>

    <Container fluid>
      <Col>
      {/* <Row><Title>Hi, I'm Paul.</Title></Row> */}
      <Row><DrawTitle /></Row>

        <Row>
          <Margin>
            <SubTitle>A software developer from the GUC with experience in
              <SubTitleBold> Full-Stack Web Developement</SubTitleBold>,{' '}
              <SubTitleBold>Data Engineering</SubTitleBold>{' '}and{' '}
              <SubTitleBold>Embedded Systems</SubTitleBold>.</SubTitle>
          </Margin>
        </Row>
      </Col>

      <br />

      <Row>
        <Col>
            <Row className='justify-content-center'><Button ><Link className='nav-bar' to='/experience' >Experience</Link></Button></Row>
            <Row className='justify-content-center'><Button ><Link className='nav-bar' to='/projects' >Projects</Link></Button></Row>
        </Col>
        <Col>
            <Button>Test2</Button>
        </Col>
      </Row>
    </Container>


    </Margin>


  </Layout>
)

const Margin = styled.div`
  padding: 2em;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
`

// const Title = styled.span`
//   font-size: 3.5em;
//   text-align: center;
//   font-family: 'Pacifico';
//   width: 100%;
// `

const SubTitle = styled.span`

  @media (max-width: 992px){
    font-size: 1em;
  };

  font-size: 1.2em;
  text-align: center;
  font-family: 'Open Sans';
  /* font-style: italic; */
  /* width: 100%; */
`

const SubTitleBold = styled(SubTitle)`
  font-weight: bold;
`

export default IndexPage
