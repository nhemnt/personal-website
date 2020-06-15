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
    z-index:999;

    .trunk-coffee {
      width: 280px;
      position: fixed;
      z-index: 1030;
      top: 50%;
      right: 60px;
      transform: translate(280px, -50%);
      transition: transform 0.4s ease-out;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .close-coffee{
      position: absolute;
      top: -10px;
      left: 41%;
      background: #00203f;
      height: 25px;
      text-align: center;
      width: 40px;
      color: white;
      border-radius: 204px;
      cursor: pointer;
      }
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