import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    width: 366.667px;
    padding: 5% 1%;
    margin: 0px 0%;
    min-height: 184px;
  `
)

export const RecommendationBlock = styled.div(
  ({ theme }) => css`
    box-shadow: 0px 0px 18px 1px #eaeaea;
    padding: 28px 22px 10px;
    border-radius: 30px;
    width: 94%;
    display: inline-block;
    text-align: left;
  `
)

export const Logo = styled.div(
  ({ theme }) => css`
    width: 38%;
    min-height: 50px;
  `
)

export const Img = styled.img(
  ({ theme }) => css`
    display: inline;
    width: auto;
    height: auto;
    max-width: 100%;
  `
)
export const Quote = styled.div(
  ({ theme }) => css`
    float: left;
    margin-left: -14px;
    margin-top: 20px;
    width: 8%;
    margin-bottom: 10px;
  `
)

export const Text = styled.div(
  ({ theme }) => css`
    display: inline-block;
    width: 100%;
    min-height: 220px;
  `
)

export const UserContainer = styled.a(
  ({ theme }) => css`
    display: inline-block;
    width: 100%;
    cursor: pointer
    margin-top: 15px;
  `
)

export const UserImage = styled.div(
  ({ theme }) => css`
    float: left;
    margin-right: 15px;
  `
)

export const UserDetail = styled.h6(
  ({ theme }) => css`
    color: #999898;
    font-weight: 500;
    fontsize: 12px;
    margin-top: 4px;
  `
)
