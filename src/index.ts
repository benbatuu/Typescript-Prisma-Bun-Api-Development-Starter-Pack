import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { etag } from 'hono/etag';
import { secureHeaders } from 'hono/secure-headers';
import { HTTPException } from 'hono/http-exception';
import HttpStatusCode from './enums/httpstatuscode';
// Controllers

const app = new Hono();

app.use('*', cors());
app.use('*', etag());
app.use('*', secureHeaders());


app.use('*', async (c, next) => {
  logger();
  console.log(`[${c.req.method}] ${c.req.url}`);
  await next();
  c.header('X-Powered-By', 'DNA Tech');
});

app.notFound((c) => {
  return new Response(JSON.stringify({ error: { message: 'Not Found', route: c.req.path } }), {
    status: HttpStatusCode.NOT_FOUND,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

app.onError((err, c) => {
  if (err instanceof HTTPException)
    return new Response(JSON.stringify({ error: { message: err.message } }), {
      status: HttpStatusCode.BAD_REQUEST,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(err.message);
  return new Response(JSON.stringify({ error: { message: 'Internal Server Error' } }), {
    status: HttpStatusCode.INTERNAL_SERVER_ERROR,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

// Routes
app.get('/', async (c) => c.json({ data: 'OK' }));


export default app;
