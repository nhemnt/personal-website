import React from 'react'
import Layout from '../components/Layout'
import Homepage from '../components/Homepage'
import SEO from '../components/seo'
const index = () => {
  return (
    <Layout>
      <SEO
        title={'Hemant Negi'}
        keywords={[
          'Hemant Negi',
          'Senior Software Engineer',
          'React js',
          'nhemnt',
          'Frontend',
          'Javascript',
        ]}
      />
      <Homepage />
    </Layout>
  )
}

export default index
