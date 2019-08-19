const state = {
  visitViews: [],
}

const getters = {
  cachedViews() {
    var results = [];
    let views = state.visitViews;
    for (let view in views) {
      if (view.noCatched == false) {
         results.push(view.title);
      }
    }
    console.log("==cachedViews===",results);
    return results;
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
  }

}

const actions = {
  addView({
    commit
  }, view) {
    return commit('ADD_VIEW', view);
  },
  updateVisitedView({
    commit
  }, view) {
    return commit('UPDATE_VIEW', view);
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
