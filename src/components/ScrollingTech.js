import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components'

const list = [
    'android',
    'html',
    'opencv',
    'arduino',
    'opengl',
    'c',
    'intel',
    'c++',
    'java',
    'cra',
    'jest',
    'postgres',
    'csharp',
    'js',
    'prolog',
    'css',
    'keras',
    'python',
    'excel',
    'matlab',
    'react',
    'express',
    'mongo',
    'mssqlserver',  
    'rubyonrails',
    'node',
    'styled',
    'tf',
    'haskell',
    'next',
    'heroku',
    'netlify',
]

const ScrollingTech = () => {


    const data = useStaticQuery(graphql`
        query {
        allImageSharp {
            edges {
            node {
                id
                fluid(maxWidth: 300, grayscale: true) {
                ...GatsbyImageSharpFluid,
                originalName
                }
            }
            }
        }
        }
    `)

    return (
        <Panel>
        <SlideCont>

        {data.allImageSharp.edges.map(edge => {
            if(list.includes(edge.node.fluid.originalName.split('.')[0]))
                return(
                    <ImageCont key={edge.node.id}>
                        <Img 
                            loading='eager'
                            fluid={edge.node.fluid} 
                            imgStyle={{ objectFit: 'contain', objectPosition: 'middle' }} 
                            style={{height: '100px', verticalAlign: 'middle' }}
                        />
                    </ImageCont>
                ) 
            else
                return null
            }
        )}

        </SlideCont>
        </Panel>
    )
}


const ImageCont = styled.div`
    margin: 1.5em;
    margin-top: 0em;
    margin-bottom: 0em;
    display: inline-block;
    vertical-align: middle;

    width: 10%;
    height: 100px;

`
const slide = keyframes`
    from {
        transform: translate3d(0,0,0);
    }

    to {
        transform: translate3d(-${list.length*180}px,0,0);
    }
`;

const SlideCont = styled.div`
    animation: ${slide} 120s linear infinite;

    display: inline-block;
    white-space: nowrap;
    vertical-align: center;
  `

const Panel = styled.div`
    white-space: nowrap;
    overflow: hidden;
    margin-top: 2em;
    margin-bottom: 2em;

`
export default ScrollingTech
