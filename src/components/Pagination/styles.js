import styled, { css } from 'styled-components'

export const Body = styled.div(
  ({theme}) => css`
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
    color: ${theme['text-color']};
  }

  a.is-active {
    background-color:  ${theme['theme-color-1']};
    border-radius: 100%;
    color: #fff;
  }
  `
)