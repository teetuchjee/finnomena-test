import Axios, { AxiosPromise } from 'axios'
import * as Endpoint from '@/constants'
import { IFund, IQuery } from '@/interfaces'

class FundServices {
  // if available call from client call this
  async getFundsByRange(query: IQuery) {
    const { data } = await (<AxiosPromise<IFund>>Axios({
      url: Endpoint.INTERNAL_FUND_BY_RANGE_ENDPOINT,
      method: 'GET',
      params: query,
    }))
    return data
  }
}

const funds = new FundServices()
export default funds
