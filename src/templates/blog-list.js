import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/seo";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import { rhythm } from "../utils/typography";
import { Header, PostPreview, Blog } from "./styles";
import BlogHeader from "./blog-header.jpg";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { title: siteTitle, author } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      "blog/" + (currentPage - 1 === 1 ? "" : (currentPage - 1).toString());
    const nextPage = "blog/" + (currentPage + 1).toString();

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Blog>
          <Header
          style={{ backgroundImage: `url(${BlogHeader})` }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>CodeLutto's Blog</h1>
                    <span className="subheading">
                      Software Developers never RIP, they just get Garbage
                      Collected.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Header>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug;
                  return (
                    <>
                      <PostPreview key={node.fields.slug}>
                        <Link to={node.fields.slug}>
                          <h2 className="post-title">{title}</h2>
                          <p
                            className="post-subtitle"
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                        </Link>
                        <p className="post-meta">
                          Posted by <a href="#">{author}</a> on{" "}
                          {node.frontmatter.date}
                        </p>
                      </PostPreview>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <hr />
        </Blog>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`blog/${i === 0 ? "" : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    );
  }
}

export default BlogIndex;

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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
