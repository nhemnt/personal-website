import React from 'react'
import { Link } from 'gatsby'
import { Body } from './styles'

const Navbar = () => {
  const lists = [
    {
      title: 'Home',
      url: '/',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          focusable="false"
        >
          <path
            className="svg-stroke svg-stroke-dark svg-fill-light"
            d="M22.8 22h-7.6l3.8-6.7 3.8-6.6 3.9 6.6 3.8 6.7h-7.7z"
          />
          <circle
            className="svg-stroke svg-stroke-dark svg-fill-accent svg-fill-transparent"
            cx="13.25"
            cy="20.25"
            r="6.75"
          />
          <path
            className="svg-stroke svg-stroke-dark"
            fill="transparent"
            d="M1.75 7.75h10.5v10.5H1.75z"
          />
        </svg>
      ),
    },
    {
      title: 'Projects',
      url: '/projects',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          focusable="false"
        >
          <path
            d="M18.925 14.697l-2.122-2.122-3.535 3.536 2.121 2.121 3.536-3.535z"
            className="svg-stroke svg-stroke-dark svg-fill-background"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.707 6.006l3.182-1.188L25.701 8l1.188 3.182-3.182-1.188-3.182 1.188L21.713 8l-1.188-3.182 3.182 1.188z"
            className="svg-fill-dark"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.472 8L12 9.414l-1.414-.528-1.414.528L9.7 8l-.528-1.414 1.414.528L12 6.586 11.472 8z"
            className="svg-fill-accent svg-stroke svg-stroke-accent"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.886 18l.528 1.414L24 18.886l-1.414.528.528-1.414-.528-1.414 1.414.528 1.414-.528L24.886 18z"
            className="svg-fill-dark"
          />
          <path
            d="M13.268 16.11l2.121 2.122-8.132 8.132a1.5 1.5 0 11-2.121-2.121l8.132-8.132z"
            className="svg-stroke svg-stroke-dark svg-fill-background"
          />
        </svg>
      ),
    },
    {
      title: 'Blog',
      url: '/blog',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          focusable="false"
        >
          <path
            className="svg-stroke svg-stroke-accent svg-fill-accent"
            d="M24.6 13.8L15.4 23H9.7v-5.7l9.2-9.2c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.2 0 5.7z"
          />
          <path
            d="M21.1 11.7h4.2m-7.1 2.8h5.7m-7.1 1.4l-.1-5.7M14 18.8l-.1-5.8m10.7-4.8L10.1 22.7"
            className="svg-stroke svg-stroke-dark"
          />
          <path
            d="M7.4 26.4l-2.4.4 4.9-5 1.1 1-3.6 3.6z"
            className="svg-fill-dark"
          />
          <path
            className="svg-stroke svg-stroke-dark"
            fill="transparent"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6 13.8L15.4 23H9.7v-5.7l9.2-9.2c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.2 0 5.7z"
          />
        </svg>
      ),
    },
    {
      title: 'Showcase',
      url: '/showcase',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.156 23.156L12.5 29l-2.656-5.844L4 20.5l5.844-2.656L12.5 12l2.656 5.844L21 20.5l-5.844 2.656z"
            className="svg-stroke svg-stroke-dark svg-fill-background"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.91 15.91L24.5 19l-1.41-3.09L20 14.5l3.09-1.41L24.5 10l1.41 3.09L29 14.5l-3.09 1.41z"
            className="svg-fill-dark"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.597 7.597L16.5 10l-1.097-2.403L13 6.5l2.403-1.097L16.5 3l1.097 2.403L20 6.5l-2.403 1.097z"
            className="svg-fill-accent"
          />
        </svg>
      ),
    },
    {
      title: 'Resume',
      url: '/resume',
      svg: (
        <svg className="svg-icon-docs" viewBox="0 0 32 32" focusable="false">
          <path
            className="svg-stroke svg-stroke-dark svg-fill-accent svg-fill-transparent"
            d="M6 10c0-1.6 1.4-3 3-3h3v5H6v-2z"
          />
          <path
            d="M9 7c1.6 0 3 1.4 3 3v12c0 1.6 1.3 3 3 3s3-1.4 3-3h6V10c0-1.6-1.4-3-3-3H9z"
            className="svg-fill-background"
          />
          <path
            d="M9 7h12c1.6 0 3 1.4 3 3v12"
            fill="transparent"
            className="svg-stroke svg-stroke-dark"
          />
          <path
            d="M15 25c-1.7 0-3-1.4-3-3V10c0-1.6-1.4-3-3-3"
            fill="transparent"
            className="svg-stroke svg-stroke-dark"
          />
          <path
            className="svg-stroke svg-stroke-dark svg-fill-light"
            d="M15 25h9c1.6 0 3-1.4 3-3v-1h-9v1c0 1.6-1.4 3-3 3z"
          />
          <circle cx="20.2" cy="11.6" r={1} className="svg-fill-dark" />
          <circle cx={16} cy="11.6" r={1} className="svg-fill-dark" />
          <path
            d="M21.2 14.5v1.3c0 .6-.3 1.1-.8 1.6s-1.3.9-2.2.9c-.9 0-1.7-.4-2.2-.9-.5-.5-.8-1-.8-1.6v-1.3h6z"
            className="svg-fill-dark"
          />
        </svg>
      ),
    },
  ]
  return (
    <Body>
      {lists.map(({ title, url, svg }) => (
        <Link to={url}>
          <span>{svg}</span>
          <div>{title}</div>
        </Link>
      ))}
    </Body>
  )
}

export default Navbar
