import clsx from 'clsx'

import styles from './Heading.module.scss'

const listHeadingStyles = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
}

const listColorStyles = {
  light: styles.light,
  dark: styles.dark,
}

const Heading = ({ children, type, color, testId }) => (
  <span
    className={clsx(
      styles.container,
      listHeadingStyles[type],
      listColorStyles[color]
    )}
  >
    {children}
  </span>
)

export default Heading
