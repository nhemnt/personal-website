import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Navbar, NavbarHeader, SideNavbar } from './styles'

const Home = () => (
  <Link to="/">
    <SideNavbar>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke={'#000'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
      <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
      </svg>
      </SideNavbar>
  </Link>
)

const MainNavbar = ({ navbarType }) => {
  const [lists] = useState([
    { title: 'Home', url: '/' },
    { title: 'Projects', url: '/projects' },
    { title: 'Blog', url: '/blog' },
    { title: 'Showcase', url: '/showcase' },
    { title: 'Resume', url: '/resume' },
  ])
  return (
    <>
      {navbarType === 'small' ? (
          <Home />
      ) : (
        <NavbarHeader>
          <Navbar>
            {lists.map(({ url, title }) => (
              <Link to={url} key={title}>
                {title}
              </Link>
            ))}
          </Navbar>
        </NavbarHeader>
      )}
    </>
  )
}

export default MainNavbar
