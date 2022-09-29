import service from '../service'

// 登陆接口
export function login(data) {
  return service({
    method: 'post',
    url: '/login',
    data,
  })
}

// 获取学生列表接口
export function students(params) {
  return service({
    method: 'get',
    url: '/students',
    params,
  })
}

// 删除学生数据接口
export function delStuent(id) {
  return service({
    method: 'delete',
    url: `students/${id}`,
    id,
  })
}
