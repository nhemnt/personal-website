import styled, { css } from 'styled-components'

export const Header = styled.header(
  ({ theme }) => css`
    margin-bottom: 50px;
    background: no-repeat center center;
    background-color: #868e96;
    background-attachment: scroll;
    position: relative;
    background-size: cover;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${theme['text-color']};;
      opacity: 0.5;
    }

    .page-heading,
    .post-heading,
    .site-heading {
      padding: 200px 0 150px;
      color: #fff;
    }

    @media only screen and (min-width: 768px) {
      .page-heading,
      .post-heading,
      .site-heading {
        padding: 200px 0;
      }
    }

    .page-heading,
    .site-heading {
      text-align: center;
    }

    .page-heading h1,
    .site-heading h1 {
      font-size: 50px;
      margin-top: 0;
    }

    .page-heading .subheading,
    .site-heading .subheading {
      font-size: 24px;
      font-weight: 300;
      line-height: 1.1;
      display: block;
      margin: 10px 0 0;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    @media only screen and (min-width: 768px) {
      .page-heading h1,
      .site-heading h1 {
        font-size: 80px;
      }
    }

    .post-heading h1 {
      font-size: 35px;
    }

    .post-heading .meta,
    .post-heading .subheading {
      line-height: 1.1;
      display: block;
    }

    .post-heading .subheading {
      font-size: 24px;
      font-weight: 600;
      margin: 10px 0 30px;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .post-heading .meta {
      font-size: 20px;
      font-weight: 300;
      font-style: italic;
      font-family: Lora, 'Times New Roman', serif;
    }

    .post-heading .meta a {
      color: #fff;
    }

    @media only screen and (min-width: 768px) {
      .post-heading h1 {
        font-size: 55px;
      }
      .post-heading .subheading {
        font-size: 30px;
      }
    }
  `
)

export const Blog = styled.div(
  ({theme}) => css`
    font-size: 20px;
    color: ${theme['text-color']};;
    font-family: Lora, 'Times New Roman', serif;

    p {
      line-height: 1.5;
      color: ${theme['text-color']};;
      margin: 30px 0;
    }

    p a {
      text-decoration: underline;
    }
    h1 {
      font-weight: 800;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme['text-color']};;
      font-weight: 800;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    a {
      color: ${theme['text-color']};;
      transition: all 0.2s;
    }

    a:focus,
    a:hover {
      color: #0085a1;
    }

    blockquote {
      font-style: italic;
      color: #868e96;
    }

    .section-heading {
      font-size: 36px;
      font-weight: 700;
      margin-top: 60px;
    }

    .caption {
      font-size: 14px;
      font-style: italic;
      display: block;
      margin: 0;
      padding: 10px;
      text-align: center;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    ::-moz-selection {
      color: #fff;
      background: #0085a1;
      text-shadow: none;
    }

    ::selection {
      color: #fff;
      background: #0085a1;
      text-shadow: none;
    }

    img::-moz-selection {
      color: #fff;
      background: 0 0;
    }

    img::selection {
      color: #fff;
      background: 0 0;
    }

    img::-moz-selection {
      color: #fff;
      background: 0 0;
    }
    .btn {
      font-size: 14px;
      font-weight: 800;
      padding: 15px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 0;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .btn-primary {
      background-color: #0085a1;
      border-color: #0085a1;
    }

    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:hover {
      color: #fff;
      background-color: #00657b !important;
      border-color: #00657b !important;
    }
    .btn-lg {
      font-size: 16px;
      padding: 25px 35px;
    }
  `
)

export const ReadingTime = styled.span(
  () => css`
    color: #5f5f5f;
    font-size: 16px;
  `
)
