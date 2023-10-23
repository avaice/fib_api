type Matrix2 = [bigint, bigint]
type Matrix2x2 = [Matrix2, Matrix2] // 2x2の行列型

// 行列計算関数 (for bigint)
export const Matrix = {
  // 行列の積
  mul: (a: Matrix2x2, b: Matrix2x2): Matrix2x2 => {
    return [
      [
        a[0][0] * b[0][0] + a[0][1] * b[1][0],
        a[0][0] * b[0][1] + a[0][1] * b[1][1],
      ],
      [
        a[1][0] * b[0][0] + a[1][1] * b[1][0],
        a[1][0] * b[0][1] + a[1][1] * b[1][1],
      ],
    ]
  },
  // 行列の累乗
  pow: (mat: Matrix2x2, n: bigint): Matrix2x2 => {
    if (n === 1n) {
      return mat
    }
    if (n % 2n === 0n) {
      const half = Matrix.pow(mat, n / 2n)
      return Matrix.mul(half, half)
    } else {
      const half = Matrix.pow(mat, (n - 1n) / 2n)
      return Matrix.mul(Matrix.mul(half, half), mat)
    }
  },
} as const
