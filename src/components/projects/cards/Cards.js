import clsx from 'clsx'

import { FaGithub } from 'react-icons/fa'; 
import ArrowLinkIcon from './arrow-link.svg'

import Paragraph from './paragraph'
import Heading from './heading'

import stl from './Cards.module.scss'

const Cards = ({ theme = 'vult', customClass }) => {
  const defaultCards = [
    {
      link: 'https://github.com/SrLeet03/EthCrowdFunding',
      description: 'CryptoFund is a decentralized crowdfunding platform built on blockchain technology, providing a new and innovative way to raise funds for causes that matter. With CryptoFund, fundraisers can create campaigns for a variety of reasons, including health, education, social services, and creativity. The platform offers increased autonomy to donors.',
      title: 'CryptoFund',
      tags:  (<div className={stl.tags}>
      <span className={stl.blockchain}>BLOCKCHAIN</span>
      <span className={stl.golang}>GOLANG</span>
      <span className={stl.js}>JAVASCRIPT</span>
    </div>)
    },
    {
        link: 'https://github.com/SrLeet03/Telegram-VaccineAlertBot',
        description: 'It uses the Telegram API, Google Maps API, and Cowin API to provide accurate and up-to-date information. Built with Python and hosted on Heroku, its open-source and available on GitHub.',
        title: 'Telegram-VaccineAlertBot',
        tags:  (<div className={stl.tags}>
        <span className={stl.golang}>PYTHON</span>
      </div>)
      },
  ]

  return (
    <div className={clsx(stl.cards, stl[`${theme}Theme`], customClass)}>
      {(defaultCards).map(({ link, tags, title, description }, i) => (
        <a
          href={link}
          target="_blank"
          className={stl.card}
          key={i}
          rel="noopener noreferrer"
          data-testid="docLinkCard"
        >
          <div className={stl.cardIconWrapper}>
          <FaGithub  className={stl.gitIcon} />
            {<img src={ArrowLinkIcon}/>}
          </div>
          <Heading type="h5" color="dark">
            {title}
          </Heading>
          <Paragraph size="medium" color="grey5">
            {description}
          </Paragraph>
          {tags}
        </a>
      ))}
    </div>
  )
}

export default Cards
