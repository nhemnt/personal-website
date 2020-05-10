import styled, { css } from 'styled-components'

export const StyledCoffee = styled.div(
  () => css`
    @media (max-width: 750px) {
      display: none;
    }
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
  `)

export const Link = styled.a(
  () => css`
  border-radius: 10px;
  color: #e6e6ee;
  background-color: #001f3f;
  line-height: 35px;
  height: 51px;
  min-width: 217px;
  text-decoration: none;
  display: inline-flex;
  border: 1px solid transparent;
  padding: 7px 10px 7px 10px;
  font-size: 22px;
  letter-spacing: .6px;
  margin: 0 auto;
  
  :hover{
    text-decoration: none;
    color: #fff;
  }

 >svg {
    height: 34px;
    width: 35px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
 }
  `
)