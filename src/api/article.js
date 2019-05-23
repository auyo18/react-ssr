import request from '../utils/request'

export const getArticleList = () => {
  return request('/articleList.json')
}
