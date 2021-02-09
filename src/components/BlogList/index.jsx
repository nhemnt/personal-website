import React from 'react'
import { Link } from 'gatsby'
import readingTime from 'reading-time'
import {
  Header,
  Blog,
  ReadingTime,
  BlogPost,
  PostDetailList,
  PostHeading,
  PostDetail,
  ContinueButton,
} from './styles'
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
            <div className="col-lg-8 offset-lg-2">
              <div>
                <div className="row">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <div className="col-lg-12">
                        <BlogPost>
                          <div className="p-4">
                            <PostHeading>{title}</PostHeading>
                            <PostDetailList>
                              <li>
                                <a href="#">{author}</a>
                                {' / '}
                              </li>
                              <li>
                                {node.frontmatter.tags.map((tag, i) => (
                                  <Link to={`/blog/tags/${tag}`} key={tag}>
                                    {tag}
                                    {node.frontmatter.tags.length - 1 === i
                                      ? ''
                                      : ','}{' '}
                                  </Link>
                                ))}
                                {' / '}
                              </li>
                              <li>
                                {node.frontmatter.date}
                                {' / '}
                              </li>
                              <li>
                                <ReadingTime>
                                  {readingTime(node.html).text}
                                </ReadingTime>
                              </li>
                            </PostDetailList>
                            <PostDetail
                              dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            />
                            <Link to={node.fields.slug} className="mt-3">
                              <ContinueButton>Continue Reading</ContinueButton>
                            </Link>
                          </div>
                        </BlogPost>
                      </div>
                    )
                  })}
                </div>
              </div>
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
