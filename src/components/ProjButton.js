import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { AiOutlineMobile, AiFillGithub, AiFillFilePdf, AiFillYoutube, AiFillChrome } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { FaGamepad, FaMicrochip } from 'react-icons/fa'
import { FiGlobe, FiMonitor, FiDatabase, FiExternalLink } from 'react-icons/fi'


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
        case 'Web':
            return <FiGlobe size={size}/>
        case 'Desktop':
            return <FiMonitor size={size}/>
        case 'Game':
            return <FaGamepad size={size}/>
        case 'Mobile':
            return <AiOutlineMobile size={size}/>
        case 'Data Science':
            return <FiDatabase size={size}/>
        case 'Embedded Systems':
            return <FaMicrochip size={size}/>
        case 'Other':
            return <BsThreeDots size={size}/>

        case 'Github':
            return <AiFillGithub size={size}/>
        case 'PDF':
            return <AiFillFilePdf size={size} />
        case 'website':
            return <FiExternalLink size={size} />
        case 'youtube':
            return <AiFillYoutube size={size} />
        case 'chrome':
            return <AiFillChrome size={size} />

        default:
            return <></>
    }
}

const ProjButton = ({data}) => {
    if(data.link){
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
    if(data.card){
        return(
            <Row className='justify-content-center'><ButtonStyle><Button variant='link'><a className='nav-bar' href={data.href} target="_blank"  rel="noreferrer">
                <SubTitleBold>{resolveIcon(data.type)}{' ' + data.text}</SubTitleBold>
            </a></Button></ButtonStyle></Row>
        )
    }
    return (
        <motion.div
              initial={initial}
              animate={animate}
              transition={transition(data.delay)}
        >
            <Row className='justify-content-center'><ButtonStyle><Button variant='link' onClick={data.onCLick}>
                <SubTitleBold>{resolveIcon(data.text)}{' ' + data.text}</SubTitleBold></Button></ButtonStyle></Row>
        </ motion.div>
    )

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
  text-decoration: none;
`
const ButtonStyle = styled.div`
  width: 14em;
  margin: 1em;
  background-color: #393e46;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #393e46;
  border-radius : 10px;
`


export default ProjButton
