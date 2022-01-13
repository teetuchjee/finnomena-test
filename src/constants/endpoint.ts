import { IQuery } from '@/interfaces'

const API_URL = 'http://localhost:3000'

export const INTERNAL_FUND_BY_RANGE_ENDPOINT = `${API_URL}/api/fund`

export const FUND_LIST_BY_RANGE_ENDPOINT = (query: IQuery) => {
  const period = query?.period ? query.period : '1Y'
  return `https://storage.googleapis.com/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking-${period}.json`
}
