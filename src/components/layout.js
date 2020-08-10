/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"

import { AiFillHeart } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

const Layout = ({ children, selected }) => {
  return (
    <>
      <Header selected={selected} />
      <main>{children}</main>
      <footer style={{marginTop: '3em', marginBottom: '1em'}}>
        <div>Made with <AiFillHeart /> using Gatsby <BsDot /> <a href='https://github.com/PaulAshraf/portfolio' target="_blank" rel="noreferrer">Source Code</a></div>
        <div>{new Date().getFullYear()} © Paul Ashraf</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
