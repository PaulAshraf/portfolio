import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'

import Porto from '../components/imageComponents/porto'
import Guc from '../components/imageComponents/guc'
import Robone from '../components/imageComponents/robone'
import Coursera from '../components/imageComponents/coursera'
import ITWorx from '../components/imageComponents/itworx'

const Experience = () => (
  <Layout selected={1} >
    <SEO title="Experience" />

    <Card data={{
      title: 'NimbleBot',
      sub: 'Web Developement Instructor',
      date: 'August 2020 – present',
      delay: 0,
      tech: [],
      list: [
        'Authoring Web development Courses on the Coursera Rhyme Platform.',
        'Over 1200 registered learners.'
      ],
    }}>
      <Coursera />
    </Card>

    <Card data={{
      title: 'ITWorx',
      sub: 'Full Stack Engineering Intern',
      date: 'September – October 2020',
      delay: 0,
      tech: [
        'React',
        'Node',
        'MySQL',
        'nginx'
      ],
      list: [
        'Built a large-scale internal tool for placing and managing talent inside ITWorx.',
        ' Node, React and MySQL were used to build the tool.',
      ],
    }}>
      <ITWorx />
    </Card>

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
      <Porto />
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
      <Guc />
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
      <Robone />
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
      <Guc />
    </Card>
  </Layout>
)



export default Experience
