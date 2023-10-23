import { Hono } from '../../node_modules/hono/dist/types/hono'
import { fibRoute } from './fib/index'

const app = new Hono()

app.get('/', (c) => c.text('This is fib_api server!'))
app.get('/fib', fibRoute)

export default app
