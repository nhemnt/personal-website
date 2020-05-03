import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  state = {
    darkMode: false
  }
  render() {
    
    const { darkMode } = this.state;
    
    const { location, title, children } = this.props
    const isRootPath = location.pathname === `${__PATH_PREFIX__}/`
    const pageNumber = location.pathname
      .split('/')
      .filter(Boolean)
      .pop()
    const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/))
    let header

    if (isRootPath || isPaginatedPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      // <ThemeToggler>
      // {({ theme, toggleTheme }) => (
      //   <label>
      //     <input
      //       type="checkbox"
      //       onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
      //       checked={theme === 'dark'}
      //     />{' '}
      //     Dark mode
      //   </label>
      // )}
   
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
         <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <label>
              <div class="dark-light"
                onClick={() => {
                this.setState((prevState) => ({
                  darkMode: !prevState.darkMode
                }), () => { 
                    toggleTheme(darkMode ? "dark": "light");
                })
                }}
              >
              <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
              </div>
            {/* <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode */}
          </label>
        )}
      </ThemeToggler>
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
        // </ThemeToggler>
    )
  }
}

export default Layout
