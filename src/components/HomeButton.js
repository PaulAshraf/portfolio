import React from 'react'
import { Link } from 'gatsby'
import { Button, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillFilePdf, AiFillCode } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

import cv from '../files/PaulAshrafCV.pdf'

const initial = { rotate: 0, scale: 0 }
const animate = { rotate: 0, scale: 1 }
const transition = (delay) => ({
  type: "spring",
  stiffness: 260,
  damping: 18,
  delay: delay + 1.7
})

const size = 25

const resolveIcon = (type) => {
    switch(type){
        case 'Experience':
            return <MdWork size={size}/>
        case 'Projects':
            return <AiFillCode size={size}/>
        case 'Education':
            return <FaGraduationCap size={size}/>
        case 'LinkedIn':
            return <AiFillLinkedin size={size}/>
        case 'Github':
            return <AiFillGithub size={size}/>
        case 'Mail':
            return <AiOutlineMail size={size}/>
        case 'CV':
            return <AiFillFilePdf size={size}/>
        default:
            return <></>
    }
}

const HomeButton = ({data}) => {
    if(data.text === 'CV'){
        return (
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(data.delay)}
            >
                <Row className='justify-content-center'><ButtonStyle><Button variant='link'><a className='nav-bar' href={cv} download>
                    <SubTitleBold>{resolveIcon(data.text)}{' ' + data.text}</SubTitleBold>
                </a></Button></ButtonStyle></Row>
            </ motion.div>
        )
    }
    if(!data.invert){
        return (
            <motion.div
                  initial={initial}
                  animate={animate}
                  transition={transition(data.delay)}
            >
                <Row className='justify-content-center'><ButtonStyle><Button variant='link'><Link className='nav-bar' to={data.to} >
                    <SubTitleBold>{resolveIcon(data.text)}{' ' + data.text}</SubTitleBold>
                </Link></Button></ButtonStyle></Row>
            </ motion.div>
        )
    }
    else{
        return (
            <motion.div
                  initial={initial}
                  animate={animate}
                  transition={transition(data.delay)}
            >
                <Row className='justify-content-center'><ButtonStyleInvert><Button variant='link'><Link className='nav-bar' to={data.to} >
                    <SubTitleBoldInvert>{resolveIcon(data.text)}{' ' + data.text}</SubTitleBoldInvert>
                </Link></Button></ButtonStyleInvert></Row>
            </ motion.div>
        )
    }
}

const SubTitle = styled.span`

  @media (max-width: 992px){
    font-size: 1em;
  };

  /* font-size: 1.2em; */
  text-align: center;
  font-family: 'Raleway';
`

const SubTitleBold = styled(SubTitle)`
  margin: 0.1em;
  font-weight: bold;
  color: #eeeeee;
`
const ButtonStyle = styled.div`
  width: 10em;
  margin: 1em;
  background-color: #393e46;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #393e46;
  border-radius : 10px;
`

const SubTitleBoldInvert = styled(SubTitle)`
  margin: 0.1em;
  font-weight: bold;
  color: #222831;
`
const ButtonStyleInvert = styled.div`
  width: 10em;
  margin: 1em;
  background-color: #eeeeee;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #eeeeee;
  border-radius : 10px;
`

export default HomeButton
