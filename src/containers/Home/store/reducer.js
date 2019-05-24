import types from './types'

const defaultState = {
  name: 'JaMie',
  homeList: [],
  moreList: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      newState.homeList = action.homeList
      return newState
    case types.GET_MORE_ARTICLE_LIST:
      newState.moreList = action.moreList
      return newState
    default:
      return state
  }
}
