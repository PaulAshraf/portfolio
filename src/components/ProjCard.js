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
                    <Title>{data.sub + ' '}<BsDot />{' ' + data.title}</Title>
                    <Sub>{data.date + ' '}<BsDot />{' ' + (data.location||'Cairo, Egypt')}</Sub>
                    <Sub>{data.tech.map((element, i) => {
                        if(i !== data.tech.length - 1){
                            return(<>{element  + ' '}<BsDot /></>)}
                        else{
                            return(element)}
                    })}</Sub>
                </Row>
                </Col>
            </Row>
            <Row  >
                <Col>
                <List>
                    {data.list.map((li) => {return(<li>{li}</li>)})}
                </List>
                </Col>
            </Row>
        </Container>
        <hr />
        </>
    )
}

const ImageCont = styled.div`
  width: 10em;
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
const List = styled.ul`
  font-family: 'Arima Madurai';
  padding: 0.5em;
`

export default ProjCard
