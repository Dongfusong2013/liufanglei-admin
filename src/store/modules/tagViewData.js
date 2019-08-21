const state = {
  visitViews: [],
  cachedViews: [],
}

const getters = {
  cachedViews() {
    return state.cachedViews;
  }
}

const mutations = {
  ADD_VIEW: (state, view) => {
    if (state.visitViews.some((v) => {
        return v.path === view.path
      })) {
      return;
    }
    state.visitViews.push(view);
  },
  DEL_VIEW(state, viewPath) {
    for (let i = 0; i < state.visitViews.length; i++) {
      if (state.visitViews[i].path === viewPath) {
        state.visitViews.splice(i, 1);
      }
    }
  },
  UPDATE_VIEW(state, view) {
    for (let i = 0; i < state.visitViews.length; i++) {
      if (state.visitViews[i].path === view.path) {
        state.visitViews[i].title = view.title;
      }
    }
  },
  ADD_CACHED(state, view) {
    if (view.noCached == false) {
      console.log("add cached...",view);
      state.cachedViews.push(view.path);
    }
  },
  DEL_CACHED(state, viewPath) {
    console.log("-----pathName", viewPath);
    for (let i = 0; i < state.cachedViews.length; i++) {
      if (state.cachedViews[i] === viewPath) {
        state.cachedViews.splice(i, 1);
        console.log("--del---pathName", viewPath);
      }
    }
  },
}

const actions = {
  addView({
    commit
  }, view) {
    commit('ADD_VIEW', view);
    commit('ADD_CAHCED', view);
  },
  updateVisitedView({
    commit
  }, view) {
    return commit('UPDATE_VIEW', view);
  },
  deleteView({
    commit
  }, view) {
    commit('ADD_VIEW', view);
    commit('ADD_CAHCED', view);
  }
}

export default {
  namespaced: true,
  name: 'tagViewData',
  state,
  mutations,
  actions,
  getters,
}
