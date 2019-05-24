import types from './types'
import {getArticleList, getMoreArticleList} from "../../../api/article"

export const getHomeArticleList = () => {
  return async dispatch => {
    try {
      let {code, result} = await getArticleList()
      if (code === 0 && result && result.length) {
        dispatch({
          type: types.GET_ARTICLE_LIST,
          homeList: result
        })
      }
    } catch (e) {
      console.log(e.message)
    }
    try {
      let {code, result} = await getMoreArticleList()

      if (code === 0 && result && result.length) {
        dispatch({
          type: types.GET_MORE_ARTICLE_LIST,
          moreList: result
        })
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}
