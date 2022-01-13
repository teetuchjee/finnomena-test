import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { ErrorHandler } from 'next-connect'

export declare type MiddlewareFunction<
  REQ extends NextApiRequest = NextApiRequest,
  T = unknown
> = (
  req: REQ,
  res: NextApiResponse<T>,
  next: (res?: unknown) => void
) => void | Promise<void>

export const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err: Record<string, any>,
  _req: NextApiRequest,
  res: NextApiResponse,
  _next: NextApiHandler
) => {
  console.error('error caught in middleware', err)

  if (err.response) {
    {
      res.status(err.response.status)
      res.json({
        message: err.message,
        data: err.response?.data,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
      })
    }
  } else {
    res.status(500)
    res.json({
      message: err.message,
    })
  }
}
