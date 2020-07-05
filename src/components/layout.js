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

const Layout = ({ children, selected }) => {
  return (
    <>
      <Header selected={selected} />
      <main>{children}</main>
      <footer style={{marginTop: '3em'}}>
        2020 © Paul Ashraf
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
