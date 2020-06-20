import { createGlobalStyle, css  } from 'styled-components'
const themeColorPurple = '#922c88'
const themeColorBlue = '#145388'
const themeColorGreen = '#576a3d'
const themeColorOrange = '#e2863b'
const themeColorRed = '#880a1f'

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    html {
      width: 100%;
      height: 100%;
      background: ${theme['background-color']};
    }

    h3 a {
      color: ${theme['theme-color-1']};
    }

    body {
      background: ${theme['background-color']};
    }
    .theme-colors {
      width: 280px;
      position: fixed;
      z-index: 1030;
      top: 50%;
      right: 0;
      background: ${theme['foreground-color']};
      transform: translate(280px, -50%);
      transition: transform 0.4s ease-out;
      padding-top: 10px;
      padding-bottom: 10px;

      .theme-button {
        position: absolute;
        left: -34px;
        background: ${theme['foreground-color']};
        padding: 13px 7px 13px 7px;
        border-radius: 0.2rem;
        color: ${theme['gradient-color-2']};
        box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.04);
        font-size: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: ${theme['theme-color-1']};

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .theme-color {
        width: 24px;
        height: 24px;
        display: inline-block;
        border-radius: 20px;
        transition: background 0.25s;

        &.active,
        &:hover {
          background: ${theme['foreground-color']};
        }
        span {
          display: none;
        }
      }

      .theme-color-purple {
        border: 3px solid ${themeColorPurple};
        background: ${themeColorPurple};
      }

      .theme-color-blue {
        border: 3px solid ${themeColorBlue};
        background: ${themeColorBlue};
      }

      .theme-color-orange {
        border: 3px solid ${themeColorOrange};
        background: ${themeColorOrange};
      }

      .theme-color-green {
        border: 3px solid ${themeColorGreen};
        background: ${themeColorGreen};
      }

      .theme-color-red {
        border: 3px solid ${themeColorRed};
        background: ${themeColorRed};
      }

      &.shown {
        transform: translate(0, -50%);
      }
    }
  `
)
