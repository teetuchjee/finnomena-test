import { NextApiRequest, NextApiResponse } from 'next'
import { AxiosPromise } from 'axios'
import nc from 'next-connect'
import { http } from '@/libs/axios'
import * as Endpoint from '@/constants'
import { FilterYearsEnum } from '@/constants'
import { IQuery, IPeriod, IFundData, IFundAPIResponse } from '@/interfaces'
import { onError } from '../_middleware'

export async function getFundsByRange(query: IQuery) {
  const { data } = await (<AxiosPromise<IFundAPIResponse>>http.request({
    url: Endpoint.FUND_LIST_BY_RANGE_ENDPOINT(query),
    method: 'GET',
  }))
  const page = query?.page ? query.page : 1
  const pageSize = query?.size ? query.size : 10
  const period = query?.period ? query.period : FilterYearsEnum['1Y']
  return pagination(data.data, page, pageSize, FilterYearsEnum[String(period)])
}

function pagination(
  data: IFundData[],
  page: number,
  page_size: number,
  period: IPeriod
) {
  const from = (page - 1) * page_size + 1
  const to = page * page_size
  const lastPage = Math.ceil(data.length / page_size)
  return {
    pagination: {
      total: data.length,
      page_size: Number(page_size),
      page: Number(page),
      last_page: lastPage,
      from: from,
      to: to,
      page_total: lastPage,
    },
    period: period,
    data: data.slice(from - 1, to),
  }
}

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const query = req.query
    const response = await getFundsByRange(query)
    res.status(200).send(response)
  }
)

export default handler
