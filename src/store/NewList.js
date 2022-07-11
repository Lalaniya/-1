import { getNewList } from '@/util'

const state = () => {
  return {
    NewList:[]
  }
}
const actions = {
    async reqNewList({commit}) {
        let result = await getNewList()
        if (result.status===200) {
            commit('REQNEWLIST',result.data)
        }
    }
}
const mutations = {
    REQNEWLIST(state,val) {
        state.NewList=val
    }

}
const getters = {}
const NewList = {
  namespaced: true,
  name: 'newlist',
  state,
  actions,
  mutations,
  getters
}
export default NewList
