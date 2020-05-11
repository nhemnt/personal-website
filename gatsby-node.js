const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postsRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          tag: Array.isArray(post.node.frontmatter.tags) && post.node.frontmatter.tags.length>0 && post.node.frontmatter.tags[0]
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });

    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    const postsPerPageforTag = 2;
    // Make tag pages
    tags.forEach(tag => {
      const numOfPages = Math.ceil(tag.totalCount / postsPerPageforTag);
      Array.from({ length: numOfPages }).forEach((__, i) => {
        createPage({
          path: i === 0 ? `/blog/tags/${_.kebabCase(tag.fieldValue)}`: `/blog/tags/${_.kebabCase(tag.fieldValue)}/${i + 1}`,
          component: path.resolve('./src/templates/tag.js'),
          context: {
            tag: tag.fieldValue,
            limit: postsPerPageforTag,
            skip: i * postsPerPageforTag,
            numPages: numOfPages,
            currentPage: i + 1,
            totalCount: tag.totalCount
          },
        })
      })
    })
  })
  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
