import request from '../utils/request'

export const getArticleList = () => {
  return request({
    url: 'http://127.0.0.1:3000/api/articleList.json',
    method: 'get'
  })
}

export const getMoreArticleList = () => {
  return request({
    url: 'http://127.0.0.1:3000/api/moreArticleList.json',
    method: 'get'
  })
}
