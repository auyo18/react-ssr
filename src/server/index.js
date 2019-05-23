import koa from 'koa'
import React from 'react'
import Static from 'koa-static'
import {renderToString} from 'react-dom/server'
import Home from '../containers/Home'

const app = new koa()
const html = renderToString(<Home/>)

app.use(Static('bundle'))

app.use(async ctx => {
  ctx.body = `<!doctype html>
<html lang="zh_CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>react-ssr</title>
</head>
<body>
<div id="root">${html}</div>
<script src="./index.js"></script>
</body>
</html>
`
})

app.listen(3000)
