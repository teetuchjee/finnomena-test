import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Path } from '@/constants'
import { IQuery } from '@/interfaces'
import { IFundData, IPaginate, IPeriod } from '@/interfaces'

interface Props {
  initialValue?: {
    fundList: IFundData[]
    paginate: IPaginate
    period: IPeriod
  }
}

const useFund = ({ initialValue }: Props) => {
  const router = useRouter()
  const [fundList, setFundList] = useState<IFundData[]>(
    initialValue?.fundList ?? []
  )
  const [paginate, setPaginate] = useState<IPaginate>(initialValue?.paginate)
  const [period, setPeriod] = useState<IPeriod>(initialValue?.period)

  useEffect(() => {
    setFundList(initialValue?.fundList)
    setPaginate(initialValue?.paginate)
    setPeriod(initialValue?.period)
  }, [initialValue])

  const handleGetFundList = (query: IQuery) => {
    const { page, size, period } = query
    router.push({
      pathname: Path.HOME,
      query: {
        page,
        size,
        period: String(period),
      },
    })
  }

  const { page, page_size, page_total } = paginate

  return {
    fundList,
    setFundList,
    page,
    page_size,
    page_total,
    period,
    setPeriod,
    handleGetFundList,
  }
}

export default useFund
