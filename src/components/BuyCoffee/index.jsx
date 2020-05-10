import React from 'react'
import { StyledCoffee, Link } from './styles'
const buymeacoffeeUrl = 'https://www.buymeacoffee.com/codelutto'
const BuyCoffee = () => {
  return (
    <StyledCoffee>
      <Link href={buymeacoffeeUrl} target="_blank">
        <CofeeIcon />
        <span>{'  '}Buy me a coffee</span>
      </Link>
    </StyledCoffee>
  )
}

const CofeeIcon = (width= 33, height= 48 ) => (
  <svg
    className="svg-w"
    width={width}
    height={height}
    viewBox="0 0 33 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4451 10.0694L4.47266 9.99765L10.352 46.9467H11.6347H23.3933H24.6761L30.5554 9.99765L16.4451 10.0694Z"
      fill="#FF9100"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4451 10.0694L4.47266 9.99765L10.352 46.9467H11.6347H20.4002H21.683L27.5623 9.99765L16.4451 10.0694Z"
      fill="#FFDD00"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.05469 9.99768H31.9478V6.59027H1.05469V9.99768Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.05469 9.99768H31.9478V6.59027H1.05469V9.99768Z"
      stroke="black"
      strokeWidth="1.55172"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.9613 1.05325H18.5855H14.2027H6.82686L4.58203 6.16436H14.2027H18.5855H28.2062L25.9613 1.05325Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.9574 1.05325H18.5816H14.1988H6.82295L4.57812 6.16436H14.1988H18.5816H28.2023L25.9574 1.05325Z"
      stroke="#050505"
      strokeWidth="1.55172"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4463 10.0694L2.33594 9.99765L8.21525 46.9467H9.49801H23.3946H24.6773L30.5566 9.99765L16.4463 10.0694Z"
      stroke="black"
      strokeWidth="1.55172"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.9835 20.4329H16.8987H15.8856H1.80078L4.43535 35.1273L16.3922 34.9992L28.349 35.1273L30.9835 20.4329Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.9835 20.4329H16.8987H15.8856H1.80078L4.43535 35.1273L16.3922 34.9992L28.349 35.1273L30.9835 20.4329Z"
      stroke="black"
      strokeWidth="1.55172"
    />
  </svg>
)

export default BuyCoffee
