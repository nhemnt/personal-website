import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { title: siteTitle, author } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      'blog/' + (currentPage - 1 === 1 ? '' : (currentPage - 1).toString())
    const nextPage = 'blog/' + (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <BlogList
          posts={posts}
          pagination={{
            isFirst,
            prevPage,
            numPages,
            currentPage,
            isLast,
            nextPage,
          }}
          author={author}
        />



        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
