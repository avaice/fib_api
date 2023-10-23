import { expect, test } from 'bun:test'
import { Matrix } from '.'

test('matrix function: mul', () => {
  expect(
    Matrix.mul(
      [
        [2n, 3n],
        [1n, 4n],
      ],
      [
        [3n, 1n],
        [2n, 4n],
      ]
    )
  ).toEqual([
    [12n, 14n],
    [11n, 17n],
  ])
  expect(
    Matrix.mul(
      [
        [2345n, 3324n],
        [3332n, 1231n],
      ],
      [
        [1415n, 3235n],
        [4467n, 5236n],
      ]
    )
  ).toEqual([
    [18166483n, 24990539n],
    [10213657n, 17224536n],
  ])
})

test('matrix function: pow', () => {
  expect(
    Matrix.pow(
      [
        [2n, 3n],
        [11n, 8n],
      ],
      2n
    )
  ).toEqual([
    [37n, 30n],
    [110n, 97n],
  ])

  expect(
    Matrix.pow(
      [
        [2n, 3n],
        [11n, 8n],
      ],
      9n
    )
  ).toEqual([
    [930563882n, 802039563n],
    [2940811731n, 2534643008n],
  ])
})
