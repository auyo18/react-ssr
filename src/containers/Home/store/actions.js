import types from './types'
import {getArticleList} from "../../../api/article"

export const getHomeArticleList = () => {
  return async dispatch => {
    let {data} = await getArticleList()
    dispatch({
      type: types.GET_ARTICLE_LIST,
      homeList: data
    })
  }
}
