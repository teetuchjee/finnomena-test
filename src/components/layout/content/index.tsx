import { ArrowLeftOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { StyleLayoutContent } from './style'

interface Props {
  breadcrumb: PropsBreadCrumb[]
}

interface PropsBreadCrumb {
  path: string
  name: string
}

const LayoutContent: React.FC<Props> = ({ children, breadcrumb }) => {
  const router = useRouter()
  return (
    <StyleLayoutContent>
      <div className="grid-breadcrumb-menu">
        <div>
          <ArrowLeftOutlined onClick={() => router.back()} />
        </div>
        <div>
          <Breadcrumb>
            {breadcrumb.slice(1).map((item, key) => (
              <Breadcrumb.Item key={key}>
                {key === breadcrumb.length - 2 ? (
                  item.name
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
      <div className="content-display">{children}</div>
    </StyleLayoutContent>
  )
}

LayoutContent.defaultProps = {
  breadcrumb: [
    {
      path: '/',
      name: 'Home',
    },
  ],
}

export default LayoutContent
