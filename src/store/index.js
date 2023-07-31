import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      activeSidebar: {},
    };
  },
  mutations: {
    setActiveSidebar(state, paload) {
      state.activeSidebar = paload;
    },
  },
  actions: {
    setActiveSidebar(context, paload) {
      context.commit('setActiveSidebar', paload);
    },
  },
  getters() {},
});
