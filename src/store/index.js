import { createStore } from 'vuex'
import home from './home'
import NewList from './NewList'
export default createStore({
  modules: {
    home,
    NewList
  }
})
