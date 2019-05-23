import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from "react-router-config"
import routes from '../routes'

export const render = (ctx, store, context) => {

  const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.path} context={context}>
          {renderRoutes(routes)}
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
<script>
  window.context={
    state:${JSON.stringify(store.getState())}
  }
</script>
<script src="./index.js"></script>
</body>
</html>
`
}
