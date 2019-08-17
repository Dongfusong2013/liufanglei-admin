const state = {
    visitViews:[],
}

const mutations = {
    addView:(state, view)=>{
        if (state.visitViews.some((v)=>{
            if (view.path === v.path){
              return;
            }
        }))
        state.visitViews.push(view);
        return state.visitViews;
    }
}

const actions = {
    addview({commit}, view){
        return commit('addView', view);
    }
}

export default{
    namespaced:true,
    name:'tagViewData',
    state,
    mutations,
    actions,
}
