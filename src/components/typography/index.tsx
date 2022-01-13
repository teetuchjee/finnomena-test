import React from 'react'
import styled, { useTheme } from 'styled-components'
import { IColor, IFontSize, IFontWeight } from '@/themes'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  size?: keyof IFontSize
  weight?: keyof IFontWeight
  className?: string
  color?: keyof IColor
  textAlign?: 'left' | 'right' | 'center'
  component?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
}

interface StyledProps {
  size: string
  weight: number
  color: keyof IColor
  textAlign?: 'left' | 'right' | 'center'
}

const Typography: React.FC<Props> = ({
  size,
  weight,
  className,
  children,
  color,
  textAlign,
  component,
  ...restProps
}) => {
  const StyledTypography = styled[`${component}`]<StyledProps>`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    text-align: ${(props) => props.textAlign};
    color: ${(props) => props.theme.color[props.color]};
    &:hover {
      color: ${(props) =>
        props.color === 'hyperlink'
          ? props.theme.color.primary
          : props.theme.color[props.color]};
    }
  `
  const theme = useTheme()
  return (
    <StyledTypography
      className={className}
      size={theme.typography.size[size]}
      weight={theme.typography.weight[weight]}
      color={color}
      textAlign={textAlign}
      {...restProps}
    >
      {children}
    </StyledTypography>
  )
}

Typography.defaultProps = {
  size: 'body',
  weight: 'light',
  color: 'text',
  textAlign: 'left',
  component: 'span',
}

export default React.memo(Typography)
