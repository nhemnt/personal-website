import { createGlobalStyle, css  } from 'styled-components'
const themeColorPurple = '#922c88'
const themeColorBlue = '#145388'
const themeColorGreen = '#576a3d'
const themeColorOrange = '#e2863b'
const themeColorRed = '#880a1f'

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    html {
      width: 100%;
      height: 100%;
      background: ${theme['background-color']};
    }

    h3 a {
      color: ${theme['theme-color-1']};
    }

    body {
      background: ${theme['background-color']};
    }
    .theme-colors {
      width: 280px;
      position: fixed;
      z-index: 1030;
      top: 50%;
      right: 0;
      background: ${theme['foreground-color']};
      transform: translate(280px, -50%);
      transition: transform 0.4s ease-out;
      padding-top: 10px;
      padding-bottom: 10px;

      .theme-button {
        position: absolute;
        left: -34px;
        background: ${theme['foreground-color']};
        padding: 13px 7px 13px 7px;
        border-radius: 0.2rem;
        color: ${theme['gradient-color-2']};
        box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.04);
        font-size: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: ${theme['theme-color-1']};

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .theme-color {
        width: 24px;
        height: 24px;
        display: inline-block;
        border-radius: 20px;
        transition: background 0.25s;

        &.active,
        &:hover {
          background: ${theme['foreground-color']};
        }
        span {
          display: none;
        }
      }

      .theme-color-purple {
        border: 3px solid ${themeColorPurple};
        background: ${themeColorPurple};
      }

      .theme-color-blue {
        border: 3px solid ${themeColorBlue};
        background: ${themeColorBlue};
      }

      .theme-color-orange {
        border: 3px solid ${themeColorOrange};
        background: ${themeColorOrange};
      }

      .theme-color-green {
        border: 3px solid ${themeColorGreen};
        background: ${themeColorGreen};
      }

      .theme-color-red {
        border: 3px solid ${themeColorRed};
        background: ${themeColorRed};
      }

      &.shown {
        transform: translate(0, -50%);
      }
    }

    /*!
 * Start Bootstrap - Resume v5.0.8 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */

    @media (max-width: 990px) {
      #resume {
        padding-top: 0px !important;
      }
      #resume > nav {
        display: none;
      }
    }
    @media (min-width: 992px) {
      #resume {
        padding-top: 0;
        padding-left: 17rem;
      }
    }
    @media (max-width: 992px) {
      #resume {
        .title {
          font-size: 4rem;
        }
      }
    }

    #resume {
      font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      padding-top: 54px;
      color: ${theme['primary-color']};

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        font-weight: 700;
        text-transform: uppercase;
        color: ${theme['secondary-color']};
      }
      h1 {
        font-size: 6rem;
        line-height: 5.5rem;
      }
      h2 {
        font-size: 3.5rem;
      }
      h3 {
        font-size: 2rem;
      }
      p.lead {
        font-size: 1.15rem;
        font-weight: 400;
      }
      .subheading {
        text-transform: uppercase;
        font-weight: 500;
        font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        font-size: 1.5rem;
      }
      .social-icons a,
      svg {
        display: inline-block;
        height: 3.5rem;
        width: 3.5rem;
        background-color: ${theme['gradient-color-2']};
        color: ${theme['button-text-color']} !important;
        border-radius: 100%;
        text-align: center;
        font-size: 1.5rem;
        line-height: 3.5rem;
        margin-right: 1rem;
      }
      .social-icons a:last-child {
        margin-right: 0;
      }
      .social-icons a:hover {
        background-color: ${theme['gradient-color-3']};
      }
      .dev-icons {
        font-size: 3rem;
      }
      .dev-icons .list-inline-item i:hover {
        color: ${theme['gradient-color-2']};
      }
      #sideNav .navbar-nav .nav-item .nav-link {
        font-weight: 800;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
      }
      #sideNav .navbar-toggler:focus {
        outline-color: ${theme['theme-color-2']};
      }
      @media (min-width: 992px) {
        #sideNav {
          text-align: center;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          width: 17rem;
          height: 100vh;
        }
        #sideNav .navbar-brand {
          display: flex;
          margin: auto auto 0;
          padding: 0.5rem;
        }
        #sideNav .navbar-brand .img-profile {
          max-width: 10rem;
          max-height: 10rem;
          border: 0.5rem solid ${theme['muted-color']};
        }
        #sideNav .navbar-collapse {
          display: flex;
          align-items: flex-start;
          flex-grow: 0;
          width: 100%;
          margin-bottom: auto;
        }
        #sideNav .navbar-collapse .navbar-nav {
          flex-direction: column;
          width: 100%;
        }
        #sideNav .navbar-collapse .navbar-nav .nav-item {
          display: block;
        }
        #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
          display: block;
        }
      }
      section.resume-section {
        padding-top: 5rem !important;
        padding-bottom: 5rem !important;
        max-width: 75rem;
      }
      section.resume-section .resume-item .resume-date {
        min-width: none;
      }
      @media (min-width: 768px) {
        section.resume-section {
          min-height: 100vh;
        }
        section.resume-section .resume-item .resume-date {
          min-width: 18rem;
        }
      }
      @media (min-width: 992px) {
        section.resume-section {
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }
      }
      .bg-primary {
        background-color: ${theme['gradient-color-2']} !important;
      }
      .text-primary {
        color: ${theme['gradient-color-2']} !important;
      }
      a {
        color: ${theme['theme-color-6']};
      }
      a:active,
      a:focus,
      a:hover {
        color: ${theme['theme-color-5']};
      }
    }
  `
)
