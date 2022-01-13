import { ThemeBase } from '@/themes'
import styled from 'styled-components'

export const StyleLayoutContent = styled.div`
  .grid-breadcrumb-menu {
    padding: ${ThemeBase.padding.medium};
    display: flex;
    color: rgba(0, 0, 0, 0.25);
  }

  .grid-breadcrumb-menu div :nth-last-child(2) {
    margin-right: 8px;
  }

  .grid-breadcrumb-menu div :nth-last-child(1) span,
  .grid-breadcrumb-menu div :nth-last-child(1) a {
    color: rgba(0, 0, 0, 0.25);
  }

  .content-display {
    padding-left: ${ThemeBase.padding.medium};
    padding-right: ${ThemeBase.padding.medium};
  }

  padding-bottom: ${(props) => props.theme.padding.extraLarge};
`
