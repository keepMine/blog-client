import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      num: 0,
      name: 'lucy',
      arr: [1,2,3,4]
    }
  },
  getters: {
   
  },
  mutations: {
    increment(state,paload) {
      state.num += paload
    },
    decrement(state,paload) {
      state.num -= paload.num
    }
  },
  actions: {
    increment(context,paload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('increment',paload)
          console.log('first')
          resolve(true)
        },1000)
      })  
    },
    decrement(context,paload) {
      context.dispatch('increment',3).then(
        () => {
          console.log('11')
          context.commit('decrement',paload)
        }
      )
    }

  },
  getters() {

  }
})