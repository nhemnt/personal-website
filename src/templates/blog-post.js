import React from "react";
import { Link, graphql } from "gatsby";
import Disqus from "../components/Disqus";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Header, Blog } from "./styles";
import PostHeader from "./post-header.jpg";
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { siteTitle, author } = this.props.data.site.siteMetadata;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <Blog>
          <Header style={{ backgroundImage: `url(${PostHeader})` }}>
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="post-heading">
                    <h1>{post.frontmatter.title}</h1>
                    <h2 className="subheading"></h2>
                    <span className="meta">
                      Posted by <a href="#">{author}</a> on{" "}
                      {post.frontmatter.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  <hr />
                  <Disqus postNode={post} siteMetadata={this.props.data.site.siteMetadata} />
                </div>
              </div>

            </div>
          </article>
         
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Blog>

        <hr
        />
        <Bio />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
      siteUrl
      disqusShortname
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    fields{
      slug
    }
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      slug
    }
  }
}
`;
