import { MENU_KEY, SUB_MENU } from '@/constants'
import { Layout } from 'antd'
import Head from 'next/head'
import React, { Fragment } from 'react'
import LayoutContent from './content'
import HeaderMenu from './header'
import SideMenu from './sider'
import { StyleSider } from './style'

interface Props {
  breadcrumb?: PropsBreadCrumb[]
  defaultOpenKey?: keyof typeof SUB_MENU
  defaultSelectedKey: keyof typeof MENU_KEY
  title?: string
}

interface PropsBreadCrumb {
  path: string
  name: string
}

const BaseLayout: React.FC<Props> = ({
  children,
  breadcrumb,
  defaultOpenKey,
  defaultSelectedKey,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{'Finomena test'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout style={{ height: '100vh' }}>
        <StyleSider>
          <Layout.Sider breakpoint={'lg'} collapsedWidth={0} width={250}>
            <SideMenu
              defaultOpenKey={defaultOpenKey}
              defaultSelectedKey={defaultSelectedKey}
            />
          </Layout.Sider>
        </StyleSider>
        <Layout style={{ maxHeight: '100vh', overflow: 'auto' }}>
          <Layout.Header style={{ background: '#fff' }}>
            <HeaderMenu />
          </Layout.Header>
          <Layout.Content>
            <LayoutContent breadcrumb={breadcrumb}>{children}</LayoutContent>
          </Layout.Content>
        </Layout>
      </Layout>
    </Fragment>
  )
}

BaseLayout.defaultProps = {
  title: 'Shipping',
}
export default BaseLayout
