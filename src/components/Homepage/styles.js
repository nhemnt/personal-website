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
    @media (max-width: 990px) {
      margin-top: 20px;
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

    @media (max-width: 990px) {
      a,
      svg {
        display: inline-block;
        height: 3rem;
        width: 3rem;
        line-height: 3rem;
        margin-right: 0.5rem;
      }
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

export const TimelineSection = styled.section(
  () => css`
    color: #2b5165;
    margin-bottom: 20px;
    @media (min-width: 990px) {
      .vertical-timeline-element-date {
        color: #2b5165 !important;
      }
    }
  `
)

export const ProjectSection = styled.section(
  () => css`
    color: #2b5165;
    margin-top: 30px;
    margin-bottom: 20px;
    h2 {
      margin: 20px 0
    }
    .item-card {
      transition: 0.5s;
      cursor: pointer;
    }
    .item-card-title {
      transition: 1s;
      cursor: pointer;
    }
   
    .card-img {
      height: 200px;
    }

    --lh: 1.4rem;
    .truncate-overflow {
      --max-lines: 3;
      position: relative;
      max-height: calc(var(--lh) * var(--max-lines));
      overflow: hidden;
    }
    .truncate-overflow:hover {
      max-height: inherit;
    }
    .truncate-overflow:hover::after {
      content: '';
    }
    .truncate-overflow::before {
      position: absolute;
      content: '...';
      bottom: -4px;
      right: 0;
    }
    .truncate-overflow::after {
      content: '';
      position: absolute;
      right: 0;
      width: 1rem;
      height: 1rem;
      background: white;
    }

    a {
      background: #104978;
      color: #fff;
    }
    a:hover {
      color: #fff;
    }
  `
)
