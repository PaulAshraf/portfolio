import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'

import Guc from '../components/imageComponents/guc'
import Nrc from '../components/imageComponents/nrc'


const Education = () => (
  <Layout selected={3} >
    <SEO title="Education" />

    <Card data={{
      title: 'German University in Cairo',
      sub: 'Computer Science Engineering BSc',
      date: 'Media Engineering and Technology Faculty',
      location: 'Current GPA: "Excellent"',
      delay: 0,
      tech: ['Class of 2021'],
      list: [],
    }}>
      <Guc />
    </Card>

    <Card data={{
      title: 'New Ramses College',
      sub: 'IGCSE',
      date: 'Straight A*\'s (3 A-Levels)',
      location: 'Equiveleant Score of "100%"',
      delay: 0,
      tech: ['Class of 2016'],
      list: [],
    }}>
      <Nrc />
    </Card>

  </Layout>
)

export default Education
