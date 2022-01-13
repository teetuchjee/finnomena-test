import { Space, Avatar } from 'antd'
import { useTheme } from 'styled-components'
import { useFund } from '@/hooks'
import { IFund, IPeriod } from '@/interfaces'
import { FITER_RANGE, FilterYearsEnum } from '@/constants'
import { ContentBox, Typography } from '@/components'
import FundTable from './table'

interface Props {
  fundData: IFund
}

const ViewHome: React.FC<Props> = ({ fundData }) => {
  const theme = useTheme()
  const { fundList, period, page, page_size, page_total, handleGetFundList } =
    useFund({
      initialValue: {
        fundList: fundData?.data,
        paginate: fundData?.pagination,
        period: fundData?.period,
      },
    })

  const handleFilter = (period: IPeriod) => {
    handleGetFundList({ page, size: page_size, period })
  }

  const handlePageChange = (page: number, size: number) => {
    handleGetFundList({ page, size, period })
  }

  return (
    <ContentBox title="ข้อมูลกองทุน">
      <Space size="middle" wrap style={{ marginBottom: theme.margin.medium }}>
        {FITER_RANGE.map((item, i) => {
          const isSelected = item === FilterYearsEnum[String(period)]
          return (
            <Avatar
              key={i}
              style={{
                backgroundColor: isSelected
                  ? theme.color.warning
                  : theme.color.white,
              }}
            >
              <Typography
                id={item}
                className="cursor-pointer"
                onClick={() => handleFilter(FilterYearsEnum[item])}
              >
                {item}
              </Typography>
            </Avatar>
          )
        })}
        <Typography></Typography>
      </Space>
      <FundTable
        page={page}
        pageSize={page_size}
        pageTotal={page_total}
        fundList={fundList}
        handlePageChange={handlePageChange}
      />
    </ContentBox>
  )
}

export default ViewHome
