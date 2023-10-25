import { Context } from '../../../node_modules/hono/dist/types/context'
import { fibonacci } from '../../logics/fibonacci/index'

export const fibRoute = (c: Context) => {
  const n = Number(c.req.query('n'))
  if (isNaN(n) || n < 0) {
    c.status(400)
    return c.json({
      status: 400,
      message: "Required query parameter 'n' is missing or invalid.",
    })
  }

  const result = fibonacci(BigInt(n))

  // これだとresultの値がダブルクォーテーションで囲まれてしまう
  // return c.json({
  //   result: result.toString(),
  // })

  /**
   * JSON.stringifyはBigIntに対応していないので、直接JSONを書き出しています。
   * BigIntの値がString型で保持されないことで、JavaScriptのJSON.parseメソッドで値を正しく読み込めなくなるデメリットがありますが、
   * JSONの仕様では最大桁数に関する決まりがないため、この実装で返すJSONが本来正しいものであると考えます。
   * JSON Standard: https://www.ecma-international.org/publications-and-standards/standards/ecma-404/
   */
  c.header('Content-Type', 'application/json; charset=UTF-8')
  return c.body(`{"result":${result.toString()}}`)
}
