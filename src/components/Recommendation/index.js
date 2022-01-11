import React, { useState } from 'react'
import {
  Container,
  RecommendationBlock,
  Logo,
  Img,
  Quote,
  Text,
  UserContainer,
  UserImage,
  UserDetail,
} from './styles'
import QuoteSvg from './quote-svgrepo-com.svg'

const minLength = 500
const sliceStr = (str) => {
  return str.length > minLength ? str.slice(0, minLength) + ' ...' : str
}
const Recommendation = ({ recommendation }) => {
  const { name, subHeading, text, avatar, url, socialImage, social } =
    recommendation
  const isTruncate = text.length > minLength
  const [showMoreButton, setShowMoreButton] = useState(isTruncate)
  const [textShown, setTextShown] = useState(sliceStr(text))
  const toggleTextShown = () => {
    setShowMoreButton((val) => !val)
  }
  // useEffect(() => {
  //   setShowMoreButton(text.length < minLength)
  // }, [textShown])
  return (
    <Container>
      <RecommendationBlock>
        <Logo>
          <a>
            <Img
              class="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              src={socialImage}
              alt={social}
              width={125}
              height={50}
            />
          </a>
        </Logo>
        <Quote>
          <img src={QuoteSvg} alt="" width={36} height={23} />
        </Quote>
        <Text>
          <p>
            {showMoreButton ? textShown : text}
            {isTruncate && (
              <span
                onClick={toggleTextShown}
                style={{ cursor: 'pointer', color: 'grey', marginLeft: '10px' }}
              >
                See {showMoreButton ? 'More' : 'Less'}
              </span>
            )}
          </p>
        </Text>
        <UserContainer href={url} target="_blank">
          <UserImage>
            <img
              src={avatar}
              style={{ borderRadius: '50%' }}
              alt=""
              width={54}
              height={54}
            />
          </UserImage>
          <div>
            <h5>{name}</h5>
            <UserDetail>{subHeading}</UserDetail>
          </div>
        </UserContainer>
      </RecommendationBlock>
    </Container>
  )
}

export default Recommendation
