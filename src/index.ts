import { cookie } from '@elysiajs/cookie'
import { cors } from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import { swagger } from '@elysiajs/swagger'

import { app } from './utils/elysia'
import { v1group } from './routes/v1'

app
  .use(swagger())
  .use(cors())
  .use(
    jwt({
      alg: 'RS256',
      exp: '1d',
      name: 'jwt',
      secret: process.env.JWT_SECRET as string,
    })
  )
  .use(cookie())
  .get('/', () => {
    return {
      message: 'Hello Elysia'
    }
  })
  .use(v1group)
  .listen(process.env.APP_PORT ?? 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
