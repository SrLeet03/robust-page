import clsx from 'clsx'

import stl from './Paragraph.module.scss'

const listSizeStyles = {
  small: stl.small,
  extraSmall: stl.extraSmall,
  medium: stl.medium,
  large: stl.large,
}

const listColorStyles = {
  light: stl.light,
  dark: stl.dark,
  grey1: stl.grey1,
  grey2: stl.grey2,
  grey5: stl.grey5,
  grey6: stl.grey6,
  grey7: stl.grey7,
  pink1: stl.pink1,
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
