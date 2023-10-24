# fib_api

技術課題

指定したn番目のフィボナッチ数を返すapiです。

`n < 1500000`までの数で動作を確認しました。

## API

```
Base URL: https://fib.cho-ice.xyz
Endpoint: /fib
Query: n=数値(フィボナッチ数列の順番を指定する値)
```
Demo: https://fib.cho-ice.xyz/fib?n=99

## Technologies

- Language
  - TypeScript on bun
- Web Framework
  - Hono
- Test
  - bun test
- Linter & Formatter
  - ESLint
  - Prettier

## How to run

### Dev

```
bun install
bun run dev
```

```
open http://localhost:3000
```

### Prod

Set `PORT={PORT}` to `.env`

```
npm i
npm start # bun will be install before running.
```

## Directory

主要なファイルのみ記述しています。

- src
  - logics
    - fibonacci
      - index.ts(フィボナッチ数計算)
      - index.test.ts(ユニットテスト)
    - matrix
      - index.ts(行列計算)
      - index.test.ts(ユニットテスト)
  - routes
    - index.ts(エントリポイント)
    - fib
      - index.ts (/fib)
- README.md
- Dockerfile (コンテナ管理)
- build.sh (ビルド＆デプロイ処理)
