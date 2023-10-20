import { Context } from 'hono'
import { fibonacci } from '../../logics/fibonacci'

export const fibRoute = (c: Context) => {
  const n = Number(c.req.query('n'))
  if (isNaN(n) || n < 0) {
    c.status(400)
    return c.json({
      status: 400,
      message: "Required query parameter 'n' is missing or invalid.",
    })
  }

  return c.json({
    result: fibonacci(BigInt(n)).toString(),
  })
}
