import styled, { css } from 'styled-components'

export const VerticalCenter = styled.section(
  () => css`
    min-height: 100%; /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */

    display: flex;
    align-items: center;
  `
)

export const StyledIntro = styled.div(
  () => css`
    color: #2b5165;
    font-size: 20px;
    line-height: 30px;
  `
)

export const Hello = styled.span(
  () => css`
    animation: shake 1.5s;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    display: inline-block;
    margin-left: 8px;

    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-10deg);
      }
      20% {
        transform: rotate(12deg);
      }
      30% {
        transform: rotate(-10deg);
      }
      40% {
        transform: rotate(9deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `
)

export const Title = styled.div(
  () => css`
    h1 {
      font-weight: 800;
      color: #9da6ca;
      text-shadow: 2px 2px #d0d0d0;
    }
  `
)

export const SocialIcon = styled.div(
  () => css`
    a,
    svg {
      display: inline-block;
      height: 3.5rem;
      width: 3.5rem;
      background-color: #104978;
      color: #fff !important;
      border-radius: 100%;
      text-align: center;
      font-size: 1.5rem;
      line-height: 3.5rem;
      margin-right: 1rem;
      margin-top: 10px;
    }
    a:last-child {
      margin-right: 0;
    }

    a:hover {
      background-color: #3582b2;
    }

    .fadeIn {
      -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 2s; /* Firefox < 16 */
      -ms-animation: fadein 2s; /* Internet Explorer */
      -o-animation: fadein 2s; /* Opera < 12.1 */
      animation: fadein 2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
)