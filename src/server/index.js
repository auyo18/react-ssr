import koa from 'koa'
import React from 'react'
import Static from 'koa-static'
import {matchRoutes} from "react-router-config"
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import {render} from "../utils"
import {getStore} from "../store"
import routes from "../routes"

const app = new koa()

app.use(conditional())
app.use(etag())
app.use(Static('bundle'))

app.use(async ctx => {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, ctx.path)
  const context = {}

  for (let i = 0, len = matchedRoutes.length; i < len; i++) {
    let matchedRoute = matchedRoutes[i]
    matchedRoute.route.loadData && await matchedRoute.route.loadData(store)
  }

  const html = render(ctx, store, context)

  if (context.NOT_FOUND) {
    ctx.status = 404
  }
  ctx.body = html
})

app.listen(3000)
