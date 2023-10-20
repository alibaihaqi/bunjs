
import { app } from '../../utils/elysia'

export const v1group = app.group('/v1', app => app
  .get('/', () => 'Using v1')
)