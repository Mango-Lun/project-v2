import service from '../service'
import qs from 'qs'

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

// 信息列表查询接口
export function getInfo() {
  return service({
    method: 'get',
    url: '/info',
  })
}

// 信息列表新增接口
export function addInfo(data) {
  data = qs.stringify(data)
  return service({
    method: 'post',
    url: '/info',
    data,
  })
}

// 信息列表修改接口
export function updateInfo(data) {
  data = qs.stringify(data)
  return service({
    method: 'put',
    url: '/info',
    data,
  })
}

// 信息列表新增、修改接口
export function info(type, data) {
  data = qs.stringify(data)
  let obj = { method: type, url: '/info', data }
  return service({
    obj,
  })
}

// 信息列表删除接口
export function deleteInfo(id) {
  return service({
    method: 'delete',
    url: `/info/${id}`,
    id,
  })
}

// 作业列表查询接口
export function work() {
  return service({
    method: 'get',
    url: '/works',
  })
}

// 作业列表分页
export function works(page, size) {
  return service({
    method: 'get',
    url: `/works?page=${page}&size=${size}`,
  })
}

// 数据概览接口
export function dataview() {
  return service({
    method: 'get',
    url: '/dataview',
  })
}
