import React from 'react'
import { Link } from 'gatsby'
import readingTime from 'reading-time'
import { Header, PostPreview, Blog, ReadingTime } from './styles'
import Pagination from '../Pagination'
import BlogHeader from './blog-header.jpg'
const BlogList = ({
  posts,
  pagination: {
    isFirst,
    prevPage,
    numPages,
    currentPage,
    isLast,
    nextPage,
    tag,
  },
  totalCount,
  author,
}) => {
  return (
    <>
      <Blog>
        <Header style={{ backgroundImage: `url(${BlogHeader})` }}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1 className="text-capitalize">
                    {tag ? tag : `CodeLutto's Blog`}
                  </h1>
                  <span className="subheading">
                    {totalCount
                      ? `Collection of ${totalCount} post${
                          totalCount === 1 ? '' : 's'
                        } `
                      : 'Software Developers never RIP, they just get Garbage Collected.'}
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
                const title = node.frontmatter.title || node.fields.slug
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
                        Posted by <a href="#">{author}</a> on{' '}
                        {node.frontmatter.tags.map((tag, i) => (
                          <Link to={`/blog/tags/${tag}`} key={tag}>
                            {tag}
                            {node.frontmatter.tags.length - 1 === i
                              ? ''
                              : ','}{' '}
                          </Link>
                        ))}
                        {node.frontmatter.date}{' '}
                        <ReadingTime>{readingTime(node.html).text}</ReadingTime>
                      </p>
                    </PostPreview>
                    <hr />
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <hr />
      </Blog>

      <Pagination
        isFirst={isFirst}
        prevPage={prevPage}
        numPages={numPages}
        currentPage={currentPage}
        isLast={isLast}
        nextPage={nextPage}
        tag={tag}
      />

      <hr />
    </>
  )
}

export default BlogList
