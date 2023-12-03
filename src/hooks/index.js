'use client'
import { useState, useEffect, useCallback } from 'react'

import { useAnimation, useCycle } from 'framer-motion'

export const useAnimatedNavToggler = () => {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const [x, cycleX] = useCycle('0%', '150%')
  const animation = useAnimation()

  const toggleNavbar = () => {
    setShowNavLinks(prevState => !prevState)
    animation.start({ x, display: 'block' })
    cycleX()
  }

  return { showNavLinks, animation, toggleNavbar }
}

export const getFadeUpMotion = (animation, setAnimation) => ({
    onViewportEnter: () => setAnimation(true),
    initial: { translateY: '100%', opacity: 0 },
    animate: {
      translateY: animation ? 0 : '100%',
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay: 0.1 },
  })
  
export const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return windowWidth
}

export const scrollTo = (id , navigate , location) => {
  console.log(location.pathname)
  if (location.pathname !== "/") {
    navigate("/");
  }
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, 0);
};
