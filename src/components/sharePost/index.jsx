import React from 'react'
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import {
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

const shares = [
  {
    type: FacebookShareButton,
    icon: FacebookIcon,
  },
  {
    type: InstapaperShareButton,
    icon: InstapaperIcon,
  },
  {
    type: LinkedinShareButton,
    icon: LinkedinIcon,
  },
  {
    type: PinterestShareButton,
    icon: PinterestIcon,
  },
  ,
  {
    type: RedditShareButton,
    icon: RedditIcon,
  },
  {
    type: TelegramShareButton,
    icon: TelegramIcon,
  },
  {
    type: TumblrShareButton,
    icon: TumblrIcon,
  },
  {
    type: TwitterShareButton,
    icon: TwitterIcon,
  },
  {
    type: WhatsappShareButton,
    icon: WhatsappIcon,
  },
]
const SharePost = ({url}) => {
  return (
    <div>
      {shares.map((share, i) => {
        let Button = share.type
        let Icon = share.icon
          return (
          <Button
            key={`share-${i}`}
            url={url}
            children={<Icon size={32} round={true} />}
          />
        )
      })}
    </div>
  )
}

export default SharePost
