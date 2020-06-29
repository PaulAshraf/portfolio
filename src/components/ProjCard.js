import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'


const ProjCard = ({children, data}) => {
    return (
        <>
        <Container fluid>
            <Row >
                <ImageCont>
                    <Col>{children}</Col>
                </ImageCont>
                <Col>
                <Row>
                    <Title>{data.name}</Title>
                    <Sub>{data.date + ' '}<BsDot />{' ' + data.type + ' Project'}</Sub>
                    <Sub>{data.desc}</Sub>
                </Row>
                </Col>
            </Row>
        </Container>
        <hr />
        </>
    )
}

const ImageCont = styled.div`
  width: 40%;
`

const Data = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Arima Madurai';
`

const Title =  styled(Data)`
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 992px){
    font-size: 1.2em;
  };
`

const Sub = styled(Data)`
  font-size: 0.9em;

  @media (min-width: 992px) {
    font-size: 1.2em;
  };

`

export default ProjCard
