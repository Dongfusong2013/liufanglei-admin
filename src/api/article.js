import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}



export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}


export function fetchArticle(id, type) {
  return request({
    url: '/article/get',
    method: 'get',
    params: { id, articleType:type}
  })
}
export function updateArticle(data) {
  return request({
    url: '/article/detail',
    method: 'post',
    data
  })
}

export function getArticleList(data) {
  return request({
    url: '/article/list',
    method: 'post',
    data
  })
}
