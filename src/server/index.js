import koa from 'koa'
import React from 'react'
import Static from 'koa-static'
import {render} from "../utils"

const app = new koa()

app.use(Static('bundle'))

app.use(async ctx => {
  ctx.body = render(ctx)
})

app.listen(3000)
