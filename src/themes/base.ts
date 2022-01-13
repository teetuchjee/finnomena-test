export interface ITheme {
  color: IColor
  typography: ITypography
  icon: IIcon
  border: IBorder
  padding: ISpaceLayout
  margin: ISpaceLayout
}

interface IBorder {
  radius: IBorderRadius
}

interface IBorderRadius {
  round: string
  button: string
  element: string
}

export interface IColor {
  white: string
  black: string
  primary: string
  brown: string
  secondary: string
  tertiary: string
  hyperlink: string
  text: string
  secondaryText: string
  contentBackground: string
  divider: string
  iconText: string
  error: string
  success: string
  warning: string
  info: string
}

export interface ITypography {
  size: IFontSize
  weight: IFontWeight
}

export interface IFontWeight {
  light: number
  regular: number
  bold: number
  medium: number
  semi: number
}

export interface IFontSize {
  subtitle: string
  body: string
  title: string
  banner: string
  description: string
  iconText: string
}

interface IIcon {
  size: IIconSize
  color: IIconColor
}

interface IIconColor {
  default: string
  invert: string
}

interface IIconSize {
  extraSmall: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

interface ISpaceLayout {
  extraSmall: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export const ThemeBase: ITheme = {
  color: {
    primary: '#046a38',
    brown: '#9b6d4c',
    secondary: '#FFB549',
    tertiary: '#4a4a4a',
    hyperlink: '#1890ff',
    white: '#FFFFFF',
    black: '#000000',
    text: '#4A4A4A',
    secondaryText: 'rgba(0,0,0,0.25)',
    contentBackground: '#f0f2f5',
    divider: 'rgba(0,0,0,0.09)',
    iconText: '#b2b2b2',
    error: '#f5222d',
    success: '#6dd400',
    warning: '#ffcd00',
    info: '#91d5ff',
  },
  typography: {
    size: {
      subtitle: '18px',
      body: '16px',
      title: '24px',
      banner: '30px',
      description: '14px',
      iconText: '12px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semi: 600,
      bold: 800,
    },
  },
  icon: {
    size: {
      extraSmall: '16px',
      small: '20px',
      medium: '24px',
      large: '28px',
      extraLarge: '32px',
    },
    color: {
      default: '#000000',
      invert: '#FFFFFF',
    },
  },
  border: {
    radius: {
      round: '100%',
      button: '5%',
      element: '10%',
    },
  },
  padding: {
    extraSmall: '8px',
    small: '16px',
    medium: '24px',
    large: '30px',
    extraLarge: '36px',
  },
  margin: {
    extraSmall: '8px',
    small: '16px',
    medium: '24px',
    large: '30px',
    extraLarge: '36px',
  },
}

export default ThemeBase
