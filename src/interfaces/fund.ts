import { FilterYearsEnum } from '@/constants'

export type IFundAPIResponse = {
  status: boolean
  error: string
  data: IFundData[]
}

export type IFund = {
  data: IFundData[]
  pagination: IPaginate
  period: IPeriod
}

export type IFundData = {
  mstar_id: string
  thailand_fund_code: string
  nav_return: number
  nav: number
  nav_date: string
  avg_return: number
}

export type IPaginate = {
  from: number
  to: number
  page: number
  page_size: number
  total: number
  last_page: number
  page_total: number
}

export type IPeriod = {
  period: keyof FilterYearsEnum
}

export type IQuery = {
  page?: number
  size?: number
  period?: IPeriod
}
