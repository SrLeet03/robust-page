import { useState, useEffect } from 'react'
// import Image from 'next/legacy/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { getFadeUpMotion } from '../../../src/hooks'

import stl from './HighRes.module.scss'

const HighRes = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getFadeUpMotion(animation, setAnimation)

  useEffect(() => {
    setTimeout(() => {
      const containerElm = document.getElementById('frame')
      const video = document.getElementById('highResVid')

      const promise = video.play()
      if (promise !== undefined)
        promise.catch(() =>
          setTimeout(() => (containerElm.innerHTML = video.outerHTML), 10)
        )
    }, 10)
  }, [])

  return (
    <section className={clsx(stl.main)} data-testid="highResSection">
      <div className={clsx(stl.container)}>
        <div className={stl.ellipseContainer}>
          <div className={stl.ellipseTop} />
          <div className={stl.ellipseBottom} />
        </div>

        <div className={stl.textContainer}>
          <motion.h2 {...motionProps} data-testid="highResTitle">
          High performance and quality softwares
          </motion.h2>
          <div className={stl.desc}>
            <motion.p
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-testid="highResDesc"
            >
             Robust Software  {'    '}
             {/* enables cutomers to
             experience product and services */}
            </motion.p>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ol>
                <li>Empowering businesses through cutting-edge SaaS technology.</li>
                <li>Experience seamless integration with our SaaS solutions, ensuring a smooth and efficient workflow 
                  across your entire business ecosystem</li>
                <li>Unlock the power of data with advanced analytics tools, 
                  providing valuable insights to drive informed decision-making and enhance overall 
                  performance.</li>
              </ol>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={stl.frame} id="frame">
        {/* <Image src={showcase} alt="showcase" layout="fill" priority /> */}
        <image src={'/showcase.png'} alt="showcase" layout="fill" priority />
        <video
          id="highResVid"
          src="high-res.mp4"
          poster="mountain-night.jpg"
          playsInline
          loop
          muted
          preload="metadata"
          autoPlay
        />
      </div>
    </section>
  )
}

export default HighRes
