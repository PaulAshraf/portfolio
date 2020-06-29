import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { FaTools, FaGraduationCap } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import DrawTitle from '../components/DrawTitle'

const initial = { rotate: 0, scale: 0 }
const animate = { rotate: 0, scale: 1 }
const transition = (delay) => ({
  type: "spring",
  stiffness: 260,
  damping: 18,
  delay: delay + 2
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Margin>

      <Container fluid>
        <Col>
          <Row><DrawTitle /></Row>

          <Row>
            <Margin>
              <SubTitle>A Software Developer from the GUC with experience in
              <SubTitleBold> Full-Stack Web Developement</SubTitleBold>,{' '}
                <SubTitleBold>Data Engineering</SubTitleBold>{' '}and{' '}
                <SubTitleBold>Embedded Systems</SubTitleBold>.</SubTitle>
            </Margin>
          </Row>
        </Col>

        <Row>
          <Col lg>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='/experience' >
                <MdWork />   Experience
            </Link></Button></ButtonStyle></Row>
            </ motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.1)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='/projects'   >
                <FaTools />   Projects
            </Link></Button></ButtonStyle></Row>
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.2)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='/projects'   >
                <FaGraduationCap />   Education
            </Link></Button></ButtonStyle></Row>
            </motion.div>

          </Col>
          <Col lg>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.3)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='https://www.linkedin.com/in/paulashraf/' >
                <AiFillLinkedin />   LinkedIn
            </Link></Button></ButtonStyle></Row>
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.4)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='https://github.com/PaulAshraf'   >
                <AiFillGithub />   Github
            </Link></Button></ButtonStyle></Row>
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.5)}
            >
              <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to='mailto:paulashraf14@gmail.com'   >
                <AiOutlineMail />   Mail
            </Link></Button></ButtonStyle></Row>
            </motion.div>
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

const SubTitle = styled.span`

  @media (max-width: 992px){
    font-size: 1em;
  };

  font-size: 1.2em;
  text-align: center;
  font-family: 'Arima Madurai';
`

const SubTitleBold = styled(SubTitle)`
  font-weight: bold;
`
const ButtonStyle = styled.div`
  width: 45%;
  margin: 1em;
  text-decoration: none;
  border: 2px solid white;
  border-radius : 50px;
`

export default IndexPage
