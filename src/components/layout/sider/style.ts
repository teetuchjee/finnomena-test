import styled from 'styled-components'

export const StyleSideMenu = styled.div`
  & {
    background: ${(props) => props.theme.color.white};
    min-height: 100vh;
  }

  .side-menu-logo {
    padding: 18px;
  }

  .ant-menu-inline .ant-menu-selected::after,
  .ant-menu-inline .ant-menu-item-selected::after {
    opacity: 0;
  }

  & .ant-menu-item:hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.primary};
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: 0px;
  }

  .ant-menu-item-selected {
    color: ${(props) => props.theme.color.white};
  }

  .ant-menu-inline .ant-menu-item,
  .ant-menu-inline .ant-menu-submenu-title {
    width: 100%;
  }

  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-vertical-left .ant-menu-submenu-title,
  .ant-menu-vertical-right .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
    height: 56px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 8px 16px;
    overflow: hidden;
    line-height: 40px;
    text-overflow: ellipsis;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${(props) => props.theme.color.primary};
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected a {
    color: ${(props) => props.theme.color.white};
  }
  .ant-menu-item a:hover {
    color: ${(props) => props.theme.color.white};
  }
`
