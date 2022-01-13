import { Typography } from 'antd'
import styled from 'styled-components'

interface StyledContainerProps {
  minHeight?: number
}

export const StyledContainer = styled.section<StyledContainerProps>`
  padding-left: ${(props) => props.theme.padding.medium};
  padding-right: ${(props) => props.theme.padding.medium};
  padding-top: ${(props) => props.theme.padding.large};
  padding-bottom: ${(props) => props.theme.padding.large};
  margin-bottom: ${(props) => props.theme.padding.small};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 2px;
  min-height: ${(props) =>
    props.minHeight ? `${props.minHeight}px` : 'unset'};
`

export const StyledBoxTitle = styled(Typography.Title)`
  padding-bottom: ${(props) => props.theme.padding.small};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.color.divider};
  margin-bottom: 0px !important;
`

export const StyledOptionsTitle = styled.div`
  margin-left: auto;
`

export const StyleSectionTitle = styled.div`
  display: flex;
`
