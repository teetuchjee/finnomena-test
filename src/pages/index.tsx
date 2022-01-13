import type { NextPage, GetServerSideProps } from 'next'
import { BaseLayout } from '@/components'
import { ViewHome } from '@/views'
import { IFund } from '@/interfaces'
import { Path } from '@/constants'
import { getFundsByRange } from '@/pages/api/fund'

interface Props {
  fundData: IFund
}

const breadcrumb = [
  { path: Path.HOME, name: 'หน้าแรก' },
  { path: Path.HOME, name: 'กองทุน' },
]
const Home: NextPage<Props> = ({ fundData }) => {
  return (
    <BaseLayout breadcrumb={breadcrumb} defaultSelectedKey="home">
      <ViewHome fundData={fundData} />
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getFundsByRange(query)
  return {
    props: {
      fundData: response,
    },
  }
}

export default Home
