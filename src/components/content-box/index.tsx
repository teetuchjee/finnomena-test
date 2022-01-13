import React, { Fragment } from 'react'
import { Divider } from 'antd'
import { Typography } from '@/components'
import { StyledContainer, StyledOptionsTitle, StyleSectionTitle } from './style'

interface Props {
  title?: React.ReactNode
  children: React.ReactNode
  rightOptions?: React.ReactNode
  minHeight?: number
}

const ContentBox = ({ title, children, minHeight, rightOptions }: Props) => {
  return (
    <StyledContainer minHeight={minHeight}>
      {title && (
        <Fragment>
          <StyleSectionTitle>
            <Typography color="black" size="title">
              {title}
            </Typography>
            <StyledOptionsTitle> {rightOptions} </StyledOptionsTitle>
          </StyleSectionTitle>
          <Divider className="bg-gray-500"/>
        </Fragment>
      )}

      {children}
    </StyledContainer>
  )
}

export default ContentBox
