import React from 'react'
import PropTypes from 'prop-types'
import BlogList from '../components/BlogList'
import SEO from '../components/seo'
import Bio from '../components/Bio'
import Layout from '../components/Layout'

const Tags = ({ pageContext, data }) => {
  const { title: siteTitle, author } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages, tag, totalCount } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    'blog/' +
    tag +
    '/' +
    (currentPage - 1 === 1 ? '' : (currentPage - 1).toString())
  const nextPage = 'blog/' + tag + '/' + (currentPage + 1).toString()

  return (
    <Layout>
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
          tag,
        }}
        totalCount={totalCount}
        author={author}
      />
      <Bio />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`
