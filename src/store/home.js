import { getTypeOne, getSearch, getList} from '@/util'

const state = () => {
  return {
    ClassList: [],
    SearchRe: [],
    HomeList: []
  }
}
const actions = {
    // 分类获取
  async getTypeOneLsit({ commit }) {
    let result = await getTypeOne()
    if (result.status === 200) {
      commit('GETTYPEONELIST', result.data)
    }
  },
  //   热搜
  async getSearchList({ commit }, val) {
    let result = await getSearch(val)
    if (result.status===200) {
        commit('GETSEARCHLIST',result.data)
    }
  },
  //  首页详情列表  
  async getListHome({commit},val) {
    let result = await getList(val)
    if (result.status===200) {
       commit('GETLISTHOME',result.data)
    }
  }
}
const mutations = {
     // 分类获取
  GETTYPEONELIST(state, val) {
    state.ClassList = val
  },
  //   热搜 搜索接口
  GETSEARCHLIST(state, val) {
    state.SearchRe = val
  },
  //  首页详情列表  
  GETLISTHOME(state, val) {
    state.HomeList = [...state.HomeList,...val]
  }
}
const getters = {}
const home = {
  namespaced: true,
  name: 'home',
  state,
  actions,
  mutations,
  getters
}
export default home
