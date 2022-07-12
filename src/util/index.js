import http from './http'
export const getTypeOne = () => http({url:'/getTypeOne'})
// 搜索接口
export const getSearch = (text) => http({url:'/search?word='+text})
// 主页列表 
export const getList = (i) => http({url:'/goodList?page='+i})
// 上新接口
export const getNewList = () => http({url:'/newList?page=1'})
// 详情接口 
export const getDetail = (id) => http({url:'/detail?goodId='+id})
// 注册接口
export const LoginUser = (name,password) => http({url:`/register?userName=${name}&password=${password}`})
// 登录接口
export const SignUp = (name,password) => http({url:`/login?userName=${name}&password=${password}`})
// 加入购物车
export const AddShop = (id,token) => http({url:`/add?goodId=${id}&token=${token}`})
// 获取购物车列表
export const GetCarList = (token) => http({url:'/shoplist?token='+token})
// 购物车减少
export const Getjianshao = (id,token) => http({url:`/remove?goodId=${id}&token=${token}`})
// 购物车增加
export const Getjiajia = (id,token) => http({url:`/add?goodId=${id}&token=${token}`})
// 购物车删除
export const Getdel = (id,token) => http({url:`/del?goodId=${id}&token=${token}`})