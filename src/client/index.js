import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {Route} from 'react-router-dom'
import routes from '../routes'
import {Provider} from 'react-redux'
import getStore from '../store'

const App = () => {
  return (
      <Provider store={getStore()}>
        <BrowserRouter>
          {routes.map(route => (
              <Route {...route} />
          ))}
        </BrowserRouter>
      </Provider>
  )
}

ReactDom.hydrate(<App/>, document.getElementById('root'))
