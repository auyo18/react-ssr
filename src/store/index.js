import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

const getStore = () => createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, composeEnhancers(applyMiddleware(thunk)))
}

export {getStore, getClientStore}
