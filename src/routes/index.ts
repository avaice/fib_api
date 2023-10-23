import { Hono } from 'hono'
import { fibRoute } from './fib/index'

const app = new Hono()

app.get('/', (c) => c.text('This is fib_api server!'))
app.get('/fib', fibRoute)

export default app
