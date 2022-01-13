import { InfoIcon } from '@/assets/icons'
import { MENU_KEY, SUB_MENU, Path } from '@/constants'
import { Typography } from '@/components'
import Icon from '@ant-design/icons'
import { Menu } from 'antd'
import Link from 'next/link'
import { StyleSideMenu } from './style'

interface Props {
  defaultOpenKey?: keyof typeof SUB_MENU
  defaultSelectedKey: keyof typeof MENU_KEY
}

const SideMenu: React.FC<Props> = ({ defaultOpenKey, defaultSelectedKey }) => {
  return (
    <StyleSideMenu>
      <div className="side-menu-logo">
        <Typography color="primary" size="subtitle" weight="bold">Funding</Typography>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[MENU_KEY[defaultSelectedKey]]}
        defaultOpenKeys={[SUB_MENU[defaultOpenKey]]}
      >
        <Menu.Item icon={<Icon component={InfoIcon} />} key={MENU_KEY.home}>
          <Link href={Path.HOME}>กองทุน</Link>
        </Menu.Item>
      </Menu>
    </StyleSideMenu>
  )
}

export default SideMenu
