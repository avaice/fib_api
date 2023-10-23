import { Matrix } from '../matrix/index'

export const fibonacci = (n: bigint): bigint => {
  const result = Matrix.pow(
    [
      [1n, 1n],
      [1n, 0n],
    ],
    n - 1n
  )
  return result[0][0]
}
