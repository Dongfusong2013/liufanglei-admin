
import request from '@/utils/request'


//管理端
export function updateCivilLocation(data) {
  return request({
    url: '/civilLocation/detail',
    method: 'post',
    data
  })
}


export function getCivilLocationList(data) {
  return request({
    url: '/civilLocation/list',
    method: 'get',
  })
}
