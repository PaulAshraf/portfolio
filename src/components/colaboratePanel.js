import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col} from 'react-bootstrap'

import HomeButton from './HomeButton'


const colaboratePanel = () => {
    return (
        <Panel>
            <Container>
                <Row>
                    <Col lg>
                        <Row><Title>Let's Colaborate!</Title></Row>
                        <Row><Sub>Hit me up on Github/LinkedIn or email me at paulashraf14@gmail.com, and let's create something great.</Sub></Row>
                    </Col>
                <Col lg='4'>
                <HomeButton data={{
                    delay: 0.4,
                    to: 'https://www.linkedin.com/in/paulashraf/',
                    text: 'LinkedIn',
                    invert: true,
                }}/>
                <HomeButton data={{
                    delay: 0.5,
                    to: 'https://github.com/PaulAshraf',
                    text: 'Github',
                    invert: true,
                }}/>
                <HomeButton data={{
                    delay: 0.6,
                    to: 'mailto:paulashraf14@gmail.com',
                    text: 'Mail',
                    invert: true,
                }}/>
                </Col>
                </Row>
            </Container>
        </Panel>
    )
}

const Panel = styled.div`
    background-color: #00adb5;
`
const Title = styled.div`
  @media (max-width: 992px){
    font-size: 2.3em;
  };

  color: #eeeeee;
  font-size: 2.3em;
  width: 100%;
  text-align: center;
  font-family: 'Pacifico';
  padding: 0.7em;
`

const Sub = styled.div`
  @media (max-width: 992px){
    font-size: 1em;
  };

  font-size: 1.4em;
  color: #eeeeee;
  text-align: center;
  font-family: 'Raleway';
  padding: 0.5em;
`

export default colaboratePanel
