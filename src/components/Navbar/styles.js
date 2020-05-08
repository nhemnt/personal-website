import styled, { css } from 'styled-components'

export const Body = styled.div(
  () => css`
    @media (min-width: 750px) {
      display: none;
    }
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.985);
    border-color: #f0f0f2;
    border-top-style: solid;
    border-top-width: 1px;
    bottom: 0rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
    left: 0rem;

    position: fixed;
    right: 0rem;
    z-index: 5;
    > a {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border-radius: 2px;
      color: #48434f;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      font-size: 0.875rem;
      line-height: 1;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 4rem;
      height: 4rem;
      box-shadow: none;
    }

    > a > svg {
      display: block;
      height: 32px;
      margin-bottom: 0.25rem;
      margin-top: 0rem;
      margin-left: auto;
      margin-right: auto;
    }

    > a .svg-stroke {
      stroke-miterlimit: 10;
      stroke-width: 1.5;
    }

    > a .svg-fill-light {
      fill: #f6edfa;
    }
    > a .svg-stroke-dark {
      stroke: #78757a;
    }
    > a .svg-fill-background {
      fill: #ffffff;
    }
    > a .svg path,
    .css-utwu21 svg line,
    .css-utwu21 svg polygon {
      -webkit-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    > a .svg-fill-dark {
      fill: #78757a;
    }
    > a .svg-fill-accent {
      fill: #d9d7e0;
    }
    > a .svg-stroke-accent {
      stroke: #d9d7e0;
    }
    > a .svg-fill-accent.svg-fill-transparent {
      fill: transparent;
    }
  `
)
