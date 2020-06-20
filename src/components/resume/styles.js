 /*!
 * Start Bootstrap - Resume v5.0.8 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
import styled, { css } from 'styled-components'

export const StyledResume = styled.div(
  ({theme}) => css`
  
@media (max-width: 990px) {
    
    padding-top: 0px !important;
    > nav {
      display: none;
    }
  }
  @media (min-width: 992px) {
  
      padding-top: 0;
      padding-left: 17rem;
  }
  @media (max-width: 992px) {
      .title {
        font-size: 4rem;
      }
  }
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

`)
