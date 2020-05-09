import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Navbar, NavbarHeader, NavItems, NavItem } from './styles'

const MainNavbar = ({ navbarType }) => {
  const [activeLink, setActiveLink] = useState('')
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
        <></>
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
