import React from 'react'
import { Link } from 'gatsby'
import { Body } from './styles'

const Pagination = ({
  isFirst,
  prevPage,
  numPages,
  currentPage,
  isLast,
  nextPage,
  tag = '',
}) => (
  <Body>
    <ul>
      {!isFirst && (
        <Link to={"/"+prevPage} rel="prev">
          <li>←</li>
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/blog/${tag && 'tags/' + tag + '/'}${i === 0 ? '' : i + 1}`}
          className={i + 1 === currentPage ? 'is-active' : ''}
        >
          <li>{i + 1}</li>
        </Link>
      ))}
      {!isLast && (
        <Link to={"/" +nextPage} rel="next">
          <li>→</li>
        </Link>
      )}
    </ul>
  </Body>
)

export default Pagination
