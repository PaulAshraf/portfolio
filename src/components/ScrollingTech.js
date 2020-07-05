    import React from 'react'
    import styled, { keyframes } from 'styled-components'

    import Android     from './logoComponents/android'
    import Arduino     from './logoComponents/arduino'
    import C           from './logoComponents/c'
    import Cpp         from './logoComponents/cpp'
    import Cra         from './logoComponents/cra'
    import Csharp      from './logoComponents/csharp'
    import Css         from './logoComponents/css'
    import Express     from './logoComponents/express'
    import GatsbyLogo  from './logoComponents/gatsbyLogo'
    import Haskell     from './logoComponents/haskell'
    import Html        from './logoComponents/html'
    import Java        from './logoComponents/java'
    import Jest        from './logoComponents/jest'
    import Js          from './logoComponents/js'
    import Keras       from './logoComponents/keras'
    import MsSqlServer from './logoComponents/mssqlserver'
    import Node        from './logoComponents/node'
    import OpenCV      from './logoComponents/opencv'
    import OpenGL      from './logoComponents/opengl'
    import Postgres    from './logoComponents/postgres'
    import Prolog      from './logoComponents/prolog'
    import Python      from './logoComponents/python'
    import ReactLogo   from './logoComponents/reactLogo'
    import SC          from './logoComponents/sc'
    import Tf          from './logoComponents/tensorflow'




    const ScrollingTech = () => {
        return (
            <Panel>
            <SlideCont>

            <ImageCont><Python      /></ImageCont>
            <ImageCont><Tf          /></ImageCont>
            <ImageCont><Keras       /></ImageCont>
            <ImageCont><ReactLogo   /></ImageCont>
            <ImageCont><Js          /></ImageCont>
            <ImageCont><GatsbyLogo  /></ImageCont>
            <ImageCont><Cra         /></ImageCont>
            <ImageCont><Node        /></ImageCont>
            <ImageCont><Express     /></ImageCont>
            <ImageCont><Cpp         /></ImageCont>
            <ImageCont><OpenGL      /></ImageCont>
            <ImageCont><Java        /></ImageCont>
            <ImageCont><Postgres    /></ImageCont>
            <ImageCont><Html        /></ImageCont>
            <ImageCont><Arduino     /></ImageCont>
            <ImageCont><Android     /></ImageCont>
            <ImageCont><SC          /></ImageCont>
            <ImageCont><Css         /></ImageCont>
            <ImageCont><Csharp      /></ImageCont>
            <ImageCont><C           /></ImageCont>
            <ImageCont><Jest        /></ImageCont>
            <ImageCont><MsSqlServer /></ImageCont>
            <ImageCont><OpenCV      /></ImageCont>
            <ImageCont><Haskell     /></ImageCont>
            <ImageCont><Prolog      /></ImageCont>

            </SlideCont>
            </Panel>
        )
    }

const ImageCont = styled.div`
    margin: 1.4em;
    margin-top: 0em;
    margin-bottom: 0em;
    display: inline-block;
    vertical-align: middle;

    
    width: 13%;
    height: inherit;

`

const slide = keyframes`
    from {
        transform: translate3d(0,0,0);
    }

    to {
        transform: translate3d(-200%,0,0);
    }
`;

const SlideCont = styled.div`
  animation: ${slide} 60s linear infinite;

  display: inline-block;
  white-space: nowrap;
  vertical-align: center;
  `

const Panel = styled.div`
  white-space: nowrap;
    overflow: hidden;
    margin-top: 1em;
    margin-bottom: 1em;

`


export default ScrollingTech
