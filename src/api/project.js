import request from '@/utils/request'

export function fetchProject(id) {
  return request({
    url: '/project/get',
    method: 'get',
    params: { id}
  })
}


export function updateProject(data) {
  return request({
    url: '/project/detail',
    method: 'post',
    data
  })
}

export function getProjectList(data) {
  return request({
    url: '/project/list',
    method: 'get',
  })
}
