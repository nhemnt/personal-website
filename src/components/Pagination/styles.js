import styled, { css } from 'styled-components'

export const Body = styled.div(
  () => css`
  padding: 30px 0;
  text-align: center;
  li {
    list-style: none;
  }
  a{
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    text-align: center;
    display: inline-block;
    color: #222;
  }

  a.is-active {
    background-color: #2ecc71;
    border-radius: 100%;
    color: #fff;
  }
  `
)