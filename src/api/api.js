import service from '../service'

// 登陆接口
export function login(data) {
  return service({
    method: 'post',
    url: '/login',
    data,
  })
}
