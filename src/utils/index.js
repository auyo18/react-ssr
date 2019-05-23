import React from 'react'
import {Route} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {matchRoutes} from "react-router-config"
import {Provider} from 'react-redux'
import routes from '../routes'
import getStore from '../store'

export const render = (ctx) => {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, ctx.path)
  console.log(matchedRoutes)
  const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.path} context={{}}>
          {routes.map(route => (
              <Route {...route} />
          ))}
        </StaticRouter>
      </Provider>
  )

  return `<!doctype html>
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
}
