const big = [...[0, 1, 2].map((v) => BigInt(v))]
const memo = new Map<bigint, bigint>()

export const fibonacci = (n: bigint): bigint => {
  if (Number(n) < 0) {
    throw new Error(
      'The argument n for the fibonacci(n) must be a positive number.'
    )
  }
  const memoValue = memo.get(n)
  if (memoValue) {
    return memoValue
  }

  if (n === big[0] || n === big[1]) {
    return n
  }
  const result = fibonacci(n - big[1]) + fibonacci(n - big[2])
  memo.set(n, result)
  return result
}
