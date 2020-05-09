import React from 'react'
import { Link } from "gatsby";
import { StyledError } from "./styles";
function Error() {
  return (
    <StyledError>
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link to="/">Go TO Homepage</Link>
      </div>
    </StyledError>
  )
}

export default Error
