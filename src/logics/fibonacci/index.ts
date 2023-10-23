import { Matrix } from '../matrix/index'

export const fibonacci = (n: bigint): bigint => {
  if (Number(n) < 0) {
    throw new Error(
      'The argument n for the fibonacci(n) must be a positive number.'
    )
  }

  if (n === 0n || n === 1n) {
    return n
  }

  const result = Matrix.pow(
    [
      [1n, 1n],
      [1n, 0n],
    ],
    n - 1n
  )
  return result[0][0]
}
