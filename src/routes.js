import React from 'react'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const routes = [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routes
