import React from "react"
import styled from "styled-components"
import { Row, Col, Container } from "react-bootstrap"
import { BsDot } from "react-icons/bs"

const Card = ({ children, data }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <ImageCont>
            <Col>{children}</Col>
          </ImageCont>
          <Col>
            <Row>
              <Title>
                {data.sub + " "}
                <BsDot />
                {" " + data.title}
              </Title>
              <Sub>
                {data.date + " "}
                <BsDot />
                {" " + (data.location || "Cairo, Egypt")}
              </Sub>
              <Sub>
                {data.tech.map((element, i) => {
                  if (i !== data.tech.length - 1) {
                    return (
                      <span key={i}>
                        {element + " "}
                        <BsDot />
                      </span>
                    )
                  } else {
                    return <span key={i}>{element}</span>
                  }
                })}
              </Sub>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <List>
              {data.list.map((li, i) => {
                return <li key={i}>{li}</li>
              })}
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
  font-family: "Raleway";
`

const Title = styled(Data)`
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 1.2em;
  }
`

const Sub = styled(Data)`
  font-size: 0.9em;

  @media (min-width: 992px) {
    font-size: 1.2em;
  }
`
const List = styled.ul`
  font-family: "Raleway";
  padding: 0.5em;
`

export default Card
