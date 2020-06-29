import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import Card from '../components/Card'

const Experience = () => (
  <Layout selected={1} >
    <SEO title="Experience" />

    <Card data={{
      title: 'University of Porto',
      sub: 'Research Intern',
      date: 'July – September 2019',
      location: 'Porto, Portugal',
      delay: 0,
      tech: [
        'Python',
        'GAMS',
        'MS Excel',
      ],
      list: [
        'Assisted in the research on cutting edge topics like VPPs (Virtual Power Plants) in Commercial Buildings in the field of Power Systems',
        'Modeled complex power systems using Python, GAMS & MS Excel',
        'Worked with Dr. Sergio Santos to publish our results',
      ],
    }}>
      <Image />
    </Card>

    <Card data={{
      title: 'Self-Driving Car Lab, GUC',
      sub: 'Software Developer',
      date: 'January – March 2019',
      delay: 0.1,
      tech: [
        'Python',
        'Tensorflow',
      ],
      list: [
        'Worked on using Machine Learning and Computer vision to detect car signs and lane lines',
        'Got experienced with using keras and darknet with TensorFlow deep learning libraries (Python)',
      ],
    }}>
      <Image />
    </Card>

    <Card data={{
      title: 'Robone',
      sub: 'Software Engineering Intern',
      date: 'July 2018',
      delay: 0.2,
      tech: [
        'Ruby on Rails',
        'Angular',
      ],
      list: [
        'Worked on the launch of the company’s website. (www.robone.co)',
        'Got familiar with web development using Ruby on Rails and Angular.js',
      ],
    }}>
      <Image />
    </Card>

    <Card data={{
      title: 'German University in Cairo',
      sub: 'Junior Teaching Assistant',
      date: 'April – December 2018',
      delay: 0.3,
      tech: [],
      list: [
        'Helped in CSEN202 and CSEN102 classes',
      ],
    }}>
      <Image />
    </Card>
  </Layout>
)



export default Experience
