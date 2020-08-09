import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'

import ProjButton from '../components/ProjButton'

const ProjCard = ({children, data}) => {
    return (
        <Wrapper>
        <Container fluid>
            <Row className='justify-content-center'>
                <Col lg>{children}</Col>
                <Col lg>
                <Row>
                    <Title>{data.name}</Title>
                    <Sub>{data.date + ' '}<BsDot />{' ' + data.type + ' Project'}</Sub>
                    <Sub>{data.desc}</Sub>
                </Row>
                <Row className='align-items-end'>
                {data.github?
                <ButtonCont><ProjButton data={{
                    link: false,
                    card: true,
                    text: 'Github',
                    type: 'Github',
                    href: data.github
                  }} /></ButtonCont>
                :<></>}
                {data.live?
                  <ButtonCont><ProjButton data={{
                    link: false,
                    card: true,
                    text: 'Website',
                    type: 'website',
                    href: data.live
                  }} /></ButtonCont>
                  :<></>}
                  {data.paper?
                  <ButtonCont><ProjButton data={{
                    link: false,
                    card: true,
                    text: 'Paper',
                    type: 'PDF',
                    href: data.paper
                  }} /></ButtonCont>
                  :<></>}
                  {data.youtube?
                <ButtonCont><ProjButton data={{
                  link: false,
                  card: true,
                  text: 'Youtube',
                  type: 'youtube',
                  href: data.youtube
                }} /></ButtonCont>
                :<></>}
                </Row>
                </Col>
            </Row>
        </Container>
        <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0.5em auto;

  @media (min-width: 992px){
    max-width: 70%
  };

  max-width: 97%

  
`

const ButtonCont = styled.div`
  margin: 0.3em;
  width: 47%;
`

// const ImageCont = styled.div`
//   /* width: 40%; */
// `

const Data = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Raleway';

  @media (max-width: 992px){
    text-align: center;
  };
`

const Title =  styled(Data)`
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 992px){
    font-size: 1.8em;
  };
`

const Sub = styled(Data)`
  font-size: 0.9em;

  @media (min-width: 992px) {
    font-size: 1.2em;
  };

`

export default ProjCard
