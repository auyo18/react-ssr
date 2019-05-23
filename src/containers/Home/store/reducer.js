import types from './types'

const defaultState = {
  name: 'JaMie',
  homeList: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      newState.homeList = action.homeList
      return newState
    default:
      return state
  }
}
