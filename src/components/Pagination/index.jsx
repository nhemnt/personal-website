import React from 'react'
import { Link } from "gatsby";
import { Body } from './styles';
// color: i + 1 === currentPage ? "#ffffff" : "",
const Pagination = ({isFirst, prevPage, numPages, currentPage, isLast, nextPage}) => (
  <Body>
  <ul>
  {!isFirst && (
    <Link to={prevPage} rel="prev">
      <li>←</li>
    </Link>
  )}
  {Array.from({ length: numPages }, (_, i) => (
    
      <Link
      key={`pagination-number${i + 1}`}
      to={`blog/${i === 0 ? "" : i + 1}`}
      className={i + 1 === currentPage  ?"is-active" :""}
      >
        <li>{i + 1}</li>
      </Link>
  ))}
  {!isLast && (
    <Link to={nextPage} rel="next">
      <li>→</li>
    </Link>
  )}
    </ul>
    </Body>
)

export default Pagination
