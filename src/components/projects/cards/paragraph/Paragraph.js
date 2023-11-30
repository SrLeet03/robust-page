import clsx from 'clsx'

import stl from './Paragraph.module.scss'

const listSizeStyles = {
  small: stl.small,
  medium: stl.medium,
}

const listColorStyles = {
  grey5: stl.grey5,
  blue: stl.blue,
}

const listTextStyle = {
  fontWeight1: stl.fontWeight1,
  fontWeight2: stl.fontWeight2,
}

const Paragraph = ({ children, size, color, fontWeight, testId }) => (
  <span
    className={clsx(
      stl.container,
      listSizeStyles[size],
      listColorStyles[color],
      listTextStyle[fontWeight]
    )}
    data-testid={testId}
  >
    {children}
  </span>
)

export default Paragraph
