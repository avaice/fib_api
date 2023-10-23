# fib_api

技術課題

指定したn番目のフィボナッチ数を返すapiです。

`n < 10000`までの数に対応しています。

## Technologies

- Language
  - TypeScript on bun
- Web Framework
  - Hono
- Test
  - bun test (Jest compatible)

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
npm start # bun will install before running.
```

## Directory

- src
  - logics
    - (logic components...)
  - routes
    - index.ts(entry point)
    - (api routes...)
