import http from './http'
export const getTypeOne = () => http({url:'/getTypeOne'})
export const getSearch = (text) => http({url:'/search?word='+text})
// 主页列表 
export const getList = (i) => http({url:'/goodList?page='+i})
// 上新接口
export const getNewList = () => http({url:'/newList?page=1'})
// 详情接口 
export const getDetail = (id) => http({url:'/detail?goodId='+id})