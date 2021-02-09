import styled, { css } from 'styled-components'

export const Header = styled.header(
  ({ theme: {} }) => css`
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
      background-color: #212529;
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
        font-weight: 800;
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
  ({ theme }) => css`
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 800;
      color: ${theme['theme-color-1']};
    }

    a,li {
      color: ${theme['theme-color-3']};
      transition: all 0.2s;
    }

    a:focus, li:focus,
    a:hover, li:hover {
      color: ${theme['theme-color-2']};
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
  `
)

export const ReadingTime = styled.span(
  () => css`
    margin-left: 5px;
  `
)

export const BlogPost = styled.div(
  ({theme}) => css`
    box-shadow: 0px 0px 25px ${theme['separator-color']};
    background:  ${theme['background-color']};
    border-radius: 15px;
    margin-bottom: 60px;
  `
)

export const PostDetailList = styled.ul(
  () => css`
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      margin-right: 3px;
    }
  `
)

export const PostHeading = styled.h4(
  () => css`
    margin-top: 10px;
    line-height: 28px;
    text-transform: capitalize;
  `
)

export const PostDetail = styled.p(
  () => css`
    border-top: 1px solid #eeeeee;
    padding-top: 20px;
    font-size: 14px;
    color: #716f85;
  `
)

export const ContinueButton = styled.button(
  ({theme}) => css`
    display: inline-block;
    text-align: center;
    color: #ffffff;
    background-color:  ${theme['theme-color-1']};
    font-size: 14px;
    font-weight: 400;
    padding: 13px 35px;
    border-radius: 25px;
    letter-spacing: 0.15px;
    border: 0;
  `
)
