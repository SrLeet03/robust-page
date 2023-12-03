
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from "react-router-dom";

import Paragraph from '../paragraph'
import { scrollTo } from "../../hooks";
import { getFadeUpMotion } from '../../../src/hooks'

import stl from './Footer.module.scss'

const Footer = ({
}) => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getFadeUpMotion(animation, setAnimation)

   const theme = 'vult' ; const isDark = true ;

   const navigate = useNavigate();
   const location = useLocation();
 
  const footerMenu = [
    {
      id: 0,
      name: 'Company',
      subLinks: [
        { name: 'About Robust', link: '/about-us' },
      ],
    },
    {
      id: 1,
      name: 'Products',
      subLinks: [
        {
          // icon: <image src={'/logo.svg'}/>,
          name: 'Health Industry Products',
          link:  '/our-work',
        },
        {
          // icon: <image src={'/logo.svg'}/>,
          name: 'Bots Products',
          link: '/our-work',
        },
      ],
    },
    {
      id: 2,
      name: 'Resources',
      subLinks: [
        {
          name: 'Contact Us',
        },
        {
          name: 'Terms',
          link: '/privacy-policy',
        },
        {
          name: 'Privacy',
          link: '/privacy-policy',
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
              {subLinks.map(({ name, link }, i) => (
                <motion.div
                  key={i}
                  {...motionProps}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                >
                  <Paragraph
                    size="large"
                  >
                    <Link
                      to={link}
                      legacyBehavior
                      href={link}
                      prefetch={false}
                      onClick={() => scrollTo("connect-with-us" , navigate , location)}
                    >
                       {name}
                    </Link>
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
