
import { useState } from 'react'
// import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
// import {Paragraph} from '@mui/material'
import Paragraph from '../paragraph'

import { getFadeUpMotion } from '../../../src/hooks'
import stl from './Footer.module.scss'

const Footer = ({
}) => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getFadeUpMotion(animation, setAnimation)

   const theme = 'vult' ; const isDark = true ;
   

  const footerMenu = [
    {
      id: 0,
      name: 'company',
      subLinks: [
        { name: 'About Robust', link: '/' },
      ],
    },
    {
      id: 1,
      name: 'products',
      subLinks: [
        {
          icon: <image src={'/logo.svg'}/>,
          name: 'Health Industry Products',
          link: theme === 'atlus' ? '/' : '/',
        },
        {
          icon: <image src={'/logo.svg'}/>,
          name: 'Bots Products',
          link: theme === 'atlus' ? '/' : '/',
        },
      ],
    },
    {
      id: 3,
      name: 'resources',
      subLinks: [
        {
          name: 'testimonials',
          link: '/',
        },
        {
          name: 'support',
          link:
            '',
          target: '_blank',
        },
        {
          name: 'terms',
          link: '/',
        },
        {
          name: 'privacy',
          link: '/',
        },
      ],
    },
  ]

  const checkUrlForTarget = url => {
    return url === '/' ? '' : '_blank'
  }

  const ScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer
      className={clsx(
        stl.container,
      )}
      data-testid="footer"
    >
      <motion.div {...motionProps} className={stl.heading}>
        <div className={stl.logo} data-testid="footerLogo">
          {/* {isDark || theme === 'chimney' ? {Logo} : {Logo}} */}
        </div>
        <Paragraph
          size="medium"
          color={isDark || theme === 'chimney' ? 'grey1' : 'grey5'}
          testId="footerInfo"
        >
          Empowering businesses through cutting-edge SaaS technology.
        </Paragraph>
      </motion.div>
      <div className={stl.menu}>
        {footerMenu.map(({ id, name, subLinks }) => (
          <div
            key={id}
            className={stl.menuItem}
            data-testid={`${name?.toLowerCase()}_links`}
          >
            <div
              className={clsx(
                stl.menuTitle,
                isDark || (theme === 'chimney' && stl.grey1)
              )}
            >
              {name}
            </div>
            <div className={stl.subMenu}>
              {subLinks.map(({ name, icon, link = '/' }, i) => (
                <motion.div
                  key={i}
                  {...motionProps}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                >
                  <Paragraph
                    size="large"
                    color={isDark || theme === 'chimney' ? 'grey1' : 'grey5'}
                  >
                    {/* <Link
                      legacyBehavior
                      href={link}
                      prefetch={false}
                      onClick={ScrollToTop}
                    >
                      <a
                        target={checkUrlForTarget(link, theme)}
                        rel="noreferrer"
                      >
                        {icon} {name}
                      </a>
                    </Link> */}
                  </Paragraph>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
