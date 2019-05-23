import types from './types'
import {getArticleList} from "../../../api/article"

export const getHomeArticleList = () => {
  return async dispatch => {
    let {code, data} = await getArticleList()
    if (code === 0 && data.length) {
      dispatch({
        type: types.GET_ARTICLE_LIST,
        homeList: data
      })
    }
  }
}
